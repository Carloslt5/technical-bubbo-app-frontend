import axios, { type AxiosResponse, type AxiosInstance } from 'axios'
import { type Book } from '../types/book.type'
import { API_URL } from '@env'
import { type FormBookData } from '../hooks/useForm'

class BookServices {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${API_URL}`,
    })
  }

  getBooks = async (): Promise<AxiosResponse<Book[]>> => {
    return await this.api.get(`/books`)
  }

  getOneBook = async (id: string): Promise<AxiosResponse<Book>> => {
    return await this.api.get(`/books/${id}`)
  }

  createBook = async (bookData: FormBookData): Promise<AxiosResponse<Book>> => {
    return await this.api.post(`/books/create`, bookData)
  }

  updateBook = async (id: string, bookData: FormBookData): Promise<AxiosResponse<Book>> => {
    return await this.api.put(`/books/edit/${id}`, bookData)
  }

  deleteBook = async (id: string): Promise<AxiosResponse<Book>> => {
    return await this.api.delete(`/books/delete/${id}`)
  }
}

const bookservices = new BookServices()
export default bookservices
