import Link from 'next/link'
import Image from 'next/image'
import { Terminal, Zap, Shield, Lock, ArrowRight } from 'lucide-react'
import { FloatingTerminalCard } from '@/components/floating-terminal-card'

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      {/* Skip to main content */}
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-primary px-3 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-sm" role="navigation" aria-label="Main navigation">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded bg-brew/80" aria-hidden="true" />
              <span className="text-lg font-semibold">brewscope</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/demo" className="transition-colors hover:text-brew">
                Demo
              </Link>
              <a
                href="https://github.com/rNLKJA/brewscope"
                className="transition-colors hover:text-brew"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* Hero section */}
        <section className="relative overflow-hidden">
          {/* Grain texture background */}
          <div
            aria-hidden="true"
            className="grain absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
          />
          {/* Warm glow */}
          <div
            aria-hidden="true"
            className="absolute -top-40 left-1/2 -z-10 size-[min(42rem,100vw)] -translate-x-1/2 rounded-full bg-brew/15 blur-3xl"
          />

          <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pt-16 pb-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24 lg:pb-32">
            {/* Hero content */}
            <div>
              <p className="kicker text-brew/80">M0 Milestone</p>
              <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.02] font-semibold tracking-[-0.02em]">
                A <em className="text-brew not-italic">read-only</em> terminal tool for your Homebrew setup
              </h1>
              <p className="mt-8 max-w-xl text-[clamp(1.0625rem,1.5vw,1.125rem)] leading-relaxed text-muted-foreground">
                Homebrew knows what you installed. brewscope explains what your setup actually does on macOS.
                Designed for AI agents first, pleasant for humans.
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/demo"
                  className="inline-flex h-12 items-center gap-1.5 rounded-full bg-brew px-6 text-[0.95rem] font-medium text-brew-fg shadow-md transition-all duration-200 hover:bg-brew/90 hover:shadow-lg focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <span>Try interactive demo</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <a
                  href="https://github.com/rNLKJA/brewscope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-1.5 rounded-full bg-secondary px-6 text-[0.95rem] font-medium text-secondary-foreground shadow-sm transition-all duration-200 hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] hover:shadow-md focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <span>View on GitHub</span>
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>

              {/* Follow-up text */}
              <p className="mt-6 text-sm text-muted-foreground">
                No installation needed for the{' '}
                <Link href="/demo" className="font-medium text-brew underline-offset-4 hover:underline">
                  interactive demo
                </Link>
                . Install the CLI with{' '}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">uv tool install</code>.
              </p>
            </div>

            {/* Hero artwork */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="arch relative aspect-[4/5] w-full overflow-hidden border border-border/50 shadow-[0_20px_80px_-20px_rgba(212,143,79,0.4),0_8px_16px_-8px_rgba(0,0,0,0.3)]">
                <Image
                  src="/images/amber-light.svg"
                  alt="Abstract amber glass and liquid light"
                  fill
                  priority
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
              <FloatingTerminalCard />
            </div>
          </div>
        </section>

        {/* Stats row */}
        <section aria-labelledby="stats" className="border-t border-border/50 bg-muted/30 py-20">
          <h2 id="stats" className="sr-only">
            Key features
          </h2>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="kicker text-center text-brew/80">Zero-impact introspection</p>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'read-only', value: '100%' },
                { label: 'structured output', value: 'JSON' },
                { label: 'side effects', value: 'Zero' },
                { label: 'snapshots', value: 'Local' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <dd className="font-display text-[clamp(4.5rem,8vw,6rem)] font-bold leading-none tracking-tight">
                    {s.value}
                  </dd>
                  <dt className="mt-3 text-sm uppercase tracking-[0.08em] text-muted-foreground">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* What it does */}
        <section
          id="what"
          aria-labelledby="what-title"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6 lg:py-32"
        >
          <p className="kicker text-brew/80">Homebrew insights</p>
          <h2
            id="what-title"
            className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight"
          >
            What it does.
          </h2>
          <div className="mt-8 space-y-4 rounded-xl border border-border bg-card p-8 shadow-md">
            <p className="text-base leading-relaxed text-muted-foreground">
              Homebrew knows what you installed. It does not know that python3 on your PATH comes from pyenv,
              that two of your casks are both clipboard managers and you have opened one of them twice this year,
              or that nine casks have no app any more.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              brewscope reads the filesystem, your PATH and your usage history to answer those questions.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded border border-brew/20 bg-brew/10 px-2.5 py-1 font-mono text-xs text-brew">
                read-only
              </span>
              <span className="rounded border border-border/50 bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
                JSON output
              </span>
              <span className="rounded border border-border/50 bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
                AI agent first
              </span>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section
          aria-labelledby="principles-title"
          className="border-t border-border/50 bg-muted/30"
        >
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
            <p className="kicker text-brew/80">Design principles</p>
            <h2
              id="principles-title"
              className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight"
            >
              Built to be safe and transparent.
            </h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-2">
              {[
                {
                  icon: Shield,
                  title: 'Read-only',
                  body: 'Never installs, removes or upgrades anything. Recommendations are printed as commands for you to run.',
                },
                {
                  icon: Zap,
                  title: 'No side effects',
                  body: 'Runs brew with auto-update off, never triggers consent dialogs or bumps access times.',
                },
                {
                  icon: Terminal,
                  title: 'Counts, not content',
                  body: 'Usage is stored as counts per binary. Command lines are never stored or printed.',
                },
                {
                  icon: Lock,
                  title: 'Local snapshots',
                  body: 'Snapshots stay local because they name your host, paths and dotfiles.',
                },
              ].map((principle) => (
                <li
                  key={principle.title}
                  className="relative rounded-xl border border-border bg-card p-8 shadow-md transition-shadow duration-200 hover:shadow-lg"
                >
                  <principle.icon className="size-7 text-brew" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl font-semibold">{principle.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{principle.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Get started */}
        <section
          aria-labelledby="getstarted-title"
          className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:py-32"
        >
          <p className="kicker text-brew/80">Try it out</p>
          <h2 id="getstarted-title" className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            Get started.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {/* Demo card */}
            <Link
              href="/demo"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-md transition-all duration-200 hover:border-brew/50 hover:shadow-lg sm:gap-6 sm:p-8"
            >
              <Terminal className="size-10 shrink-0 text-brew" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block font-display text-xl font-semibold group-hover:text-brew transition-colors duration-200">Interactive demo</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  Try brewscope in your browser without installing anything.
                </span>
              </span>
              <ArrowRight
                className="ml-auto size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            {/* Install card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
              <h3 className="font-display text-xl font-semibold">Install CLI</h3>
              <pre className="mt-4 overflow-x-auto rounded border border-border bg-muted/50 p-4 font-mono text-sm text-foreground/70">
                <code>uv tool install git+https://github.com/rNLKJA/brewscope</code>
              </pre>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="scroll-mt-20 border-t border-border/50 bg-muted/30"
        >
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
            <p className="kicker text-brew/80">About this project</p>
            <h2
              id="about-title"
              className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight"
            >
              A terminal tool for Homebrew on macOS.
            </h2>
            <div className="mt-8 space-y-4 rounded-xl border border-border bg-card p-8 shadow-md">
              <p className="text-base leading-relaxed text-muted-foreground">
                Built for AI coding agents first (Claude Code, Codex, Cursor): JSON on stdout, stable schemas,
                meaningful exit codes, no prompts. It stays pleasant for humans too, since a terminal gets a table.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Currently at milestone <span className="font-medium text-brew">M0</span>: output contract,{' '}
                <code className="rounded border border-border/30 bg-muted/50 px-2 py-1 font-mono text-xs">
                  describe
                </code>
                ,{' '}
                <code className="rounded border border-border/30 bg-muted/50 px-2 py-1 font-mono text-xs">
                  doctor
                </code>
                . Future milestones will add snapshot creation, inventory, conflict detection, usage analysis
                and migration planning.
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Provenance.</strong> This web app is a 2026 revival of a
                  terminal tool built for Homebrew on macOS. Original implementation:{' '}
                  <a
                    href="https://github.com/rNLKJA/brewscope"
                    className="text-brew hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/rNLKJA/brewscope
                  </a>
                  . Built with Next.js.{' '}
                  <a
                    href="https://rin.contact"
                    className="text-brew hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    rin.contact
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>
              Built with Next.js ·{' '}
              <a
                href="https://github.com/rNLKJA/brewscope"
                className="transition-colors hover:text-brew"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source on GitHub
              </a>
            </p>
            <p>
              <a href="https://rin.contact" className="transition-colors hover:text-brew" target="_blank" rel="noopener noreferrer">
                rin.contact
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
