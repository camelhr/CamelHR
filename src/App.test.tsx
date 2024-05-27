import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

// To Test
import App from './App'

// Tests
describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    // Setup
    render(<App />)
    const registerText = await screen.queryByText('Register')
    const loginText = await screen.queryByText('Login')

    // Expectations
    expect(registerText).toBeInTheDocument()
    expect(loginText).toBeInTheDocument()
  })
})
