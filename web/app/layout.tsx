import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Fraunces } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const fraunces = Fraunces({
  variable: '--font-display-face',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'brewscope: read-only Homebrew insights',
    template: '%s · brewscope',
  },
  description: 'A read-only terminal tool that explains what your Homebrew setup actually does on macOS. Designed for AI agents first, pleasant for humans.',
  keywords: ['brewscope', 'Homebrew', 'macOS', 'terminal', 'CLI', 'read-only', 'AI agents'],
  authors: [{ name: 'Rin Huang', url: 'https://rin.contact' }],
  openGraph: {
    type: 'website',
    siteName: 'brewscope',
    title: 'brewscope: read-only Homebrew insights',
    description: 'A read-only terminal tool that explains what your Homebrew setup actually does on macOS.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
                document.documentElement.setAttribute('data-color-scheme', theme)
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`flex min-h-full flex-col`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
