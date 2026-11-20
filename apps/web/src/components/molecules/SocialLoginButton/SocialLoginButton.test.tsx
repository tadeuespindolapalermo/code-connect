import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SocialLoginButton } from './SocialLoginButton'

describe('SocialLoginButton', () => {
  it.each([
    ['github', 'Github'],
    ['gmail', 'Gmail'],
  ] as const)('renders the %s provider labelled "%s"', (provider, label) => {
    render(<SocialLoginButton provider={provider} />)
    expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
  })

  it('calls onClick with its provider', async () => {
    const onClick = vi.fn()
    render(<SocialLoginButton provider="github" onClick={onClick} />)
    await userEvent.click(screen.getByRole('button', { name: 'Github' }))
    expect(onClick).toHaveBeenCalledWith('github')
  })
})
