import Link from 'next/link'
import { Terminal } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-sm" role="navigation" aria-label="Main navigation">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-6 rounded bg-brew/80" aria-hidden="true" />
              <span className="text-lg font-semibold">brewscope</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-md text-center">
          <Terminal className="mx-auto size-16 text-brew/60" aria-hidden="true" />
          <h1 className="mt-8 text-5xl font-bold">404</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            That page doesn&apos;t exist. Nothing to scan here.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface-2 px-6 py-3 font-semibold transition-all duration-200 hover:border-brew/50 hover:-translate-y-0.5"
            >
              Go home
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brew via-brew to-brew/80 px-6 py-3 font-semibold text-black transition-all duration-200 hover:-translate-y-0.5"
            >
              Try the demo
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
