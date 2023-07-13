import apiClient from "../apiClient"

export const registartion = async (data: any) => {
  const response = await apiClient.post('/auth/registration', data)
  console.log("🚀 ~ file: auth.ts:5 ~ registartion ~ response:", response)

}