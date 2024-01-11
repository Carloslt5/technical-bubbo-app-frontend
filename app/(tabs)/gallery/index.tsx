import React, { useEffect } from 'react'
import { useFechBooks } from '../../../hooks/useFechBooks'
import StyledText from '../../../styles/StyledText'
import BooksList from '../../../components/BooksList'
import MainContainer from '../../../styles/MainContainer'
import { ScrollView } from 'react-native'

const BookListPage = () => {
  const { fechBooksData } = useFechBooks()

  useEffect(() => {
    fechBooksData()
  }, [])

  return (
    <ScrollView>
      <MainContainer>
        <StyledText
          fontWeight='bold'
          fontSize='h1'
        >
          Book List
        </StyledText>
        <BooksList />
      </MainContainer>
    </ScrollView>
  )
}

export default BookListPage
