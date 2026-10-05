"""Output contract: every command prints one envelope to stdout, logs go to stderr."""

from __future__ import annotations

import os
import sys
from datetime import datetime
from enum import IntEnum
from typing import Any

import orjson

ENVELOPE_VERSION = 1
FORMATS = ("json", "ndjson", "table")


class Exit(IntEnum):
    OK = 0
    INTERNAL = 1
    USAGE = 2
    NOT_FOUND = 3
    CONFIRM_REQUIRED = 4
    ENVIRONMENT = 5
    STALE_OFFLINE = 6
    FINDINGS = 10  # only with --check


class BrewscopeError(Exception):
    """An error with a stable code, a remediation hint and an exit code."""

    def __init__(
        self,
        code: str,
        message: str,
        *,
        remediation: str = "",
        retryable: bool = False,
        exit_code: Exit = Exit.INTERNAL,
    ) -> None:
        super().__init__(message)
        self.code = code
        self.message = message
        self.remediation = remediation
        self.retryable = retryable
        self.exit_code = exit_code

    def to_dict(self) -> dict[str, Any]:
        return {
            "code": self.code,
            "message": self.message,
            "remediation": self.remediation,
            "retryable": self.retryable,
        }


def resolve_format(requested: str | None) -> str:
    """Explicit flag > BREWSCOPE_FORMAT > table on a TTY, json when piped."""
    fmt = requested or os.environ.get("BREWSCOPE_FORMAT")
    if fmt:
        if fmt not in FORMATS:
            raise BrewscopeError(
                "E_USAGE",
                f"unknown format {fmt!r}",
                remediation=f"use one of: {', '.join(FORMATS)}",
                exit_code=Exit.USAGE,
            )
        return fmt
    return "table" if sys.stdout.isatty() else "json"


def build(
    command: str,
    data: Any,
    *,
    source: dict[str, Any] | None = None,
    warnings: list[str] | None = None,
    next_cmd: str | None = None,
    truncated: bool = False,
) -> dict[str, Any]:
    return {
        "schema": f"brewscope.{command}/{ENVELOPE_VERSION}",
        "ok": True,
        "generated_at": datetime.now().astimezone().isoformat(timespec="seconds"),
        "source": source or {},
        "data": data,
        "truncated": truncated,
        "next": next_cmd,
        "warnings": warnings or [],
    }


def emit(env: dict[str, Any], fmt: str) -> None:
    if fmt == "json":
        sys.stdout.buffer.write(orjson.dumps(env, option=orjson.OPT_SORT_KEYS) + b"\n")
    elif fmt == "ndjson":
        rows = env["data"] if isinstance(env["data"], list) else [env["data"]]
        for row in rows:
            sys.stdout.buffer.write(orjson.dumps(row, option=orjson.OPT_SORT_KEYS) + b"\n")
    else:
        _emit_table(env)


def emit_error(err: BrewscopeError) -> None:
    sys.stderr.buffer.write(orjson.dumps({"ok": False, "error": err.to_dict()}) + b"\n")


def _emit_table(env: dict[str, Any]) -> None:
    data = env["data"]
    rows = data if isinstance(data, list) else [data]
    if rows and all(isinstance(r, dict) for r in rows):
        cols = list(dict.fromkeys(k for r in rows for k in r))
        widths = {c: max(len(c), *(len(_cell(r.get(c))) for r in rows)) for c in cols}
        print("  ".join(c.ljust(widths[c]) for c in cols))
        for r in rows:
            print("  ".join(_cell(r.get(c)).ljust(widths[c]) for c in cols))
    else:
        print(orjson.dumps(data, option=orjson.OPT_INDENT_2).decode())
    for w in env["warnings"]:
        print(f"warning: {w}", file=sys.stderr)
    if env.get("next"):
        print(f"next: {env['next']}", file=sys.stderr)


def _cell(value: Any) -> str:
    if value is None:
        return "-"
    if isinstance(value, (dict, list)):
        return orjson.dumps(value).decode()
    return str(value)
