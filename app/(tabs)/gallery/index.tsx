import React, { useEffect } from 'react'
import { useFechBooks } from '../../../hooks/useFechBooks'
import StyledText from '../../../styles/StyledText'
import MainContainer from '../../../styles/MainContainer'
import BooksList from '../../../components/BooksList'

const BookListPage = () => {
  const { fechBooksData } = useFechBooks()

  useEffect(() => {
    fechBooksData()
  }, [])

  return (
    <MainContainer>
      <StyledText
        fontWeight='bold'
        fontSize='h1'
      >
        Book List
      </StyledText>
      <BooksList />
    </MainContainer>
  )
}

export default BookListPage
