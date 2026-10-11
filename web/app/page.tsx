import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-brew/80" />
              <span className="text-lg font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>brewscope</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/demo" className="hover:text-brew transition-colors">
                Demo
              </Link>
              <a href="https://github.com/rNLKJA/brewscope" className="hover:text-brew transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brew/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              brewscope
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              A read-only terminal tool that explains what your Homebrew setup actually does on macOS. Designed for AI agents first, pleasant for humans.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-2.5 rounded-lg bg-brew text-brew-fg font-medium hover:bg-brew/90 transition-all duration-200 hover:shadow-lg hover:shadow-brew/20"
              >
                Try interactive demo
              </Link>
              <a
                href="https://github.com/rNLKJA/brewscope"
                className="inline-flex items-center px-6 py-2.5 rounded-lg border border-border/50 hover:border-brew/50 hover:bg-brew/5 transition-all duration-200"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        {/* What it does */}
        <div className="mb-16">
          <div className="flex items-baseline gap-3 mb-6">
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-sans)' }}>What it does</h2>
            <Badge className="bg-brew/20 text-brew hover:bg-brew/30 border-0 font-mono text-xs">
              M0
            </Badge>
          </div>
          <Card className="bg-card/50 border-border/30 backdrop-blur-sm hover:border-border/50 transition-colors">
            <CardContent className="p-6 space-y-4">
              <p className="text-foreground/80 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                Homebrew knows what you installed. It does not know that python3 on your PATH comes from pyenv, that two of your casks are both clipboard managers and you have opened one of them twice this year, or that nine casks have no app any more.
              </p>
              <p className="text-foreground/80 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                brewscope reads the filesystem, your PATH and your usage history to answer those questions.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary" className="bg-brew/10 text-brew border-brew/20 hover:bg-brew/20">
                  read-only
                </Badge>
                <Badge variant="secondary" className="bg-brew/10 text-brew border-brew/20 hover:bg-brew/20">
                  JSON output
                </Badge>
                <Badge variant="secondary" className="bg-brew/10 text-brew border-brew/20 hover:bg-brew/20">
                  AI agent first
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Try it section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-sans)' }}>Get started</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card/50 border-border/30 backdrop-blur-sm hover:border-brew/50 transition-colors group cursor-pointer">
              <CardContent className="p-6">
                <Link href="/demo" className="block">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg group-hover:text-brew transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                      Interactive demo
                    </h3>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <p className="text-foreground/60 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                    Try brewscope in your browser without installing anything.
                  </p>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/30 backdrop-blur-sm hover:border-brew/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3" style={{ fontFamily: 'var(--font-sans)' }}>Install CLI</h3>
                <pre className="bg-background/50 rounded border border-border/30 p-3 text-sm font-mono text-foreground/70 overflow-x-auto">
                  <code>uv tool install git+https://github.com/rNLKJA/brewscope</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-sans)' }}>Principles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-card/50 border-border/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg" style={{ fontFamily: 'var(--font-sans)' }}>Read-only</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70" style={{ fontFamily: 'var(--font-sans)' }}>
                  Never installs, removes or upgrades anything. Recommendations are printed as commands for you to run.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg" style={{ fontFamily: 'var(--font-sans)' }}>No side effects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70" style={{ fontFamily: 'var(--font-sans)' }}>
                  Runs brew with auto-update off, never triggers consent dialogs or bumps access times.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg" style={{ fontFamily: 'var(--font-sans)' }}>Counts, not content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70" style={{ fontFamily: 'var(--font-sans)' }}>
                  Usage is stored as counts per binary. Command lines are never stored or printed.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg" style={{ fontFamily: 'var(--font-sans)' }}>Local snapshots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70" style={{ fontFamily: 'var(--font-sans)' }}>
                  Snapshots stay local because they name your host, paths and dotfiles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About */}
        <div>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-sans)' }}>About</h2>
          <Card className="bg-card/50 border-border/30 backdrop-blur-sm">
            <CardContent className="space-y-4 p-6">
              <p className="text-foreground/80" style={{ fontFamily: 'var(--font-sans)' }}>
                Built for AI coding agents first (Claude Code, Codex, Cursor): JSON on stdout, stable schemas, meaningful exit codes, no prompts. It stays pleasant for humans too, since a terminal gets a table.
              </p>
              <p className="text-sm text-foreground/60" style={{ fontFamily: 'var(--font-sans)' }}>
                Currently at milestone <span className="text-brew font-medium">M0</span>: output contract, <code className="bg-background/50 rounded px-2 py-1 font-mono text-xs border border-border/30">describe</code>, <code className="bg-background/50 rounded px-2 py-1 font-mono text-xs border border-border/30">doctor</code>. Future milestones will add snapshot creation, inventory, conflict detection, usage analysis and migration planning.
              </p>
              <Separator className="bg-border/30" />
              <p className="text-sm text-foreground/60" style={{ fontFamily: 'var(--font-sans)' }}>
                Provenance: This web app is a 2026 revival of a terminal tool built for Homebrew on macOS. Original implementation: <a href="https://github.com/rNLKJA/brewscope" className="text-brew hover:underline" target="_blank" rel="noopener noreferrer">github.com/rNLKJA/brewscope</a>
              </p>
              <p className="text-sm text-foreground/60" style={{ fontFamily: 'var(--font-sans)' }}>
                Built with Next.js. <a href="https://rin.contact" className="text-brew hover:underline" target="_blank" rel="noopener noreferrer">rin.contact</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
