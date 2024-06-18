import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { register, login } from '../api/api'
import { APIStatus, APIStatusType } from './common'

interface AuthState {
  errorMessage: string
  status: APIStatus
}

const initialState: AuthState = {
  errorMessage: '',
  status: {
    registerAsync: APIStatusType.IDLE,
    loginAsync: APIStatusType.IDLE,
  },
}

export interface RegisterRequestPayload {
  email: string
  password: string
  orgSubdomain: string
  orgName: string
}

export interface LoginRequestPayload {
  email: string
  password: string
  rememberMe: boolean
}

export const registerAsync = createAsyncThunk(
  'auth/register',
  async (payload: RegisterRequestPayload) => {
    const response = await register(
      payload.email,
      payload.password,
      payload.orgSubdomain,
      payload.orgName,
    )
    return response
  },
)

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (payload: LoginRequestPayload) => {
    const response = await login(
      payload.email,
      payload.password,
      payload.rememberMe,
    )
    return response
  },
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status.registerAsync = APIStatusType.LOADING
      })
      .addCase(registerAsync.fulfilled, (state) => {
        state.status.registerAsync = APIStatusType.IDLE
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.errorMessage = action.error.message as string
        state.status.registerAsync = APIStatusType.FAIL
      })

      .addCase(loginAsync.pending, (state) => {
        state.status.loginAsync = APIStatusType.LOADING
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.status.loginAsync = APIStatusType.IDLE
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.errorMessage = action.error.message as string
        state.status.loginAsync = APIStatusType.FAIL
      })
  },
})

export default authSlice.reducer
