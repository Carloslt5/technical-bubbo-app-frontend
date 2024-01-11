import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { type RootState } from './../store'
import BookCard from './BookCard'

const BooksList = () => {
  const { booksData, booksLoading } = useSelector((state: RootState) => state.booksData)

  if (booksLoading || booksData === null) {
    return <Text>Loading...</Text>
  }

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
