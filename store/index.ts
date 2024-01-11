import { configureStore } from '@reduxjs/toolkit'
import booksDataSlice from './features/BooksListData/reducer'
import bookDataSlice from './features/BookData/reducer'

const store = configureStore({
  reducer: {
    booksData: booksDataSlice,
    bookData: bookDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})
export default store
export type RootState = ReturnType<typeof store.getState>
