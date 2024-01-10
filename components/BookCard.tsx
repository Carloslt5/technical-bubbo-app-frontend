import { View, Text, Image } from 'react-native'
import React from 'react'
import { type Book } from '../types/book.type'

const BookCard = ({ title, author, imageLink }: Book) => {
  return (
    <View>
      <Image
        source={{ uri: imageLink }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{title}</Text>
      <Text>{author}</Text>
    </View>
  )
}

export default BookCard
