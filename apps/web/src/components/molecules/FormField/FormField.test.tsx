import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormField } from './FormField'

describe('FormField', () => {
  it('associates the label with the input', () => {
    render(<FormField id="username" label="Email ou usuário" placeholder="usuario123" />)
    expect(screen.getByLabelText('Email ou usuário')).toHaveAttribute('placeholder', 'usuario123')
  })

  it('forwards typed changes to onChange', async () => {
    const onChange = vi.fn()
    render(<FormField id="username" label="Email ou usuário" onChange={onChange} />)
    await userEvent.type(screen.getByLabelText('Email ou usuário'), 'a')
    expect(onChange).toHaveBeenCalledOnce()
  })

  it('renders a password field', () => {
    render(<FormField id="password" label="Senha" type="password" />)
    expect(screen.getByLabelText('Senha')).toHaveAttribute('type', 'password')
  })
})
