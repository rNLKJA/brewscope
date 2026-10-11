import { test, expect } from '@playwright/test'

test.describe('brewscope tour', () => {
  test('01 - landing page walkthrough', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Landing page header
    await expect(page.getByRole('heading', { name: 'brewscope' })).toBeVisible()
    await page.waitForTimeout(1500)

    // Scroll to What it does
    const whatItDoes = page.locator('text=What it does').first()
    await whatItDoes.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    // Read the description
    await page.waitForTimeout(1500)

    // Scroll to Try it section
    const tryIt = page.locator('text=Try it').first()
    await tryIt.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    // Scroll to Principles
    const principles = page.getByRole('heading', { name: 'Principles' })
    await principles.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2500)

    // Highlight each principle card
    const readOnly = page.getByText('Read-only', { exact: true })
    await readOnly.scrollIntoViewIfNeeded()
    await page.waitForTimeout(1500)

    // Scroll to About
    const about = page.getByRole('heading', { name: 'About' })
    await about.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2500)

    // Read the about section
    await page.waitForTimeout(1500)

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(1500)
  })

  test('02 - interactive demo walkthrough', async ({ page }) => {
    await page.goto('/demo')
    await page.waitForLoadState('networkidle')

    // Demo page heading
    await expect(page.getByRole('heading', { name: 'Interactive demo' })).toBeVisible()
    await page.waitForTimeout(1500)

    // Doctor tab (default) - scroll to terminal
    const terminal = page.locator('text=Terminal').first()
    await terminal.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    // Examine the doctor output
    await page.waitForTimeout(1500)

    // Scroll down to see explanation
    const whatItShows = page.locator('text=What it shows').first()
    await whatItShows.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    // Switch to describe tab
    await page.getByRole('tab', { name: 'describe' }).click()
    await page.waitForTimeout(2500)

    // Scroll to see output
    await terminal.scrollIntoViewIfNeeded()
    await page.waitForTimeout(1500)

    // Switch to version tab
    await page.getByRole('tab', { name: 'version' }).click()
    await page.waitForTimeout(2000)

    // Scroll down to envelope section
    const envelope = page.getByRole('heading', { name: 'Output envelope' })
    await envelope.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)

    // Scroll to roadmap
    const roadmap = page.getByRole('heading', { name: 'Roadmap' })
    await roadmap.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2500)

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(1000)
  })

  test('03 - navigation flow', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(1000)

    // Landing page
    await expect(page.getByRole('heading', { name: 'brewscope' })).toBeVisible()
    await page.waitForTimeout(1500)

    // Scroll to Try it section
    const tryIt = page.locator('text=Try it').first()
    await tryIt.scrollIntoViewIfNeeded()
    await page.waitForTimeout(1500)

    // Click demo link
    await page.getByRole('link', { name: 'Interactive demo' }).click()
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveURL('/demo')
    await page.waitForTimeout(2000)

    // Explore demo tabs
    await page.getByRole('tab', { name: 'describe' }).click()
    await page.waitForTimeout(1500)

    await page.getByRole('tab', { name: 'version' }).click()
    await page.waitForTimeout(1500)

    await page.getByRole('tab', { name: 'doctor' }).click()
    await page.waitForTimeout(1500)

    // Navigate back
    await page.getByRole('link', { name: '← Back' }).click()
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveURL('/')
    await page.waitForTimeout(2000)

    // Scroll down to show content
    const about = page.getByRole('heading', { name: 'About' })
    await about.scrollIntoViewIfNeeded()
    await page.waitForTimeout(1500)
  })
})
