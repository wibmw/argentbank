import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileCredentials, ProfileNames } from '../services/auth.service'

// Initiate all state values
const initialValues: Auth = {
  token: null,
  firstName: '',
  namesForm: { firstName: '', lastName: '' },
  credentialsForm: { email: '', password: '' },
  accountId: 0,
}

// User Slices
const authSlice = createSlice({
  name: 'auth',
  initialState: initialValues,

  /* 
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token
    }) */
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token
    },
    setFirstName: (state, action: PayloadAction<{ firstName: string }>) => {
      state.firstName = action.payload.firstName
    },
    setNamesForm: (state, action: PayloadAction<{ namesForm: ProfileNames }>) => {
      state.namesForm = action.payload.namesForm
    },
    setCredentialsForm: (state, action: PayloadAction<{ credentialsForm: ProfileCredentials }>) => {
      state.credentialsForm = action.payload.credentialsForm
    },
    setActiveAccount: (state, action: PayloadAction<{ id: number }>) => {
      state.accountId = action.payload.id
    },
    defaultState: (state) => {
      state = initialValues
    },
  },
})

// Initiate types
type Auth = {
  token: string | null
  firstName: string | null
  namesForm: ProfileNames | null
  credentialsForm: ProfileCredentials | null
  accountId: number | null
}

// export const setToken = (state: RootState) => state.auth.token // slice.actions
export const { setToken, setFirstName, setNamesForm, setCredentialsForm, setActiveAccount } = authSlice.actions
export default authSlice.reducer
