import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LOCAL_STORAGE_ITEMS } from "@/constants/global"
import type { IUser, IRegistrationData, ILoginData } from '@/types/auth'

import { authLogin, authRegistartion, authMe } from '@/services/requests'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser | null>(null)

  const registartion = async (data: IRegistrationData) => {
    const token = await authRegistartion(data)

    if (token) {
      localStorage.setItem(LOCAL_STORAGE_ITEMS.accessToken, token)

      return true
    }

    return false
  }

  const login = async (data: ILoginData) => {
    const token = await authLogin(data)

    if (token) {
      localStorage.setItem(LOCAL_STORAGE_ITEMS.accessToken, token)
      return true
    }

    return false
  }

  const logout = async (data: ILoginData) => {
    const token = await authLogin(data)

    if (token) {
      localStorage.removeItem(LOCAL_STORAGE_ITEMS.accessToken)
    }

    return false
  }

  const me = async (token: string) => {
    if (token) {
      const response = await authMe()
      user.value = response

      return response
    }

    return false
  }

  return { user, registartion, login, logout, me }
})
