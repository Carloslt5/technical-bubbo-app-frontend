import AxiosError from 'axios'
import { useDispatch } from 'react-redux'
import {
  booksDataError,
  booksDataRequest,
  booksDataSuccess,
} from '../store/features/BookData/reducer'
import bookservices from '../services/book.services'

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

  return {
    fechBooksData,
  }
}
