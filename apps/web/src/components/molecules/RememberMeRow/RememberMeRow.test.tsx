import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { RememberMeRow } from './RememberMeRow'

function renderRow(checked = false, onChange = vi.fn()) {
  render(
    <MemoryRouter>
      <RememberMeRow checked={checked} onChange={onChange} forgotPasswordTo="/esqueci-senha" />
    </MemoryRouter>,
  )
  return onChange
}

describe('RememberMeRow', () => {
  it('renders the remember-me checkbox and the forgot-password link', () => {
    renderRow(true)
    expect(screen.getByRole('checkbox', { name: 'Lembrar-me' })).toBeChecked()
    expect(screen.getByRole('link', { name: 'Esqueci a senha' })).toHaveAttribute(
      'href',
      '/esqueci-senha',
    )
  })

  it('reports the new checked state when toggled', async () => {
    const onChange = renderRow(false)
    await userEvent.click(screen.getByRole('checkbox', { name: 'Lembrar-me' }))
    expect(onChange).toHaveBeenCalledWith(true)
  })
})
