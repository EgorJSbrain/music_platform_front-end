import apiClient from "../apiClient"
import type { ITrack } from "@/types/track"

export const create = async (data: FormData) => {
  const response = await apiClient.post<{ track: ITrack }>('/tracks', data)

  return response.data
}

export const getAllByUserId = async (userId: string) => {
  const response = await apiClient.get<ITrack[]>(`/tracks/by-user/${userId}`)

  return response.data
}
