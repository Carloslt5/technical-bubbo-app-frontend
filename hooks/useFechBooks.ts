import AxiosError from 'axios'
import { useDispatch } from 'react-redux'
import {
  booksDataError,
  booksDataRequest,
  booksDataSuccess,
} from '../store/features/BookData/reducer'
import bookservices from '../services/book.services'
import { useState } from 'react'
import { type Book } from '../types/book.type'
import { router } from 'expo-router'

export const useFechBooks = () => {
  const dispatch = useDispatch()
  const [bookData, setBookData] = useState<Book | null>(null)

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
    const { data } = await bookservices.getOneBook(bookID)
    setBookData(data)
  }

  const deleteOneBookData = async (bookID: string) => {
    await bookservices.deleteBook(bookID)
    router.replace('/gallery')
  }

  return {
    fechBooksData,
    fechOneBookData,
    deleteOneBookData,
    bookData,
  }
}
