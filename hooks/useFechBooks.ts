import AxiosError from 'axios'
import { useDispatch } from 'react-redux'
import {
  booksDataError,
  booksDataRequest,
  booksDataSuccess,
} from '../store/features/BooksListData/reducer'
import bookservices from '../services/book.services'
import { router } from 'expo-router'
import { bookDataError, bookDataRequest, bookDataSuccess } from '../store/features/BookData/reducer'

export const useFechBooks = () => {
  const dispatch = useDispatch()

  const fechBooksData = async () => {
    try {
      dispatch(booksDataRequest())
      const { data } = await bookservices.getBooks()
      dispatch(booksDataSuccess(data))
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(booksDataError())
        alert('Bad Request')
      }
    }
  }

  const fechOneBookData = async (bookID: string) => {
    try {
      dispatch(bookDataRequest())
      const { data } = await bookservices.getOneBook(bookID)
      dispatch(bookDataSuccess(data))
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(bookDataError())
        alert('Bad Request')
      }
    }
  }

  const deleteOneBookData = async (bookID: string) => {
    await bookservices.deleteBook(bookID)
    router.replace('/gallery')
  }

  return {
    fechBooksData,
    fechOneBookData,
    deleteOneBookData,
  }
}
