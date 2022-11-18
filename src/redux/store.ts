import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './services/auth.service'
import authReducer from './slices/auth.slice'
import { setupListeners } from '@reduxjs/toolkit/query'

// Redux Store
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})

// Store type
export type RootState = ReturnType<typeof store.getState>
// Dispatch type
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
