import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  it('renders a text input with its placeholder', () => {
    render(<Input placeholder="usuario123" />)
    const input = screen.getByPlaceholderText('usuario123')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('accepts typed text', async () => {
    render(<Input aria-label="Usuário" />)
    const input = screen.getByRole('textbox', { name: 'Usuário' })
    await userEvent.type(input, 'ana')
    expect(input).toHaveValue('ana')
  })

  it('supports the password type', () => {
    render(<Input type="password" placeholder="******" />)
    expect(screen.getByPlaceholderText('******')).toHaveAttribute('type', 'password')
  })
})
