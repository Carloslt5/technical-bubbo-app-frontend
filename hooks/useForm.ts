import { useState } from 'react'

export const useForm = () => {
  const [bookData, setBookData] = useState({
    author: '',
    title: '',
    year: '',
    pages: '',
    language: '',
    imageLink: '',
    link: '',
  })

  const handleChange = (property: string, text: string) => {
    setBookData((prevData) => ({ ...prevData, [property]: text }))
  }

  const handleSubmit = () => {
    console.log(bookData)
  }

  return {
    bookData,
    handleChange,
    handleSubmit,
  }
}
