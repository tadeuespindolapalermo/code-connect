import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { ComingSoonNotice } from './ComingSoonNotice'

describe('ComingSoonNotice', () => {
  it('renders the title and a link back to login', () => {
    render(
      <MemoryRouter>
        <ComingSoonNotice title="Cadastro" />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: 'Cadastro' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Voltar para o login' })).toHaveAttribute(
      'href',
      '/login',
    )
  })

  it('accepts a custom back link', () => {
    render(
      <MemoryRouter>
        <ComingSoonNotice title="Cadastro" backTo="/inicio" />
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: 'Voltar para o login' })).toHaveAttribute(
      'href',
      '/inicio',
    )
  })
})
