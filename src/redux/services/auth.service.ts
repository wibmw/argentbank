import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface LoginResponse {
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface ProfileResponse {
  email: string
  firstName: string
  lastName: string
  createdAt: string
  updatedAt: string
  id: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user/',
    prepareHeaders: (headers) => {
      // (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = sessionStorage.getItem('token') // (getState() as RootState).auth.token
      
      if (token) headers.set('Authorization', `Bearer ${token}`)

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
  }),
})

export const { useLoginMutation, useProfileMutation } = api
