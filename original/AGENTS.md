# AGENTS.md

Instructions for AI agents working on brewscope. This file is public; keep anything machine-specific out of it.

## What this is

A read-only Python CLI (uv, typer, pydantic, orjson) that inventories Homebrew and related package managers on macOS, finds overlaps and conflicts, ranks packages by usage, and prepares Mac-to-Mac migration. Layout: `src/brewscope/` (package), `tests/` (pytest).

## Rules that never bend

- **Read-only.** No code path may install, uninstall, upgrade, tap, link, `defaults write`, `launchctl load` or `sudo`. Recommendations are emitted as text and the command exits 4.
- **Don't disturb the signals.** Run brew with `doctor.BREW_ENV` (auto-update off). Never execute `<binary> --version` to identify a binary, because it bumps the atime used as a usage signal; resolve with `readlink`/`realpath` instead. Never run `zsh -i` without `HISTFILE=/dev/null`.
- **Never prompt.** No TCC-triggering calls (osascript, System Events) unless the user passes an explicit opt-in flag. Missing permissions are warnings, not failures.
- **Counts only.** Usage collectors store counts per binary and actor (human or agent). Never store or print command lines, arguments or transcript text.
- **SQLite sources** are opened with `?mode=ro&immutable=1`.
- **Snapshots** never get committed. `snapshots/` is gitignored.

## Output contract

- Every command builds its output with `envelope.build()` and prints it with `envelope.emit()`. Logs go to stderr.
- Schema id `brewscope.<command>/<n>`. Bump `<n>` on any breaking change to `data`.
- Sort output on stable keys, so runs can be diffed.
- Errors: raise `BrewscopeError(code="E_...", remediation=..., exit_code=Exit.X)`. Codes are stable once released.
- A new command must show up in `brewscope describe` (it does automatically) and needs a contract test.

## Workflow

```bash
uv sync
uv run pytest -q
uv run ruff check . && uv run ruff format .
```

Keep startup fast: heavy imports go inside the command that needs them.
