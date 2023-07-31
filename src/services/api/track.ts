import apiClient from "../apiClient"
import type { ITrack } from "@/types/track"

export const create = async (data: FormData) => {
  const response = await apiClient.post<{ track: ITrack }>('/tracks', data)

  return response.data
}
