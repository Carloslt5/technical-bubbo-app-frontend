import { createSlice } from '@reduxjs/toolkit'
import { type Book } from '../../../types/book.type'

export interface BookData {
  bookData: Book | null
  bookLoading: boolean
}

const initialStateData: BookData = {
  bookData: null,
  bookLoading: false,
}

export const bookDataSlice = createSlice({
  name: 'Book',
  initialState: initialStateData,
  reducers: {
    bookDataRequest: (state) => {
      state.bookLoading = true
    },
    bookDataError: (state) => {
      state.bookLoading = false
    },
    bookDataSuccess: (state, action) => {
      state.bookData = action.payload
      state.bookLoading = false
    },
  },
})

export const { bookDataRequest, bookDataError, bookDataSuccess } = bookDataSlice.actions
export default bookDataSlice.reducer
