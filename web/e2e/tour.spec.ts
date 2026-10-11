import { test, expect } from '@playwright/test'

test.describe('brewscope tour', () => {
  test('01 - landing page walkthrough', async ({ page }) => {
    await page.goto('/')

    // Landing page
    await expect(page.getByRole('heading', { name: 'brewscope' })).toBeVisible()
    await expect(page.getByText('A read-only terminal tool')).toBeVisible()

    // Principles section with all four cards
    await expect(page.getByRole('heading', { name: 'Principles' })).toBeVisible()
    await expect(page.getByText('Read-only', { exact: true })).toBeVisible()
    await expect(page.getByText('No side effects')).toBeVisible()
    await expect(page.getByText('Counts, not content')).toBeVisible()
    await expect(page.getByText('Local snapshots')).toBeVisible()

    // About section
    await expect(page.getByRole('heading', { name: 'About' })).toBeVisible()
    await expect(page.getByText(/Currently at milestone M0/)).toBeVisible()

    // Interactive demo link
    await expect(page.getByRole('link', { name: 'Interactive demo' })).toBeVisible()
  })

  test('02 - interactive demo walkthrough', async ({ page }) => {
    await page.goto('/demo')

    // Demo page heading
    await expect(page.getByRole('heading', { name: 'Interactive demo' })).toBeVisible()

    // Doctor tab (default)
    await expect(page.getByRole('tab', { name: 'doctor' })).toHaveAttribute('aria-selected', 'true')

    // Switch to describe tab
    await page.getByRole('tab', { name: 'describe' }).click()
    await expect(page.getByRole('tab', { name: 'describe' })).toHaveAttribute('aria-selected', 'true')

    // Switch to version tab
    await page.getByRole('tab', { name: 'version' }).click()
    await expect(page.getByRole('tab', { name: 'version' })).toHaveAttribute('aria-selected', 'true')

    // Output envelope section
    await expect(page.getByRole('heading', { name: 'Output envelope' })).toBeVisible()

    // Roadmap
    await expect(page.getByRole('heading', { name: 'Roadmap' })).toBeVisible()
    await expect(page.getByText('Done')).toBeVisible()
  })

  test('03 - navigation flow', async ({ page }) => {
    await page.goto('/')

    // Navigate to demo
    await page.getByRole('link', { name: 'Interactive demo' }).click()
    await expect(page).toHaveURL('/demo')

    // Navigate back
    await page.getByRole('link', { name: '← Back' }).click()
    await expect(page).toHaveURL('/')
  })
})
