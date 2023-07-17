import apiClient from "../apiClient"

export const authRegistartion = async (data: any) => {
  const response = await apiClient.post<{ token: string }>('/auth/registration', data)

  return response.data.token
}