import { render, screen } from '@testing-library/react'
import { AuthBanner } from './AuthBanner'

describe('AuthBanner', () => {
  it('renders the banner image', () => {
    render(<AuthBanner src="/banner-login.png" alt="Pessoa programando" />)
    expect(screen.getByRole('img', { name: 'Pessoa programando' })).toHaveAttribute(
      'src',
      '/banner-login.png',
    )
  })

  it('overlays the Code Connect logo', () => {
    render(<AuthBanner src="/banner-login.png" alt="Pessoa programando" />)
    expect(screen.getByRole('img', { name: 'Code Connect' })).toBeInTheDocument()
  })
})
