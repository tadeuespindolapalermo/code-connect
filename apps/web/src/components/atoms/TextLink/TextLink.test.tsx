import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { TextLink } from './TextLink'

describe('TextLink', () => {
  it('renders a link to the given route', () => {
    render(
      <MemoryRouter>
        <TextLink to="/esqueci-senha">Esqueci a senha</TextLink>
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: 'Esqueci a senha' })).toHaveAttribute(
      'href',
      '/esqueci-senha',
    )
  })

  it('renders the accent variant', () => {
    render(
      <MemoryRouter>
        <TextLink to="/signup" variant="accent">
          Crie seu cadastro!
        </TextLink>
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: 'Crie seu cadastro!' })).toHaveAttribute(
      'href',
      '/signup',
    )
  })
})
