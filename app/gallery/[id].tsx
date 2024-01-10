import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useFechBooks } from '../../hooks/useFechBooks'
import BooksDetails from '../../components/BooksDetails'

const BooksDetailsPage = () => {
  const { id }: { id?: string } = useLocalSearchParams()
  const { bookData, fechOneBookData } = useFechBooks()

  useEffect(() => {
    if (id !== undefined) {
      fechOneBookData(id)
    }
  }, [id])

  if (bookData === null) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      <Stack.Screen options={{ headerTitle: 'Detalles' }} />
      <Text>BooksDetails</Text>
      <BooksDetails {...bookData} />
    </View>
  )
}

export default BooksDetailsPage
