import { Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useFechBooks } from '../../hooks/useFechBooks'
import BooksDetails from '../../components/BooksDetails'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    <SafeAreaView>
      <Stack.Screen options={{ headerTitle: 'Detalles' }} />
      <BooksDetails {...bookData} />
    </SafeAreaView>
  )
}

export default BooksDetailsPage
