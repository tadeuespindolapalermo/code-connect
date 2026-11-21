import { render, screen } from '@testing-library/react'
import { Logo, LogoMark } from './Logo'

describe('Logo', () => {
  it('renders an accessible Code Connect logo', () => {
    render(<Logo />)
    expect(screen.getByRole('img', { name: 'Code Connect' })).toBeInTheDocument()
  })
})

describe('LogoMark', () => {
  it('is hidden from assistive technology', () => {
    const { container } = render(<LogoMark />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})
