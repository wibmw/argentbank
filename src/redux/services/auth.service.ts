import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getLocalToken } from '../../utils/localDatas'

// Auth User API
export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user/',
    prepareHeaders: (headers) => {
      // (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getLocalToken() // (getState() as RootState).auth.token
      if (token) headers.set('Authorization', `Bearer ${token}`)

      return headers
    },
  }),
  // Login --> Return the auth token
  endpoints: (builder) => ({
    login: builder.mutation<Token, ProfileCredentials>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // Profile --> Return the user profile
    profile: builder.mutation<ProfileDatas, void>({
      query: () => {
        return {
          url: 'profile',
          method: 'POST',
        }
      },
    }),
    // SignUp --> Register a new user
    signup: builder.mutation<SignupResponse, SignupRequest>({
      query: (accountInfos) => {
        return {
          url: 'signup',
          method: 'POST',
          body: accountInfos,
        }
      },
    }),
    // updateProfile --> Update user names
    updateProfile: builder.mutation<void, ProfileNames>({
      query: (namesForm) => {
        return {
          url: 'profile',
          method: 'PUT',
          body: namesForm,
        }
      },
    }),
  }),
})

// Token Interface
export interface Token {
  token: string
}
// User Credentials Interface
export interface ProfileCredentials {
  email: string
  password: string
  isEmailValid?: boolean
  isPasswordValid?: boolean
}
// User Profile Data Interface
export interface ProfileDatas {
  email: string
  firstName: string
  lastName: string
  createdAt: string
  updatedAt: string
  id: string
}
// User Names Interface
export interface ProfileNames {
  firstName: string | null
  lastName: string | null
  isFirstNameValid?: boolean
  isLastNameValid?: boolean
}
// Data to SignUp Interface
export interface SignupRequest {
  firstName: string | null
  lastName: string | null
  email: string
  password: string
}
// SignUp Response Interface
export interface SignupResponse {
  email: string
  id: string
}

export const { useLoginMutation, useProfileMutation, useUpdateProfileMutation, useSignupMutation } = authApi
