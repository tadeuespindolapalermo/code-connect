import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('gives feedback when the user submits the form', async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    )

    await userEvent.type(screen.getByLabelText('Email ou usuário'), 'usuario123')
    await userEvent.type(screen.getByLabelText('Senha'), 'segredo')
    await userEvent.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.getByRole('status')).toHaveTextContent('O login ainda não está disponível')
  })

  it('gives feedback when the user picks a social login', async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Github' }))

    expect(screen.getByRole('status')).toHaveTextContent('Github ainda não está disponível')
  })
})
