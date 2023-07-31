import { create } from "../api"

export const trackCreate = async (data: FormData) => {
  try {
    console.log("------data:", data)
    const track = await create(data)
    console.log("------track:", track)

    return track
  } catch (e) {
    console.log(e)
  }
}
