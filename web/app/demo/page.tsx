'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const doctorOutput = {
  schema: 'brewscope.doctor/1',
  ok: true,
  generated_at: '2026-10-11T12:34:56Z',
  source: {
    brew: '7.0.7',
    capabilities: {
      brew: true,
      fda: true,
      fda_via: 'com.apple.Terminal',
      zsh_history: true,
    },
  },
  data: [
    {
      check: 'brew',
      ok: true,
      detail: '/opt/homebrew/bin/brew 7.0.7',
      remediation: null,
    },
    {
      check: 'zsh_history',
      ok: true,
      detail: '/Users/demo/.zsh_history',
      remediation: null,
    },
    {
      check: 'knowledgec',
      ok: true,
      detail: '/Users/demo/Library/Application Support/Knowledge/knowledgeC.db',
      remediation: null,
    },
    {
      check: 'biome',
      ok: true,
      detail: '127 entries',
      remediation: null,
    },
    {
      check: 'automation',
      ok: false,
      detail: 'not probed: checking would raise a consent dialog',
      remediation:
        'login items are read from LaunchAgents instead; opt in later with --allow-automation',
    },
  ],
  truncated: false,
  next: null,
  warnings: [],
}

const describeOutput = {
  schema: 'brewscope.describe/1',
  ok: true,
  generated_at: '2026-10-11T12:34:56Z',
  source: { brew: '7.0.7', capabilities: { brew: true, fda: true } },
  data: {
    tool: 'brewscope',
    version: '0.1.0',
    commands: [
      {
        command: 'doctor',
        help: 'Probe what this machine lets brewscope read (brew, history, Full Disk Access).',
        schema: 'brewscope.doctor/1',
        options: [
          {
            name: '--format',
            required: false,
            help: 'json | ndjson | table (default: table on a TTY, json when piped)',
          },
        ],
      },
      {
        command: 'describe',
        help: 'Machine-readable command tree: commands, options, exit codes.',
        schema: 'brewscope.describe/1',
        options: [
          {
            name: '--format',
            required: false,
            help: 'json | ndjson | table (default: table on a TTY, json when piped)',
          },
        ],
      },
      {
        command: 'version',
        help: 'Print the brewscope version.',
        schema: 'brewscope.version/1',
        options: [
          {
            name: '--format',
            required: false,
            help: 'json | ndjson | table (default: table on a TTY, json when piped)',
          },
        ],
      },
    ],
    exit_codes: {
      ok: 0,
      internal: 1,
      usage: 2,
      not_found: 3,
      confirmation: 4,
      environment: 5,
      stale: 6,
      findings: 10,
    },
    env: {
      BREWSCOPE_FORMAT: 'default output format',
    },
  },
  truncated: false,
  next: null,
  warnings: [],
}

