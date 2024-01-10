import React, { useEffect } from 'react'
import { useFechBooks } from '../../../hooks/useFechBooks'
import BooksList from '../../../components/BooksList'
import StyledText from '../../../styles/StyledText'
import ViewContainer from '../../../styles/ViewContainer'
import { API_URL } from '@env'

const BookListPage = () => {
  const { fechBooksData } = useFechBooks()

  useEffect(() => {
    fechBooksData()
  }, [])

  return (
    <ViewContainer>
      <StyledText>{API_URL}</StyledText>
      <StyledText
        fontWeight='bold'
        fontSize='h1'
      >
        Book List
      </StyledText>
      <BooksList />
    </ViewContainer>
  )
}

export default BookListPage
