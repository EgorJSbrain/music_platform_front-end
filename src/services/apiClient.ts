import axios, { type InternalAxiosRequestConfig } from "axios";

const interceptorRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const accessToken = localStorage.getItem('')
  // const accessToken = localStorage.getItem(LOCAL_STORAGE_ITEMS.accessToken)

  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
}

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

apiClient.interceptors.request.use(interceptorRequest)

export default apiClient
