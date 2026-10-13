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

          <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pt-32 pb-96 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-48 lg:pb-[36rem]">
            {/* Hero content */}
            <div>
              <p className="text-kicker text-brew">Homebrew inspector</p>
              <h1 className="mt-4 font-display text-display leading-[1.02]">
                A <span className="text-brew">read-only</span> terminal tool for Homebrew on macOS.
              </h1>
              <p className="mt-8 max-w-xl text-body text-muted-foreground">
                Analyse your Homebrew setup: find unused casks, detect conflicts, trace what is on your PATH and which
                cask you actually open.
              </p>

              <p className="mt-6 max-w-xl text-base leading-[1.65] text-foreground/80">
                I built brewscope because Homebrew knows what you installed, but it doesn&apos;t know what you actually use or what conflicts with what. When you move to a new Mac, you want to carry across what matters, not reinstall nine casks that have no app any more.
              </p>

              {/* CTA buttons */}
              <div className="mt-14 flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-brew via-brew to-brew/80 px-8 py-4 font-semibold text-black shadow-[0_4px_16px_rgba(233,165,104,0.4)] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(233,165,104,0.5)] hover:-translate-y-0.5"
                >
                  Try interactive demo
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <a
                  href="https://github.com/rNLKJA/brewscope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-8 py-4 font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-200 hover:border-brew/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-0.5"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
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
                  src="/images/amber-hero.svg"
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
        <section aria-labelledby="stats" className="border-t border-border/50 py-48 lg:py-56" style={{ backgroundColor: 'var(--surface-2)' }}>
          <h2 id="stats" className="sr-only">
            Key features
          </h2>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-kicker text-center text-brew/80">Zero-impact introspection</p>
            <dl className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'read-only', value: '100%' },
                { label: 'structured output', value: 'JSON' },
                { label: 'side effects', value: 'Zero' },
                { label: 'snapshots', value: 'Local' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <dd className="font-display text-[clamp(4.5rem,8vw,6rem)] font-bold leading-none tracking-[-0.03em] text-brew">
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
          className="border-t border-border/50"
          style={{ backgroundColor: 'oklch(0.92 0.04 45)' }} /* Darker amber-tinted background for callout prominence */
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-56 sm:px-6 lg:py-64">
          <p className="text-kicker text-brew/70">Homebrew insights</p>
          <h2
            id="what-title"
            className="mt-4 max-w-2xl text-heading"
          >
            What it does.
          </h2>
          <div
            className="mt-10 space-y-5 rounded-xl border border-border bg-card p-10 lg:p-12"
            style={{
              boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.06)',
            }}
          >
            <p className="text-base leading-[1.65] text-muted-foreground">
              Homebrew knows what you installed. It does not know that python3 on your PATH comes from pyenv,
              that two of your casks are both clipboard managers and you have opened one of them twice this year,
              or that nine casks have no app any more.
            </p>
            <p className="text-base leading-[1.65] text-muted-foreground">
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
          </div>
        </section>

        {/* Principles */}
        <section
          aria-labelledby="principles-title"
          className="border-t border-border/50"
          style={{ backgroundColor: 'var(--surface-2)' }}
        >
          <div className="mx-auto max-w-6xl px-4 py-56 sm:px-6 lg:py-64">
            <p className="text-kicker text-brew/70">Design principles</p>
            <h2
              id="principles-title"
              className="mt-4 text-heading"
            >
              Built to be safe and transparent.
            </h2>
            <ol className="mt-12 grid gap-12 md:grid-cols-2">
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
                  className="relative rounded-xl border border-border bg-card p-10 transition-all duration-200 hover:border-brew/30 lg:p-12"
                  style={{
                    boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.06)',
                  }}
                >
                  <principle.icon className="size-7 text-brew" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl font-semibold">{principle.title}</h3>
                  <p className="mt-3 text-base leading-[1.65] text-muted-foreground">{principle.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Get started */}
        <section
          aria-labelledby="getstarted-title"
          className="mx-auto w-full max-w-6xl px-4 py-56 sm:px-6 lg:py-64"
        >
          <p className="text-kicker text-brew/70">Try it out</p>
          <h2 id="getstarted-title" className="mt-4 text-heading">
            Get started.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {/* Demo card */}
            <Link
              href="/demo"
              className="group flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-card p-10 transition-all duration-200 hover:border-brew/50 sm:gap-6 lg:p-12"
              style={{
                boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.06)',
              }}
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
            <div
              className="min-w-0 rounded-2xl border border-border bg-card p-10 lg:p-12"
              style={{
                boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.06)',
              }}
            >
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
          className="scroll-mt-20 border-t border-border/50"
          style={{ backgroundColor: 'var(--surface-2)' }}
        >
          <div className="mx-auto max-w-6xl px-4 py-40 sm:px-6 lg:py-48">
            <p className="text-kicker text-brew/70">About this project</p>
            <h2
              id="about-title"
              className="mt-4 text-heading"
            >
              A terminal tool for Homebrew on macOS.
            </h2>
            <div className="mt-10 space-y-5 rounded-xl border border-border bg-card p-10 shadow-md lg:p-12">
              <p className="text-base leading-[1.65] text-muted-foreground">
                Built for AI coding agents first (Claude Code, Codex, Cursor): JSON on stdout, stable schemas,
                meaningful exit codes, no prompts. It stays pleasant for humans too, since a terminal gets a table.
              </p>
              <p className="text-sm leading-[1.65] text-muted-foreground">
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
              <div className="border-t border-border/50 pt-5">
                <h3 className="text-sm font-semibold text-foreground mb-3">What I learned</h3>
                <p className="text-sm leading-[1.65] text-muted-foreground">
                  This project taught me how to design for both humans and AI agents at once. The envelope pattern with stable schemas and meaningful exit codes makes agent integration predictable, while format autodetection (table on a TTY, JSON when piped) keeps it usable for interactive work. I also learned that read-only constraints force better design: when you can&apos;t fix problems automatically, your diagnostics and recommendations have to be clear and actionable.
                </p>
              </div>
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
                  . Built with Next.js.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>
              <a
                href="https://rin.contact"
                className="transition-colors hover:text-brew"
                target="_blank"
                rel="noopener noreferrer"
              >
                Made by Rin in Adelaide
              </a>
            </p>
            <p>
              <a
                href="https://github.com/rNLKJA/brewscope"
                className="transition-colors hover:text-brew"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source on GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
