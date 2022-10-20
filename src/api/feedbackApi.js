import { $host } from "../core/Api"

export const createFeedback = async (feedback) => {
  const { data } = await $host.post("api/feedback", feedback)
  return data
}

export const fetchFeedbacks = async () => {
  const { data } = await $host.get("api/feedback")
  return data
}