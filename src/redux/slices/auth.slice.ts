import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../services/auth.service'
import type { RootState } from '../store'

type AuthState = {
  token: string | null
}

const initialState: AuthState = {
  token: null,
}

const slice = createSlice({
  name: 'auth',
  initialState: { token: null } as AuthState,
  reducers: {
    /* 
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token
    }) */

    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token
    },
    defaultState: (state) => {
      state = initialState
    },
  },
})

// export const setToken = (state: RootState) => state.auth.token // slice.actions
export const { setToken } = slice.actions
export default slice.reducer
