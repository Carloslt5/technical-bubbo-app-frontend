import axios, { type AxiosResponse, type AxiosInstance } from 'axios'
import { type Book } from '../types/book.type'
import { API_URL } from '@env'

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
}

const bookservices = new BookServices()
export default bookservices
