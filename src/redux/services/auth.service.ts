import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getLocalToken } from '../../utils/localDatas'

export interface Token {
  token: string
}

export interface ProfileCredentials {
  email: string
  password: string
  isEmailValid?: boolean
  isPasswordValid?: boolean
}

export interface ProfileDatas {
  email: string
  firstName: string
  lastName: string
  createdAt: string
  updatedAt: string
  id: string
}

export interface ProfileNames {
  firstName: string | null
  lastName: string | null
  isFirstNameValid?: boolean
  isLastNameValid?: boolean
}

export interface SignupRequest {
  firstName: string | null
  lastName: string | null
  email: string
  password: string
}

export interface SignupResponse {
  email: string
  id: string
}

export const api = createApi({
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
  endpoints: (builder) => ({
    login: builder.mutation<Token, ProfileCredentials>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    profile: builder.mutation<ProfileDatas, void>({
      query: () => {
        return {
          url: 'profile',
          method: 'POST',
        }
      },
    }),
    signup: builder.mutation<SignupResponse, SignupRequest>({
      query: (accountInfos) => {
        return {
          url: 'signup',
          method: 'POST',
          body: accountInfos,
        }
      },
    }),
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

export const { useLoginMutation, useProfileMutation, useUpdateProfileMutation, useSignupMutation } = api
