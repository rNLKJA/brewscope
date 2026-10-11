import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function TourPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-brew transition-colors mb-6"
          >
            ← Back to home
          </Link>
          <div>
            <h1 className="text-5xl font-bold tracking-tight mb-3">
              Design tour
            </h1>
            <p className="text-lg text-foreground/70">
              Screenshots showcasing the redesigned brewscope interface
            </p>
          </div>
        </div>

        {/* Screenshots */}
        <div className="space-y-8">
          <Card className="bg-card/50 border-border/30 backdrop-blur-sm overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle>Home page - Light mode</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-background relative w-full overflow-hidden rounded-lg border border-border/30">
                <Image
                  src="/screenshots/home-light-1440.png"
                  alt="Brewscope home page in light mode at 1440px"
                  width={1440}
                  height={900}
                  quality={85}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-foreground/60 p-4">
                Clean, modern hero section with warm amber accents and clear call-to-action buttons.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/30 backdrop-blur-sm overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle>Home page - Dark mode</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-background relative w-full overflow-hidden rounded-lg border border-border/30">
                <Image
                  src="/screenshots/home-dark-1440.png"
                  alt="Brewscope home page in dark mode at 1440px"
                  width={1440}
                  height={900}
                  quality={85}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-foreground/60 p-4">
                Dark-first design with soft amber accents, excellent contrast, and smooth transitions between sections.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/30 backdrop-blur-sm overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle>Responsive design at 390px</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-background relative w-full overflow-hidden rounded-lg border border-border/30 max-w-sm">
                <Image
                  src="/screenshots/home-mobile-390.png"
                  alt="Brewscope home page mobile view at 390px"
                  width={390}
                  height={844}
                  quality={85}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-foreground/60 p-4">
                Fully responsive layout that scales gracefully on mobile devices without horizontal overflow.
              </p>
            </CardContent>
          </Card>

          <div className="rounded-lg border border-border/30 bg-card/50 p-6 backdrop-blur-sm">
            <h2 className="mb-2 font-semibold">Generating screenshots</h2>
            <p className="mb-4 text-sm text-foreground/70">
              These screenshots were captured using Playwright, ensuring consistent rendering across the three key viewport sizes:
            </p>
            <pre className="rounded border border-border/30 bg-background/50 p-4 font-mono text-xs space-y-1 overflow-x-auto">
              <code className="text-foreground/70 block">pnpm test:e2e -- screenshots</code>
            </pre>
            <p className="mt-4 text-sm text-foreground/60">
              Each screenshot verifies the complete design system, typography hierarchy, color palette, spacing, and responsive behaviour.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
