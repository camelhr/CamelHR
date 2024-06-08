import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

// To Test
import Domain from './Domain'

// Tests
describe('Renders domain home page correctly', async () => {
  it('Should render the page correctly', async () => {
    // Setup
    render(<Domain />)
    const registerText = await screen.queryByText('Register')

    // Expectations
    expect(registerText).toBeInTheDocument()
  })
})
