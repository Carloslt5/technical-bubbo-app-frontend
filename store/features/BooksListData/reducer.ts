import { createSlice } from '@reduxjs/toolkit'
import { type Book } from '../../../types/book.type'

export interface BooksData {
  booksData: Book[] | null
  booksLoading: boolean
}

const initialStateData: BooksData = {
  booksData: null,
  booksLoading: false,
}

export const booksDataSlice = createSlice({
  name: 'Books List',
  initialState: initialStateData,
  reducers: {
    booksDataRequest: (state) => {
      state.booksLoading = true
    },
    booksDataError: (state) => {
      state.booksLoading = false
    },
    booksDataSuccess: (state, action) => {
      state.booksData = action.payload
      state.booksLoading = false
    },
  },
})

export const { booksDataRequest, booksDataError, booksDataSuccess } = booksDataSlice.actions
export default booksDataSlice.reducer
