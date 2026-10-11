"""Command tree. Thin: each command gathers data, wraps it in an envelope, emits it."""

from __future__ import annotations

from typing import Annotated, Any

import typer

from brewscope import __version__
from brewscope import doctor as doctor_mod
from brewscope.envelope import BrewscopeError, Exit, build, emit, emit_error, resolve_format

app = typer.Typer(
    name="brewscope",
    help="Inventory, feature and conflict analysis for Homebrew on macOS, built for AI agents.",
    no_args_is_help=True,
    add_completion=False,
    pretty_exceptions_enable=False,
)

FormatOpt = Annotated[
    str | None,
    typer.Option(
        "--format",
        "-f",
        help="json | ndjson | table (default: table on a TTY, json when piped)",
    ),
]


def _out(command: str, data: Any, fmt: str | None, **kw: Any) -> None:
    emit(build(command, data, **kw), resolve_format(fmt))


@app.command()
def version(fmt: FormatOpt = None) -> None:
    """Print the brewscope version."""
    _out("version", {"version": __version__}, fmt)


@app.command()
def doctor(fmt: FormatOpt = None) -> None:
    """Probe what this machine lets brewscope read (brew, history, Full Disk Access)."""
    checks, source, warnings = doctor_mod.run()
    _out("doctor", checks, fmt, source=source, warnings=warnings)
    if not source["capabilities"]["brew"]:
        raise typer.Exit(Exit.ENVIRONMENT)


@app.command()
def describe(fmt: FormatOpt = None) -> None:
    """Machine-readable command tree: commands, options, exit codes."""
    root = typer.main.get_command(app)
    commands = []
    for name, cmd in sorted(root.commands.items()):  # type: ignore[attr-defined]
        commands.append(
            {
                "command": name,
                "help": (cmd.help or "").strip().splitlines()[0] if cmd.help else "",
                "schema": f"brewscope.{name}/1",
                "options": [
                    {
                        "name": p.opts[0] if p.param_type_name == "option" else p.name,
                        "required": p.required,
                        "help": getattr(p, "help", None),
                    }
                    for p in cmd.params
                ],
            }
        )
    data = {
        "tool": "brewscope",
        "version": __version__,
        "commands": commands,
        "exit_codes": {e.name.lower(): int(e) for e in Exit},
        "env": {"BREWSCOPE_FORMAT": "default output format"},
    }
    _out("describe", data, fmt)


def main() -> None:
    try:
        # standalone_mode=False returns a command's exit code instead of exiting
        rc = app(standalone_mode=False)
        if isinstance(rc, int) and rc:
            raise SystemExit(rc)
    except BrewscopeError as err:
        emit_error(err)
        raise SystemExit(err.exit_code) from None
    except typer.Exit as exc:
        raise SystemExit(exc.exit_code) from None
    except typer.Abort:
        raise SystemExit(Exit.INTERNAL) from None
    except typer.TyperException as exc:  # usage errors: unknown command/option, bad value
        _usage_error(str(exc))


def _usage_error(message: str) -> None:
    root = typer.main.get_command(app)
    emit_error(
        BrewscopeError(
            "E_USAGE",
            message,
            remediation="valid commands: " + ", ".join(sorted(root.commands)),  # type: ignore[attr-defined]
            exit_code=Exit.USAGE,
        )
    )
    raise SystemExit(Exit.USAGE)
