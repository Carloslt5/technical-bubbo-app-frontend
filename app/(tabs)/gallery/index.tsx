import React, { useEffect } from 'react'
import { Text } from 'react-native'

import { useFechBooks } from '../../../hooks/useFechBooks'
import BooksList from '../../../components/BooksList'

const BookListPage = () => {
  const { fechBooksData } = useFechBooks()

  useEffect(() => {
    fechBooksData()
  }, [])

  return (
    <>
      <Text>Book List</Text>
      <BooksList />
    </>
  )
}

export default BookListPage
