import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

function BrewscopeIllustration() {
  return (
    <svg
      viewBox="0 0 400 350"
      className="w-full max-w-sm"
      aria-hidden="true"
      role="img"
    >
      <title>Terminal window with brew bottle analysis</title>
      {/* Terminal window frame */}
      <rect
        x="50"
        y="50"
        width="300"
        height="250"
        rx="8"
        fill="currentColor"
        opacity="0.05"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Terminal title bar */}
      <rect
        x="50"
        y="50"
        width="300"
        height="30"
        rx="8"
        fill="currentColor"
        opacity="0.1"
      />
      <line x1="50" y1="80" x2="350" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* Terminal dots */}
      <circle cx="70" cy="65" r="4" fill="#FF3C3C" />
      <circle cx="85" cy="65" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="100" cy="65" r="4" fill="currentColor" opacity="0.3" />

      {/* Terminal content - command prompt */}
      <text x="70" y="105" fontSize="12" fontFamily="monospace" fill="currentColor" opacity="0.6">
        $ brewscope describe
      </text>

      {/* Brew bottles visualization */}
      <g className="transition-colors duration-300">
        {/* Bottle 1 */}
        <rect x="80" y="130" width="30" height="50" rx="5" fill="none" stroke="#FF3C3C" strokeWidth="2" />
        <rect x="85" y="125" width="20" height="8" fill="none" stroke="#FF3C3C" strokeWidth="2" />
        <text x="82" y="195" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.6">node</text>

        {/* Bottle 2 */}
        <rect x="130" y="140" width="30" height="40" rx="5" fill="none" stroke="#FF3C3C" strokeWidth="2" />
        <rect x="135" y="135" width="20" height="8" fill="none" stroke="#FF3C3C" strokeWidth="2" />
        <text x="129" y="195" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.6">rust</text>

        {/* Bottle 3 */}
        <rect x="180" y="125" width="30" height="55" rx="5" fill="none" stroke="#FF3C3C" strokeWidth="2" />
        <rect x="185" y="120" width="20" height="8" fill="none" stroke="#FF3C3C" strokeWidth="2" />
        <text x="176" y="195" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.6">python</text>

        {/* Bottle 4 */}
        <rect x="230" y="135" width="30" height="45" rx="5" fill="none" stroke="#FF3C3C" strokeWidth="2" />
        <rect x="235" y="130" width="20" height="8" fill="none" stroke="#FF3C3C" strokeWidth="2" />
        <text x="233" y="195" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.6">git</text>

        {/* Bottle 5 */}
        <rect x="280" y="145" width="30" height="35" rx="5" fill="none" stroke="#FF3C3C" strokeWidth="2" />
        <rect x="285" y="140" width="20" height="8" fill="none" stroke="#FF3C3C" strokeWidth="2" />
        <text x="280" y="195" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.6">jq</text>
      </g>

      {/* Status output */}
      <g fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.5">
        <text x="70" y="225">Installed: 247 formulae</text>
        <text x="70" y="240">Casks: 83 applications</text>
        <text x="70" y="255">Read-only scan complete</text>
      </g>

      {/* Cursor blink */}
      <rect x="210" y="248" width="6" height="10" fill="#FF3C3C" opacity="0.7" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="mb-2 font-mono text-4xl font-bold tracking-tight text-black dark:text-white">
              brewscope
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              A read-only terminal tool that explains what your Homebrew setup actually does on macOS
            </p>
          </div>
          <div className="flex justify-center">
            <BrewscopeIllustration />
          </div>
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
