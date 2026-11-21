import { render, screen } from '@testing-library/react'
import { AuthTemplate } from './AuthTemplate'

describe('AuthTemplate', () => {
  it('renders the banner and content slots inside the main landmark', () => {
    render(
      <AuthTemplate banner={<img src="/banner.png" alt="Banner" />}>
        <h1>Login</h1>
      </AuthTemplate>,
    )

    const main = screen.getByRole('main')
    expect(main).toContainElement(screen.getByRole('img', { name: 'Banner' }))
    expect(main).toContainElement(screen.getByRole('heading', { name: 'Login' }))
  })
})
