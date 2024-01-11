import { Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import BooksDetails from '../../components/BooksDetails'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFechBooks } from '../../hooks/useFechBooks'
import { useSelector } from 'react-redux'
import { type RootState } from '../../store'

const BooksDetailsPage = () => {
  const { id }: { id?: string } = useLocalSearchParams()
  const { bookData } = useSelector((state: RootState) => state.bookData)

  const { fechOneBookData } = useFechBooks()

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
      <Stack.Screen options={{ headerTitle: 'Details' }} />
      <BooksDetails {...bookData} />
    </SafeAreaView>
  )
}

export default BooksDetailsPage
