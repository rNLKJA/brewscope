#!/usr/bin/env node

import { readdir, copyFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const root = join(__dirname, '..')

async function main() {
  const testResultsDir = join(root, 'test-results')
  const showcaseDir = join(root, 'docs', 'showcase')

  // Ensure showcase directory exists
  await mkdir(showcaseDir, { recursive: true })

  // Find video files from Playwright test results
  const entries = await readdir(testResultsDir, { withFileTypes: true, recursive: true })

  let videoCount = 0
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.webm')) {
      const sourcePath = join(entry.parentPath || entry.path, entry.name)
      // Copy to showcase with a numbered name
      videoCount++
      const destName = `tour-${String(videoCount).padStart(2, '0')}.webm`
      const destPath = join(showcaseDir, destName)
      await copyFile(sourcePath, destPath)
      console.log(`Copied ${entry.name} -> ${destName}`)
    }
  }

  console.log(`\nShowcase ready: ${videoCount} videos in docs/showcase/`)
}

main().catch(console.error)
