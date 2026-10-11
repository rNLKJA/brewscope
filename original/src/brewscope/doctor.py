"""Capability probe: what this machine lets brewscope read. Never prompts, never writes.

Deliberately avoided:
- osascript / System Events (login items) would raise an Automation consent dialog.
- `<binary> --version` probes would bump the access times used as a usage signal.
- `zsh -ilc` would run the user's whole .zshrc.
"""

from __future__ import annotations

import os
import shutil
import subprocess
from pathlib import Path
from typing import Any

HOME = Path.home()
KNOWLEDGE_DB = HOME / "Library/Application Support/Knowledge/knowledgeC.db"
BIOME_STREAMS = HOME / "Library/Biome/streams/restricted"

# Every brew call brewscope makes runs with this environment so it never
# updates taps or the API cache as a side effect.
BREW_ENV = {
    "HOMEBREW_NO_AUTO_UPDATE": "1",
    "HOMEBREW_NO_ANALYTICS": "1",
    "HOMEBREW_API_AUTO_UPDATE_SECS": "31536000",
}


def _check(name: str, ok: bool, detail: str = "", remediation: str = "") -> dict[str, Any]:
    return {
        "check": name,
        "ok": ok,
        "detail": detail,
        "remediation": remediation or None,
    }


def _readable(path: Path) -> tuple[bool, str]:
    try:
        with path.open("rb") as fh:
            fh.read(16)
        return True, str(path)
    except FileNotFoundError:
        return False, "not found"
    except PermissionError:
        return False, "permission denied"
    except OSError as exc:  # TCC denials surface as EPERM
        return False, exc.strerror or "unreadable"


def _listable(path: Path) -> tuple[bool, str]:
    try:
        n = sum(1 for _ in path.iterdir())
        return True, f"{n} entries"
    except FileNotFoundError:
        return False, "not found"
    except OSError as exc:
        return False, exc.strerror or "unlistable"


def brew_version(brew: str) -> str | None:
    env = {**os.environ, **BREW_ENV}
    try:
        out = subprocess.run(
            [brew, "--version"], capture_output=True, text=True, timeout=20, env=env, check=False
        )
    except (OSError, subprocess.TimeoutExpired):
        return None
    first = out.stdout.splitlines()[0] if out.stdout else ""
    return first.removeprefix("Homebrew ").strip() or None


def run() -> tuple[list[dict[str, Any]], dict[str, Any], list[str]]:
    checks: list[dict[str, Any]] = []
    warnings: list[str] = []

    brew = shutil.which("brew")
    version = brew_version(brew) if brew else None
    checks.append(
        _check(
            "brew",
            bool(version),
            f"{brew} {version}" if version else "brew not on PATH",
            "" if version else "install Homebrew from https://brew.sh",
        )
    )

    histfile = Path(os.environ.get("HISTFILE", HOME / ".zsh_history"))
    ok, detail = _readable(histfile)
    checks.append(
        _check(
            "zsh_history",
            ok,
            detail,
            "" if ok else "set HISTFILE or enable zsh history",
        )
    )

    ok_kc, detail = _readable(KNOWLEDGE_DB)
    checks.append(
        _check(
            "knowledgec",
            ok_kc,
            detail,
            ""
            if ok_kc
            else "grant Full Disk Access to the app that launches brewscope "
            "(System Settings > Privacy & Security > Full Disk Access)",
        )
    )

    ok_bio, detail = _listable(BIOME_STREAMS)
    checks.append(_check("biome", ok_bio, detail, "" if ok_bio else "needs Full Disk Access"))

    checks.append(
        _check(
            "automation",
            False,
            "not probed: checking would raise a consent dialog",
            "login items are read from LaunchAgents instead; opt in later with --allow-automation",
        )
    )

    fda = ok_kc or ok_bio
    if not fda:
        warnings.append("app-usage sources unavailable without Full Disk Access")
    capabilities = {
        "brew": bool(version),
        "fda": fda,
        # FDA belongs to the responsible app, not to brewscope itself; a launchd
        # job will not inherit what the current terminal has.
        "fda_via": os.environ.get("__CFBundleIdentifier") or os.environ.get("TERM_PROGRAM"),
        "zsh_history": checks[1]["ok"],
    }
    source = {"brew": version, "capabilities": capabilities}
    return checks, source, warnings
