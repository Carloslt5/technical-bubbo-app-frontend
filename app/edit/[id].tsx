import { View, StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import BookEditForm from '../../components/BookEditForm'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useSelector } from 'react-redux'
import { type RootState } from '../../store'
import { useFechBooks } from '../../hooks/useFechBooks'

const EditPage = () => {
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
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: 'Edit' }} />
      <BookEditForm
        titleForm='Edit Book'
        initialBookData={bookData}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default EditPage
