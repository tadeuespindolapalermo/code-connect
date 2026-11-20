import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { LoginPage } from './LoginPage'

describe('LoginPage', () => {
  it('renders the login banner and form', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /programa/ })).toHaveAttribute(
      'src',
      '/banner-login.png',
    )
  })
})
