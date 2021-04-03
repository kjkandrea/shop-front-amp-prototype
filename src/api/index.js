import { apiConfig } from '../../config/keys'
import axios from 'axios'

const apiUrl = apiConfig.url
const authKey = apiConfig.authKey

axios.interceptors.request.use(config => {
  config.headers.authorization = authKey

  return config
})

const request = {
  get (path) {
    return axios.get(`${apiUrl + path}`)
  },
}

export const products = {
  fetch() {
    return request.get(`/products/${apiConfig.productId}`).then(({ data }) => data)
  }
}