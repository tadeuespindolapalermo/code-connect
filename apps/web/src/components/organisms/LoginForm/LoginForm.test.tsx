import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { LoginForm } from './LoginForm'

function renderForm(props: Parameters<typeof LoginForm>[0] = {}) {
  render(
    <MemoryRouter>
      <LoginForm {...props} />
    </MemoryRouter>,
  )
}

describe('LoginForm', () => {
  it('renders the heading, fields and links', () => {
    renderForm()
    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email ou usuário')).toBeRequired()
    expect(screen.getByLabelText('Senha')).toHaveAttribute('type', 'password')
    expect(screen.getByRole('link', { name: 'Crie seu cadastro!' })).toHaveAttribute(
      'href',
      '/signup',
    )
  })

  it('submits the typed credentials', async () => {
    const onSubmit = vi.fn()
    renderForm({ onSubmit })

    await userEvent.type(screen.getByLabelText('Email ou usuário'), 'usuario123')
    await userEvent.type(screen.getByLabelText('Senha'), 'segredo')
    await userEvent.click(screen.getByRole('checkbox', { name: 'Lembrar-me' }))
    await userEvent.click(screen.getByRole('button', { name: 'Login' }))

    expect(onSubmit).toHaveBeenCalledWith({
      username: 'usuario123',
      password: 'segredo',
      rememberMe: true,
    })
  })

  it('does not submit while required fields are empty', async () => {
    const onSubmit = vi.fn()
    renderForm({ onSubmit })
    await userEvent.click(screen.getByRole('button', { name: 'Login' }))
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('reports the chosen social provider', async () => {
    const onSocialLogin = vi.fn()
    renderForm({ onSocialLogin })
    await userEvent.click(screen.getByRole('button', { name: 'Gmail' }))
    expect(onSocialLogin).toHaveBeenCalledWith('gmail')
  })

  it('rejects a username made only of spaces', async () => {
    const onSubmit = vi.fn()
    renderForm({ onSubmit })

    await userEvent.type(screen.getByLabelText('Email ou usuário'), '   ')
    await userEvent.type(screen.getByLabelText('Senha'), 'segredo')
    await userEvent.click(screen.getByRole('button', { name: 'Login' }))

    expect(onSubmit).not.toHaveBeenCalled()
    expect(screen.getByRole('alert')).toHaveTextContent('Informe seu email ou usuário.')
  })

  it('trims the username before submitting', async () => {
    const onSubmit = vi.fn()
    renderForm({ onSubmit })

    await userEvent.type(screen.getByLabelText('Email ou usuário'), '  usuario123 ')
    await userEvent.type(screen.getByLabelText('Senha'), 'segredo')
    await userEvent.click(screen.getByRole('button', { name: 'Login' }))

    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ username: 'usuario123' }))
  })

  it('shows the status message', () => {
    renderForm({ statusMessage: 'Login em breve.' })
    expect(screen.getByRole('status')).toHaveTextContent('Login em breve.')
  })
})
