import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileCredentials, ProfileNames } from '../services/auth.service'

type Auth = {
  token: string | null
  firstName: string | null
  namesForm: ProfileNames | null
  credentialsForm: ProfileCredentials | null
}

const initialValues: Auth = {
  token: null,
  firstName: null,
  namesForm: null,
  credentialsForm: null,
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
    setNamesForm: (state, action: PayloadAction<{ namesForm: ProfileNames }>) => {
      state.namesForm = action.payload.namesForm
    },
    setCredentialsForm: (state, action: PayloadAction<{ credentialsForm: ProfileCredentials }>) => {
      state.credentialsForm = action.payload.credentialsForm
    },
    defaultState: (state) => {
      state = initialValues
    },
  },
})

// export const setToken = (state: RootState) => state.auth.token // slice.actions
export const { setToken, setFirstName, setNamesForm, setCredentialsForm } = slice.actions
export default slice.reducer
