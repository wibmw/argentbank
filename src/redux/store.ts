import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './services/auth.service'
import authReducer from './slices/auth.slice'
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

// Redux Store
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware),
})

// Store type
export type RootState = ReturnType<typeof store.getState>
// Dispatch type
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
export const persistor = persistStore(store)
