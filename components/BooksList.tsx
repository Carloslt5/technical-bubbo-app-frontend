import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { type RootState } from './../store'
import BookCard from './BookCard'

const BooksList = () => {
  const { booksData, booksLoading } = useSelector((state: RootState) => state.booksData)

  if (booksLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <FlatList
      data={booksData}
      renderItem={({ item: book }) => (
        <View style={styles.gallery}>
          <BookCard {...book} />
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  gallery: {
    flex: 1,
    marginBottom: 5,
  },
})
export default BooksList
