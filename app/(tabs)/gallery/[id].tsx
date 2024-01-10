import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const BooksDetails = () => {
  const { id } = useLocalSearchParams()

  return (
    <View>
      <Text>BooksDetails</Text>
      <Text>{id}</Text>
    </View>
  )
}

export default BooksDetails
