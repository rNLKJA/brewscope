"""Golden tests for the output contract: envelope shape and exit codes."""

import subprocess
import sys

import orjson
import pytest

from brewscope.envelope import BrewscopeError, Exit, build, resolve_format


def run(*args: str, env: dict | None = None) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, "-c", "from brewscope import main; main()", *args],
        capture_output=True,
        check=False,
        env=env,
    )


def test_envelope_shape():
    env = build("demo", [{"a": 1}], warnings=["w"])
    assert env["schema"] == "brewscope.demo/1"
    assert env["ok"] is True
    assert set(env) == {
        "schema",
        "ok",
        "generated_at",
        "source",
        "data",
        "truncated",
        "next",
        "warnings",
    }


def test_piped_output_defaults_to_json():
    out = run("version")
    assert out.returncode == Exit.OK
    assert orjson.loads(out.stdout)["data"]["version"]


def test_unknown_format_is_usage_error():
    with pytest.raises(BrewscopeError) as exc:
        resolve_format("xml")
    assert exc.value.exit_code == Exit.USAGE


def test_unknown_command_exits_2_with_error_object():
    out = run("nope")
    assert out.returncode == Exit.USAGE
    err = orjson.loads(out.stderr.splitlines()[-1])
    assert err["error"]["code"] == "E_USAGE"
    assert "doctor" in err["error"]["remediation"]


def test_describe_lists_commands_and_exit_codes():
    data = orjson.loads(run("describe").stdout)["data"]
    names = {c["command"] for c in data["commands"]}
    assert {"describe", "doctor", "version"} <= names
    assert data["exit_codes"]["environment"] == 5


def test_doctor_without_brew_exits_5():
    out = run("doctor", env={"PATH": "/usr/bin:/bin", "HOME": "/tmp"})
    assert out.returncode == Exit.ENVIRONMENT
    checks = orjson.loads(out.stdout)["data"]
    assert next(c for c in checks if c["check"] == "brew")["ok"] is False
