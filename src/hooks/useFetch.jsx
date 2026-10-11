import { API_KEY } from '../config/constants'

export function useFetch() {
  async function getData(apiUrl) {
    try {
      const response = await fetch(apiUrl, { headers: { "Authorization": `Bearer ${API_KEY}` } })
      if (!response.ok) return [{ error: 'No se pudo obtener las recetas' }, null]

      const data = await response.json()

      return [null, data]
    } catch (error) {
      return [{ error: 'No se pudo obtener las recetas' }, null] // enviar codigo de estado para manejar si el error es 500??
    }
  }

  return {
    getData
  }
}