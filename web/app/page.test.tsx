import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders the brewscope heading', () => {
    render(<Home />)
    expect(screen.getByText('brewscope')).toBeDefined()
  })

  it('displays the tagline', () => {
    render(<Home />)
    expect(screen.getByText(/A read-only terminal tool that explains what your Homebrew setup actually does on macOS/)).toBeDefined()
  })

  it('has a link to the interactive demo', () => {
    render(<Home />)
    expect(screen.getByText('Interactive demo')).toBeDefined()
  })

  it('displays the four principles', () => {
    render(<Home />)
    expect(screen.getByText('Read-only')).toBeDefined()
    expect(screen.getByText('No side effects')).toBeDefined()
    expect(screen.getByText('Counts, not content')).toBeDefined()
    expect(screen.getByText('Local snapshots')).toBeDefined()
  })
})
