import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TourPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-8">
          <Link
            href="/"
            className="mb-4 inline-block font-mono text-sm text-neutral-600 hover:text-[#FF3C3C] dark:text-neutral-400"
          >
            ← Back
          </Link>
          <h1 className="mb-2 font-mono text-4xl font-bold tracking-tight text-black dark:text-white">
            Guided tour
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Walkthroughs of brewscope features recorded from the live site
          </p>
        </header>

        <div className="space-y-8">
          <Card className="border-2 border-black dark:border-white">
            <CardHeader>
              <CardTitle className="font-mono text-xl">01. Landing page</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300">
                Overview of brewscope: what it does, principles, roadmap and installation.
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900">
                <video
                  controls
                  className="h-full w-full"
                  src="/showcase/tour-01.webm"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-black dark:border-white">
            <CardHeader>
              <CardTitle className="font-mono text-xl">02. Interactive demo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300">
                Exploring brewscope commands: doctor, describe, and version with their JSON output
                envelopes.
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900">
                <video
                  controls
                  className="h-full w-full"
                  src="/showcase/tour-02.webm"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-black dark:border-white">
            <CardHeader>
              <CardTitle className="font-mono text-xl">03. Navigation flow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300">
                Navigating between the landing page and interactive demo.
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900">
                <video
                  controls
                  className="h-full w-full"
                  src="/showcase/tour-03.webm"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-sm border-2 border-[#FF3C3C] bg-white p-6 dark:bg-black">
            <h2 className="mb-2 font-mono text-lg font-bold">Running the showcase</h2>
            <p className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
              Tour videos are recorded by a Playwright script that runs against the production site:
            </p>
            <pre className="rounded-sm bg-neutral-100 p-4 font-mono text-sm dark:bg-neutral-900">
              <code>cd web && pnpm showcase</code>
            </pre>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              The script captures each walkthrough, verifies every step it shows, and saves videos to{' '}
              <code className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-xs dark:bg-neutral-900">
                docs/showcase/
              </code>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
