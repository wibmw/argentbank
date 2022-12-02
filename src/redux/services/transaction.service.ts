import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getLocalToken } from '../../utils/localDatas'

// Auth User API
export const transactionApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user/profile/',
    prepareHeaders: (headers) => {
      // (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getLocalToken() // (getState() as RootState).auth.token
      if (token) headers.set('Authorization', `Bearer ${token}`)

      return headers
    },
  }),

  endpoints: (builder) => ({
    // MonthTransactions --> Return all transactions created in the provided month
    monthTransactions: builder.mutation<ITransaction[], ISelectedMonth>({
      query: (selectedMonth) => {
        return {
          url: 'monthTransactions',
          method: 'POST',
          body: selectedMonth,
        }
      },
    }),
    // Transaction --> Return informations of the selected transaction
    transaction: builder.mutation<ITransaction, Id>({
      query: (id) => {
        return {
          url: 'transaction',
          method: 'POST',
          body: id,
        }
      },
    }),
    // AddTransaction --> Create a new transaction with provided informations
    addTransaction: builder.mutation<void, ITransaction>({
      query: (transaction) => {
        return {
          url: 'addTransaction',
          method: 'POST',
          body: transaction,
        }
      },
    }),
    // updateTransaction --> Update a transaction with provided informations
    updateTransaction: builder.mutation<void, ITransaction>({
      query: (transaction) => {
        return {
          url: 'updateTransaction',
          method: 'PUT',
          body: transaction,
        }
      },
    }),
    // deleteTransaction --> Delete the selected transaction
    deleteTransaction: builder.mutation<void, Id>({
      query: (id) => {
        return {
          url: 'deleteTransaction',
          method: 'DELETE',
          body: id,
        }
      },
    }),
  }),
})

interface Id {
  id: number
}

interface ISelectedMonth extends Id {
  month: string
}

interface ITransaction extends Id {
  accountId: number
  description: string
  amount: number
  currency: string
  type: string
  category: string
  note: string
  createdAt?: string
  updatedAt?: string
}

export interface IAccount extends Id {
  userId: number
  name: string
  balance: number
  currency: string
  description: string
}
