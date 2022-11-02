import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getLocalToken } from '../../utils/localData'

export interface LoginResponse {
  token: string
}

export interface LoginRequest {
  email: string | null
  password: string | null
}

export interface ProfileResponse {
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
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user/',
    prepareHeaders: (headers) => {
      // (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getLocalToken() // (getState() as RootState).auth.token
      console.log('token : ' + token)
      if (token) headers.set('Authorization', `Bearer ${token}`)
      console.log('header :' + { headers })

      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    profile: builder.mutation<ProfileResponse, void>({
      query: () => {
        return {
          url: 'profile',
          method: 'POST',
        }
      },
    }),
    updateProfile: builder.mutation<void, ProfileNames>({
      query: (names) => {
        return {
          url: 'profile',
          method: 'PUT',
          body: names,
        }
      },
    }),
  }),
})

export const { useLoginMutation, useProfileMutation, useUpdateProfileMutation } = api
