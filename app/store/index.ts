import { configureStore } from '@reduxjs/toolkit'
import booksDataSlice from './features/BookData/reducer'

const store = configureStore({
  reducer: {
    booksData: booksDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})
export default store
export type RootState = ReturnType<typeof store.getState>
