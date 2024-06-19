import { extractSubdomain } from '../utils'

export const API_URL =
  (import.meta.env.VITE_REACT_APP_API_SERVER || '') + '/api/v1'

interface ErrorResponse {
  error: string
}

const requestHeaders = (): HeadersInit => {
  const headers: HeadersInit = new Headers()
  headers.set('Accept', 'application/json')
  headers.set('Content-Type', 'application/json')
  return headers
}

const buildErrorMessages = async (response: Response): Promise<string> => {
  let error: string = ''
  try {
    const errorResponse = (await response.json()) as ErrorResponse
    error = errorResponse.error
  } catch (e) {
    /* response is not json. do nothing */
  }
  return error || 'request failed with status: ' + response.status
}

export const register = async (
  email: string,
  password: string,
  orgSubdomain: string,
  orgName: string,
): Promise<string> => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: requestHeaders(),
    body: JSON.stringify({
      email,
      password,
      organization_subdomain: orgSubdomain,
      organization_name: orgName,
    }),
  })
  if (!response.ok) {
    throw new Error(await buildErrorMessages(response))
  }
  return response.text()
}

export const login = async (
  email: string,
  pass: string,
  rememberMe: boolean,
): Promise<string> => {
  const subdomain = extractSubdomain(window.location.hostname)
  const formBody = new URLSearchParams()
  formBody.append('email', email)
  formBody.append('password', pass)
  formBody.append('remember_me', rememberMe.toString())

  const response = await fetch(
    `${API_URL}/subdomains/${subdomain}/auth/login`,
    {
      method: 'POST',
      headers: {
        ...requestHeaders(),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: formBody.toString(),
    },
  )
  if (!response.ok) {
    throw new Error(await buildErrorMessages(response))
  }
  return response.text()
}
