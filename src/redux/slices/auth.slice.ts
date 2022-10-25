import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../services/auth.service'
import type { RootState } from '../store'

type Auth = {
  token: string | null
  firstName: string | null
}

const initialValues: Auth = {
  token: null,
  firstName: null,
}

const slice = createSlice({
  name: 'auth',
  initialState: initialValues,
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
    setFirstName: (state, action: PayloadAction<{ firstName: string }>) => {
      state.firstName = action.payload.firstName
    },
    defaultState: (state) => {
      state = initialValues
    },
  },
})

// export const setToken = (state: RootState) => state.auth.token // slice.actions
export const { setToken, setFirstName } = slice.actions
export default slice.reducer
