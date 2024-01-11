import React from 'react'
import { View } from 'react-native'
import BookCard from './BookCard'
import { type Book } from '../types/book.type'

interface BooksListProps {
  booksData: Book[]
}
const BooksList = ({ booksData }: BooksListProps) => {
  return (
    <>
      {booksData.map((book) => (
        <View key={book.id}>
          <BookCard {...book} />
        </View>
      ))}
    </>
  )
}

export default BooksList
