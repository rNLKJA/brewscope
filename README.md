# brewscope

A read-only terminal tool that explains what your Homebrew setup actually does on macOS. It shows which packages overlap or shadow each other, how often you and your AI agents use each one, and what a move to a new Mac needs to carry across.

**Live demo:** [brewscope.vercel.app](https://brewscope.vercel.app)

[![CI](https://github.com/rNLKJA/brewscope/actions/workflows/ci.yml/badge.svg)](https://github.com/rNLKJA/brewscope/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](original/LICENSE)

## Showcase

**[Interactive demo](https://brewscope.vercel.app/demo)**: Explore brewscope commands with synthetic output in your browser.

![Landing page](docs/showcase/landing.png)

**[Take the guided tour](https://brewscope.vercel.app/tour)**: Walkthrough videos showing brewscope in action.

## Why

Homebrew knows what you installed. It does not know:

- that `python3` on your PATH comes from pyenv, while brew's two Pythons never win
- that two of your casks are both clipboard managers, and you have opened one of them twice this year
- that nine casks brew thinks are installed have no app any more, so a naive `brew bundle dump` would reinstall them on your next Mac

brewscope reads the filesystem, your PATH and your usage history, so it can answer those questions.

## Install

```bash
uv tool install git+https://github.com/rNLKJA/brewscope
```

Requires macOS, Homebrew and Python 3.13 or later (uv will fetch it).

## Use

```bash
brewscope doctor             # what this machine lets brewscope read
brewscope describe           # machine-readable command tree and exit codes
brewscope doctor -f table    # force a table; piped output defaults to JSON
```

Every command prints one envelope:

```json
{"schema": "brewscope.doctor/1", "ok": true, "generated_at": "...",
 "source": {"brew": "7.0.7", "capabilities": {"fda": true}},
 "data": [...], "truncated": false, "next": null, "warnings": []}
```

| Exit code | Meaning |
|---|---|
| 0 | OK |
| 1 | Internal error |
| 2 | Usage error (stderr names the valid commands) |
| 3 | Not found |
| 4 | Confirmation required |
| 5 | Environment problem (brew missing, permission denied) |
| 6 | Data stale and `--offline` set |
| 10 | Findings exist (`--check` only) |

Errors go to stderr as `{"ok": false, "error": {"code", "message", "remediation", "retryable"}}`.

## Principles

- **Read-only.** brewscope never installs, removes or upgrades anything. Recommendations are printed as commands for you to run.
- **No side effects on its own signals.** It runs brew with auto-update off, never runs `<binary> --version` (that would bump the access times it reads), and never triggers a macOS consent dialog.
- **Counts, not content.** Usage is stored as counts per binary. Command lines from your history are never stored or printed.
- **Snapshots stay local.** `snapshots/` is gitignored, because a snapshot names your host, paths and dotfiles.

## Roadmap

| Milestone | What it adds |
|---|---|
| M0 | Output contract, `describe`, `doctor` ✅ |
| M1a | `snapshot create`: everything a migration needs, as plain JSON plus a Brewfile |
| M1b | Full inventory with filesystem attribution, `orphans`, `snapshot diff` |
| M2 | Capability taxonomy, `features`, `conflicts` (collisions, PATH shadowing, functional overlap) |
| M3 | `usage`: shell history (human), agent transcripts (agent), app launch history, de-noised access times |
| M4 | `recommend`: keep or drop per overlap group, with reasons and confidence |
| M5 | `export` and `migrate plan` for moving to a new Mac, plus a before/after check |
| M6 | Optional forward usage loggers and an MCP server mode |

## Development

The original Python CLI implementation is in `original/`.

The web app (this revival) is in `web/`:

```bash
cd web
pnpm install
pnpm dev          # http://localhost:3840
pnpm test
pnpm run build
```

## About

Built for AI coding agents first (Claude Code, Codex, Cursor): JSON on stdout, stable schemas, meaningful exit codes, no prompts. It stays pleasant for humans too, since a terminal gets a table.

This web app is a 2026 revival that demonstrates brewscope's capabilities in the browser with an interactive demo. The original terminal tool remains the primary implementation.

Provenance: Original implementation at [github.com/rNLKJA/brewscope](https://github.com/rNLKJA/brewscope). Web revival built with Next.js.

## Licence

MIT
