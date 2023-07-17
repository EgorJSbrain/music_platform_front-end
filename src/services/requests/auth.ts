import { LOCAL_STORAGE_ITEMS } from "@/constants/global"
import { authRegistartion } from "../api"

export const registartion = async (data: any) => {
  const token = await authRegistartion(data)

  localStorage.setItem(LOCAL_STORAGE_ITEMS.accessToken, token)
}