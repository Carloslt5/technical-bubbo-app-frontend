import React, { useEffect } from 'react'
import { useFechBooks } from '../../../hooks/useFechBooks'
import StyledText from '../../../styles/StyledText'
import BooksList from '../../../components/BooksList'
import StyledButton from '../../../styles/StyledButton'
import MainContainer from '../../../styles/MainContainer'
import { View } from 'react-native'

const BookListPage = () => {
  const { fechBooksData } = useFechBooks()

  useEffect(() => {
    fechBooksData()
  }, [])

  const onPressFunction = () => {
    console.log('object')
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <MainContainer>
        <StyledText
          fontWeight='bold'
          fontSize='h1'
        >
          Book List
        </StyledText>
        <StyledButton
          button='primary'
          onPress={onPressFunction}
        >
          <StyledText>Add Book</StyledText>
        </StyledButton>
        <BooksList />
      </MainContainer>
    </View>
  )
}

export default BookListPage
