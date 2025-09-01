import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../../src/components/ui/Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('shows loading state', () => {
    render(<Button loading>Loading</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveTextContent('Loading')
  })

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Secondary</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-gray-100')
  })

  it('applies size classes correctly', () => {
    render(<Button size="lg">Large</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-11')
  })
})