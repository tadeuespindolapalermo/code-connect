import { render, screen } from '@testing-library/react'
import { Divider } from './Divider'

describe('Divider', () => {
  it('renders its centered text', () => {
    render(<Divider text="ou entre com outras contas" />)
    expect(screen.getByText('ou entre com outras contas')).toBeInTheDocument()
    expect(
      screen.getByRole('separator', { name: 'ou entre com outras contas' }),
    ).toBeInTheDocument()
  })

  it('renders a plain separator without text', () => {
    render(<Divider />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})
