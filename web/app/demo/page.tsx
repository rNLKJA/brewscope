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

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-8">
          <Link
            href="/"
            className="mb-4 inline-block font-mono text-sm text-neutral-600 hover:text-[#FF3C3C] dark:text-neutral-400"
          >
            ← Back
          </Link>
          <h1 className="mb-2 font-mono text-4xl font-bold tracking-tight text-black dark:text-white">
            Interactive demo
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Explore brewscope commands with synthetic output
          </p>
        </header>

        <div className="mb-8">
          <Card className="border-2 border-black dark:border-white">
            <CardHeader>
              <CardTitle className="font-mono text-xl">Terminal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Tabs value={activeCommand} onValueChange={setActiveCommand}>
                  <TabsList className="grid w-full grid-cols-3 bg-neutral-100 dark:bg-neutral-900">
                    <TabsTrigger value="doctor" className="font-mono">
                      doctor
                    </TabsTrigger>
                    <TabsTrigger value="describe" className="font-mono">
                      describe
                    </TabsTrigger>
                    <TabsTrigger value="version" className="font-mono">
                      version
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="doctor" className="space-y-4">
                    <div className="rounded-sm bg-black p-4 font-mono text-sm text-white dark:bg-white dark:text-black">
                      <div className="mb-2 text-neutral-400 dark:text-neutral-600">
                        $ brewscope doctor
                      </div>
                      <div className="whitespace-pre-wrap break-all">
                        {JSON.stringify(doctorOutput, null, 2)}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-mono font-semibold">What it shows</h3>
                      <ul className="list-inside list-disc space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                        <li>
                          <Badge variant="secondary" className="mr-2 font-mono">
                            brew
                          </Badge>
                          Homebrew version and location
                        </li>
                        <li>
                          <Badge variant="secondary" className="mr-2 font-mono">
                            zsh_history
                          </Badge>
                          Shell history file availability
                        </li>
                        <li>
                          <Badge variant="secondary" className="mr-2 font-mono">
                            knowledgec
                          </Badge>
                          macOS app usage database access
                        </li>
                        <li>
                          <Badge variant="secondary" className="mr-2 font-mono">
                            biome
                          </Badge>
                          macOS activity streams access
                        </li>
                      </ul>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Each check reports what brewscope can read on your machine. Full Disk
                        Access is needed for app usage tracking.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="describe" className="space-y-4">
                    <div className="rounded-sm bg-black p-4 font-mono text-sm text-white dark:bg-white dark:text-black">
                      <div className="mb-2 text-neutral-400 dark:text-neutral-600">
                        $ brewscope describe
                      </div>
                      <div className="whitespace-pre-wrap break-all">
                        {JSON.stringify(describeOutput, null, 2)}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-mono font-semibold">What it shows</h3>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        Machine-readable command tree for AI agents: every command, its options,
                        schema version and exit codes. An agent can call <code className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-xs dark:bg-neutral-900">describe</code> once
                        and know how to invoke every brewscope command.
                      </p>
                      <div className="rounded-sm bg-neutral-100 p-3 dark:bg-neutral-900">
                        <p className="mb-2 font-mono text-xs font-semibold">Exit codes</p>
                        <ul className="space-y-1 font-mono text-xs">
                          <li>
                            <span className="text-[#FF3C3C]">0</span> OK
                          </li>
                          <li>
                            <span className="text-[#FF3C3C]">1</span> Internal error
                          </li>
                          <li>
                            <span className="text-[#FF3C3C]">2</span> Usage error
                          </li>
                          <li>
                            <span className="text-[#FF3C3C]">5</span> Environment problem
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="version" className="space-y-4">
                    <div className="rounded-sm bg-black p-4 font-mono text-sm text-white dark:bg-white dark:text-black">
                      <div className="mb-2 text-neutral-400 dark:text-neutral-600">
                        $ brewscope version
                      </div>
                      <div className="whitespace-pre-wrap break-all">
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
                    <div className="space-y-2">
                      <h3 className="font-mono font-semibold">What it shows</h3>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        Version number wrapped in the standard envelope. Every brewscope command
                        uses the same envelope structure with schema, status, timestamp and data.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 font-mono text-2xl font-bold text-black dark:text-white">
            Output envelope
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
                Every brewscope command returns JSON with the same envelope structure, whether
                invoked by a human or an AI agent.
              </p>
              <div className="space-y-3 rounded-sm bg-neutral-100 p-4 font-mono text-xs dark:bg-neutral-900">
                <div>
                  <span className="text-[#FF3C3C]">schema</span>: versioned schema identifier
                </div>
                <div>
                  <span className="text-[#FF3C3C]">ok</span>: true on success, false on error
                </div>
                <div>
                  <span className="text-[#FF3C3C]">generated_at</span>: ISO 8601 timestamp
                </div>
                <div>
                  <span className="text-[#FF3C3C]">source</span>: brew version and capabilities
                </div>
                <div>
                  <span className="text-[#FF3C3C]">data</span>: command-specific payload
                </div>
                <div>
                  <span className="text-[#FF3C3C]">warnings</span>: non-fatal notices
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 font-mono text-2xl font-bold text-black dark:text-white">
            Roadmap
          </h2>
          <div className="space-y-3">
            <Card className="border-l-4 border-l-[#FF3C3C]">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-mono font-semibold">M0</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Output contract, describe, doctor
                    </p>
                  </div>
                  <Badge className="bg-[#FF3C3C] font-mono text-white">Done</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-1 font-mono font-semibold">M1</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Snapshot creation, inventory with filesystem attribution, orphan detection
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-1 font-mono font-semibold">M2</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Capability taxonomy, conflict detection (PATH shadowing, functional overlap)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-1 font-mono font-semibold">M3</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Usage analysis: shell history, agent transcripts, app launches
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-1 font-mono font-semibold">M4+</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
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
