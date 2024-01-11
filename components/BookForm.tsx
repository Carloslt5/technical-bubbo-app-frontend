import React from 'react'
import { useForm } from '../hooks/useForm'
import StyledForm from '../styles/StyledForm'
import StyledText from '../styles/StyledText'
import { StyledInput } from '../styles/StyledInput'
import StyledButton from '../styles/StyledButton'

const BookForm = () => {
  const { bookData, handleChange, handleFormSubmit } = useForm()

  return (
    <StyledForm>
      <StyledText
        fontWeight='bold'
        fontSize='subheading'
      >
        New Book
      </StyledText>

      <StyledInput
        placeholder='Title'
        onChangeText={(text) => {
          handleChange('title', text)
        }}
        value={bookData.title}
      />
      <StyledInput
        placeholder='Author'
        onChangeText={(text) => {
          handleChange('author', text)
        }}
        value={bookData.author}
      />
      <StyledInput
        placeholder='Year'
        onChangeText={(text) => {
          handleChange('year', text)
        }}
        value={bookData.year}
      />
      <StyledInput
        placeholder='Pages'
        onChangeText={(text) => {
          handleChange('pages', text)
        }}
        value={bookData.pages}
      />
      <StyledInput
        placeholder='Country'
        onChangeText={(text) => {
          handleChange('country', text)
        }}
        value={bookData?.country}
      />
      <StyledInput
        placeholder='Language'
        onChangeText={(text) => {
          handleChange('language', text)
        }}
        value={bookData.language}
      />
      <StyledInput
        placeholder='Link Image'
        onChangeText={(text) => {
          handleChange('imageLink', text)
        }}
        value={bookData.imageLink}
      />
      <StyledInput
        placeholder='Link details'
        onChangeText={(text) => {
          handleChange('link', text)
        }}
        value={bookData.link}
      />

      <StyledButton
        button='submit'
        onPress={async () => {
          await handleFormSubmit()
        }}
      >
        <StyledText color='textWhite'>Submit</StyledText>
      </StyledButton>
    </StyledForm>
  )
}

export default BookForm
