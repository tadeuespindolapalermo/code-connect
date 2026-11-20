import { render } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  it.each(['arrow-right', 'clipboard'] as const)('renders the %s icon as decorative', (name) => {
    const { container } = render(<Icon name={name} />)
    const svg = container.querySelector(`svg[data-icon="${name}"]`)
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
