"""brewscope: Homebrew inventory, feature and conflict analysis built for AI agents."""

__version__ = "0.1.0"


def main() -> None:
    from brewscope.cli import main as _main  # noqa: PLC0415 - lazy import keeps startup fast

    _main()
