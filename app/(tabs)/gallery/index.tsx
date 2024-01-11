import React, { useEffect } from 'react'
import { useFechBooks } from '../../../hooks/useFechBooks'
import StyledText from '../../../styles/StyledText'
import BooksList from '../../../components/BooksList'
import MainContainer from '../../../styles/MainContainer'
import { ScrollView, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { type RootState } from '../../../store'
import { Stack } from 'expo-router'

const BookListPage = () => {
  const { fechBooksData } = useFechBooks()
  const { booksData, booksLoading } = useSelector((state: RootState) => state.booksData)

  useEffect(() => {
    fechBooksData()
  }, [])

  if (booksLoading || booksData === null) {
    return <Text>Loading...</Text>
  }

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerTitle: 'Gallery',
          headerTitleAlign: 'center',
        }}
      />
      <MainContainer>
        <StyledText
          fontWeight='bold'
          fontSize='h1'
        >
          Book List
        </StyledText>
        <BooksList booksData={booksData} />
      </MainContainer>
    </ScrollView>
  )
}

export default BookListPage
