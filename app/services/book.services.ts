import axios, { type AxiosResponse, type AxiosInstance } from 'axios'
import { API_URL } from '@env'

class BookServices {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${API_URL}`,
    })
  }

  async getBooks(): Promise<AxiosResponse> {
    return this.api.get(`/books`)
  }
}

const bookservices = new BookServices()
export default bookservices
