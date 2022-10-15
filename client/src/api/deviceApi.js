import { $host } from "../core/Api"

export const createType = async (type) => {
  const { data } = await $host.post("api/feedback", type)
  return data
}

export const fetchTypes = async () => {
  const { data } = await $host.get("api/feedback")
  return data
}