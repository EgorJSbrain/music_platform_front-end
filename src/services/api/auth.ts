import type { ILoginData, IRegistrationData } from "@/types/auth"
import apiClient from "../apiClient"

export const registartion = async (data: IRegistrationData) => {
  const response = await apiClient.post<{ token: string }>('/auth/registration', data)

  return response.data.token
}

export const login = async (data: ILoginData) => {
  const response = await apiClient.post<{ token: string }>('/auth/login', data)

  return response.data.token
}

export const me = async () => {
  const response = await apiClient.get('/auth/me')

  return response.data
}