import { View, Text } from 'react-native'
import React from 'react'
import { type Book } from '../types/book.type'

const BookCard = ({ title }: Book) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default BookCard
