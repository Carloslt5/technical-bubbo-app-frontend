import { useState } from 'react'
import bookservices from '../services/book.services'
import { router } from 'expo-router'

export interface FormBookData {
  author: string
  title: string
  year: string
  pages: string
  country: string
  language: string
  imageLink: string
  link: string
}

export const useForm = () => {
  const [bookData, setBookData] = useState<FormBookData>({
    author: '',
    title: '',
    year: '',
    pages: '',
    country: '',
    language: '',
    imageLink: '',
    link: '',
  })

  const handleChange = (property: string, text: string) => {
    setBookData((prevData) => ({ ...prevData, [property]: text }))
  }

  const handleFormSubmit = async () => {
    try {
      await bookservices.createBook(bookData)
      router.replace('/gallery')
    } catch (error) {
      console.error('Error submitting book:', error)
    }
  }

  return {
    bookData,
    handleChange,
    handleFormSubmit,
  }
}
