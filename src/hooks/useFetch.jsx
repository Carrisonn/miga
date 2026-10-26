import { API_KEY } from '../config/constants'

export function useFetch() {
  async function getData(apiUrl) {
    try {
      const response = await fetch(apiUrl, { headers: { "Authorization": `Bearer ${API_KEY}` } })
      if (!response.ok) return [{ error: 'Service not available' }, null]

      const data = await response.json()

      return [null, data]
    } catch (error) {
      return [{ error: 'Service not available' }, null]
    }
  }

  return {
    getData
  }
}