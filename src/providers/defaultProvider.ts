import axios from 'axios'

const defaultProvider = axios.create({
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

/** Apply JWT authentication logic and tokens here. */
defaultProvider.interceptors.request.use((config) => {
  config.headers = { ...config.headers, Authorization: 'Bearer ...' }
  return config
})

/** Apply JWT token invalidation if necessary */
defaultProvider.interceptors.response.use(config => config, (error) => {
  return error
})

export default defaultProvider
