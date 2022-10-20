import { $host } from "../core/Api"

export const createLead = async (lead) => {
  const { data } = await $host.post("api/lead", lead)
  return data
}

export const fetchFeedbacks = async () => {
  const { data } = await $host.get("api/lead")
  return data
}