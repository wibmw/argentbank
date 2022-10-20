import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

/* export interface User {
  first_name: string
  last_name: string
}*/

export interface LoginResponse {
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user/',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
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
    profile: builder.mutation<{ message: string }, void>({
      query: () => 'profile',
    }),
  }),
})

export const { useLoginMutation, useProfileMutation } = api
