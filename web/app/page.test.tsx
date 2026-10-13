import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeDefined()
    expect(heading.textContent).toContain('terminal tool')
  })

  it('displays the hero text', () => {
    render(<Home />)
    expect(screen.getByText(/Designed for AI agents first, pleasant for humans/)).toBeDefined()
  })

  it('has a link to the interactive demo', () => {
    render(<Home />)
    expect(screen.getByText('Try interactive demo')).toBeDefined()
  })

  it('displays the four principles', () => {
    render(<Home />)
    const principles = screen.getAllByRole('heading', { level: 3 })
    const principleTexts = principles.map(p => p.textContent)
    expect(principleTexts).toContain('Read-only')
    expect(principleTexts).toContain('No side effects')
    expect(principleTexts).toContain('Counts, not content')
    expect(principleTexts).toContain('Local snapshots')
  })
})
