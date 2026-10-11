import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-12">
          <h1 className="mb-2 font-mono text-4xl font-bold tracking-tight text-black dark:text-white">
            brewscope
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A read-only terminal tool that explains what your Homebrew setup actually does on macOS
          </p>
        </header>

        <div className="mb-12">
          <Card className="border-2 border-black dark:border-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-mono text-2xl">What it does</CardTitle>
                <Badge
                  variant="outline"
                  className="border-[#FF3C3C] text-[#FF3C3C] font-mono"
                >
                  M0
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300">
                Homebrew knows what you installed. It does not know that python3 on your PATH comes from pyenv,
                that two of your casks are both clipboard managers and you have opened one of them twice this year,
                or that nine casks have no app any more.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                brewscope reads the filesystem, your PATH and your usage history to answer those questions.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary" className="font-mono">read-only</Badge>
                <Badge variant="secondary" className="font-mono">JSON output</Badge>
                <Badge variant="secondary" className="font-mono">AI agent first</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 font-mono text-2xl font-bold text-black dark:text-white">
            Try it
          </h2>
          <Card className="border-2 border-black dark:border-white">
            <CardContent className="p-6">
              <Link
                href="/demo"
                className="block rounded-sm bg-black px-6 py-3 text-center font-mono text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                Interactive demo
              </Link>
              <Separator className="my-6" />
              <div className="space-y-3">
                <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400">
                  Or install the CLI:
                </p>
                <pre className="rounded-sm bg-neutral-100 p-4 font-mono text-sm dark:bg-neutral-900">
                  <code>uv tool install git+https://github.com/rNLKJA/brewscope</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 font-mono text-2xl font-bold text-black dark:text-white">
            Principles
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-mono text-lg">Read-only</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Never installs, removes or upgrades anything. Recommendations are printed as commands for you to run.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-mono text-lg">No side effects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Runs brew with auto-update off, never triggers consent dialogs or bumps access times.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-mono text-lg">Counts, not content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Usage is stored as counts per binary. Command lines are never stored or printed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-mono text-lg">Local snapshots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Snapshots stay local because they name your host, paths and dotfiles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 font-mono text-2xl font-bold text-black dark:text-white">
            About
          </h2>
          <Card>
            <CardContent className="space-y-4 p-6">
              <p className="text-neutral-700 dark:text-neutral-300">
                Built for AI coding agents first (Claude Code, Codex, Cursor): JSON on stdout,
                stable schemas, meaningful exit codes, no prompts. It stays pleasant for humans too,
                since a terminal gets a table.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Currently at milestone M0: output contract, <code className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-xs dark:bg-neutral-900">describe</code>, <code className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-xs dark:bg-neutral-900">doctor</code>.
                Future milestones will add snapshot creation, inventory, conflict detection, usage analysis and migration planning.
              </p>
              <Separator />
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Provenance: This web app is a 2026 revival of a terminal tool built for Homebrew on macOS.
                Original implementation: <a href="https://github.com/rNLKJA/brewscope" className="underline hover:text-[#FF3C3C]" target="_blank" rel="noopener noreferrer">github.com/rNLKJA/brewscope</a>
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Built with Next.js. <a href="https://rin.contact" className="underline hover:text-[#FF3C3C]">rin.contact</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
