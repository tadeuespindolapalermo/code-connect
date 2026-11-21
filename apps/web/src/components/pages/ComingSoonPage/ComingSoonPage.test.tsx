import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { ComingSoonPage } from './ComingSoonPage'

describe('ComingSoonPage', () => {
  it('renders the given title inside the auth layout', () => {
    render(
      <MemoryRouter>
        <ComingSoonPage title="Recuperar senha" />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: 'Recuperar senha' })).toBeInTheDocument()
    expect(screen.getByText('Esta página estará disponível em breve.')).toBeInTheDocument()
  })
})
