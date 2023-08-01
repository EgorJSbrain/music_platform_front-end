import { create, getAllByUserId } from "../api"

export const createTrack = async (data: FormData) => {
  try {
    const track = await create(data)

    return track
  } catch (e) {
    console.log(e)
  }
}

export const getTracksByUserId = async (userId: string) => {
  try {
    const tracks = await getAllByUserId(userId)

    return tracks
  } catch (e) {
    console.log(e)
  }
}
