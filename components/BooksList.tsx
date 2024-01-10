import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { type RootState } from './../store'
import BookCard from './BookCard'
import { Link } from 'expo-router'

const BooksList = () => {
  const { booksData, booksLoading } = useSelector((state: RootState) => state.booksData)
  const syles = StyleSheet.create({
    padding: {
      padding: 10,
      margin: 10,
      backgroundColor: 'grey',
    },
  })

  return (
    <>
      {booksLoading ? <Text>Loading...</Text> : false}
      {booksData?.map((book) => (
        <Link
          href={`/gallery/${book.id}`}
          key={book.id}
          style={syles.padding}
        >
          <BookCard {...book} />
        </Link>
      ))}
    </>
  )
}

export default BooksList
