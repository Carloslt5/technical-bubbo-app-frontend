import { createSlice } from '@reduxjs/toolkit'
import { type Book } from '../../../../types/book.type'

export interface BooksData {
  booksData: Book[] | null
  userLoading: boolean
}

const initialStateData: BooksData = {
  booksData: null,
  userLoading: false,
}

export const booksDataSlice = createSlice({
  name: 'Books List',
  initialState: initialStateData,
  reducers: {
    booksDataRequest: (state) => {
      state.userLoading = true
    },
    booksDataError: (state) => {
      state.userLoading = false
    },
    booksDataSuccess: (state, action) => {
      state.booksData = action.payload
      state.userLoading = false
    },
  },
})

export const { booksDataRequest, booksDataError, booksDataSuccess } = booksDataSlice.actions
export default booksDataSlice.reducer
