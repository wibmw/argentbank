import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services/auth.service'
import type { RootState } from '../store'

type AuthState = {
  token: string | null
}

const slice = createSlice({
  name: 'auth',
  initialState: { token: null } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
      }
    )
  },
})

export default slice.reducer

export const selectCurrentToken = (state: RootState) => state.auth.token
