import { Image, Text, View } from 'react-native'
import React from 'react'
import { type Book } from '../types/book.type'
import { SafeAreaView } from 'react-native-safe-area-context'

const BooksDetails = ({
  id,
  author,
  country,
  language,
  link,
  pages,
  title,
  year,
  imageLink,
}: Book) => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={{ uri: imageLink }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View>
        <Text>{author}</Text>
      </View>
    </SafeAreaView>
  )
}

export default BooksDetails
