import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { type RootState } from './../store'
import BookCard from './BookCard'

const BooksList = () => {
  const { booksData } = useSelector((state: RootState) => state.booksData)

  return (
    <>
      {booksData === null ? (
        <Text>Loading...</Text>
      ) : (
        booksData.map((book, idx) => (
          <BookCard
            key={idx}
            {...book}
          />
        ))
      )}
    </>
  )
}

export default BooksList
