import type { IRegistrationData, ILoginData } from "@/types/auth"

import { registartion, login, me } from "../api"
import router from "@/router"

export const authRegistartion = async (data: IRegistrationData) => {
  try {
    const token = await registartion(data)

    return token
  } catch (e) {
    console.log(e)
  }
}

export const authLogin = async (data: ILoginData) => {
  try {
    const token = await login(data)

    if (token) {
      router.push('/')
    }
    return token
  } catch (e) {
    console.log(e)
  }
}

export const authMe = async () => {
  try {
    const response = await me()

    return response
  } catch (e) {
    console.log(e)
  }
}