export default function DemoPage() {
  const [activeCommand, setActiveCommand] = useState<string>('doctor')
  const [isLoading, setIsLoading] = useState(false)

  const handleCommandChange = (value: string) => {
    setIsLoading(true)
    setActiveCommand(value)
    setTimeout(() => setIsLoading(false), 400)
  }

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
              Interactive demo
            </h1>
            <p className="text-lg text-foreground/70">
              Explore brewscope commands with synthetic output
            </p>
          </div>
        </div>

        {/* Terminal window */}
        <div className="mb-12">
          <Card className="bg-card/50 border-border/30 backdrop-blur-sm overflow-hidden">
            <CardHeader className="bg-card/80 border-b border-border/30 pb-3">
              <CardTitle className="text-sm font-mono">Terminal</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs value={activeCommand} onValueChange={handleCommandChange} className="w-full">
                <div className="border-b border-border/30 bg-background/30 px-6 py-0">
                  <TabsList className="grid w-full grid-cols-3 gap-1 bg-transparent h-auto p-0 mb-0">
                    <TabsTrigger value="doctor" className="rounded-none border-b-2 border-transparent data-[state=active]:border-brew text-sm font-mono py-3 px-0 hover:bg-background/20">
                      doctor
                    </TabsTrigger>
                    <TabsTrigger value="describe" className="rounded-none border-b-2 border-transparent data-[state=active]:border-brew text-sm font-mono py-3 px-0 hover:bg-background/20">
                      describe
                    </TabsTrigger>
                    <TabsTrigger value="version" className="rounded-none border-b-2 border-transparent data-[state=active]:border-brew text-sm font-mono py-3 px-0 hover:bg-background/20">
                      version
                    </TabsTrigger>
                  </TabsList>
                </div>

                {isLoading && (
                  <div className="flex items-center justify-center p-12">
                    <div className="flex items-center gap-3">
                      <div className="size-2 rounded-full bg-brew animate-pulse" style={{ animationDelay: '0ms' }} />
                      <div className="size-2 rounded-full bg-brew animate-pulse" style={{ animationDelay: '150ms' }} />
                      <div className="size-2 rounded-full bg-brew animate-pulse" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}

                {!isLoading && (
                  <>
                    <TabsContent value="doctor" className="space-y-6 p-6">
                      <div className="bg-background rounded border border-border/30 p-4 font-mono text-sm space-y-2 overflow-x-auto">
                        <div className="text-brew/80">
                          $ brewscope doctor
                        </div>
                        <div className="text-foreground/70 whitespace-pre-wrap break-all leading-relaxed">
                          {JSON.stringify(doctorOutput, null, 2)}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold">What it shows</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-3">
                            <Badge className="bg-brew/20 text-brew border-0 whitespace-nowrap h-fit">brew</Badge>
                            <span className="text-foreground/70">Homebrew version and location</span>
                          </li>
                          <li className="flex gap-3">
                            <Badge className="bg-brew/20 text-brew border-0 whitespace-nowrap h-fit">zsh_history</Badge>
                            <span className="text-foreground/70">Shell history file availability</span>
                          </li>
                          <li className="flex gap-3">
                            <Badge className="bg-brew/20 text-brew border-0 whitespace-nowrap h-fit">knowledgec</Badge>
                            <span className="text-foreground/70">macOS app usage database access</span>
                          </li>
                          <li className="flex gap-3">
                            <Badge className="bg-brew/20 text-brew border-0 whitespace-nowrap h-fit">biome</Badge>
                            <span className="text-foreground/70">macOS activity streams access</span>
                          </li>
                        </ul>
                        <p className="text-sm text-foreground/60 pt-2">
                          Each check reports what brewscope can read on your machine. Full Disk Access is needed for app usage tracking.
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="describe" className="space-y-6 p-6">
                      <div className="bg-background rounded border border-border/30 p-4 font-mono text-sm space-y-2 overflow-x-auto">
                        <div className="text-brew/80">
                          $ brewscope describe
                        </div>
                        <div className="text-foreground/70 whitespace-pre-wrap break-all leading-relaxed">
                          {JSON.stringify(describeOutput, null, 2)}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold">What it shows</h3>
                        <p className="text-sm text-foreground/70">
                          Machine-readable command tree for AI agents: every command, its options, schema version and exit codes. An agent can call <code className="bg-background/50 rounded px-2 py-1 font-mono text-xs border border-border/30">describe</code> once and know how to invoke every brewscope command.
                        </p>
                        <div className="rounded border border-border/30 bg-background/50 p-4 space-y-2 font-mono text-xs">
                          <div className="font-semibold text-foreground/90 mb-3">Exit codes</div>
                          <div className="space-y-1.5">
                            <div><span className="text-brew">0</span> OK</div>
                            <div><span className="text-brew">1</span> Internal error</div>
                            <div><span className="text-brew">2</span> Usage error</div>
                            <div><span className="text-brew">5</span> Environment problem</div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="version" className="space-y-6 p-6">
                      <div className="bg-background rounded border border-border/30 p-4 font-mono text-sm space-y-2 overflow-x-auto">
                        <div className="text-brew/80">
                          $ brewscope version
                        </div>
                        <div className="text-foreground/70 whitespace-pre-wrap break-all leading-relaxed">
                          {JSON.stringify(
                            {
                              schema: 'brewscope.version/1',
                              ok: true,
                              generated_at: '2026-10-11T12:34:56Z',
                              source: { brew: '7.0.7', capabilities: { brew: true, fda: true } },
                              data: { version: '0.1.0' },
                              truncated: false,
                              next: null,
                              warnings: [],
                            },
                            null,
                            2
                          )}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold">What it shows</h3>
                        <p className="text-sm text-foreground/70">
                          Version number wrapped in the standard envelope. Every brewscope command uses the same envelope structure with schema, status, timestamp and data.
                        </p>
                      </div>
                    </TabsContent>
                  </>
                )}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Output envelope */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Output envelope</h2>
          <Card className="bg-card/50 border-border/30 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              <p className="text-foreground/70">
                Every brewscope command returns JSON with the same envelope structure, whether invoked by a human or an AI agent.
              </p>
              <div className="space-y-2 rounded border border-border/30 bg-background/50 p-4 font-mono text-xs">
                <div>
                  <span className="text-brew">schema</span>: versioned schema identifier
                </div>
                <div>
                  <span className="text-brew">ok</span>: true on success, false on error
                </div>
                <div>
                  <span className="text-brew">generated_at</span>: ISO 8601 timestamp
                </div>
                <div>
                  <span className="text-brew">source</span>: brew version and capabilities
                </div>
                <div>
                  <span className="text-brew">data</span>: command-specific payload
                </div>
                <div>
                  <span className="text-brew">warnings</span>: non-fatal notices
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Roadmap */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Roadmap</h2>
          <div className="space-y-3">
            <Card className="bg-card/50 border-l-2 border-l-brew border-border/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">M0</h3>
                    <p className="text-sm text-foreground/60">
                      Output contract, describe, doctor
                    </p>
                  </div>
                  <Badge className="bg-brew text-brew-fg border-0">Done</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">M1</h3>
                <p className="text-sm text-foreground/60">
                  Snapshot creation, inventory with filesystem attribution, orphan detection
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">M2</h3>
                <p className="text-sm text-foreground/60">
                  Capability taxonomy, conflict detection (PATH shadowing, functional overlap)
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">M3</h3>
                <p className="text-sm text-foreground/60">
                  Usage analysis: shell history, agent transcripts, app launches
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">M4+</h3>
                <p className="text-sm text-foreground/60">
                  Recommendations, migration planning, optional MCP server mode
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
