import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders a checkbox labelled by its text', () => {
    render(<Checkbox label="Lembrar-me" />)
    expect(screen.getByRole('checkbox', { name: 'Lembrar-me' })).not.toBeChecked()
  })

  it('toggles when its label is clicked', async () => {
    render(<Checkbox label="Lembrar-me" />)
    await userEvent.click(screen.getByText('Lembrar-me'))
    expect(screen.getByRole('checkbox', { name: 'Lembrar-me' })).toBeChecked()
  })

  it('reflects a controlled checked state', () => {
    render(<Checkbox label="Lembrar-me" checked onChange={() => {}} />)
    expect(screen.getByRole('checkbox', { name: 'Lembrar-me' })).toBeChecked()
  })
})
