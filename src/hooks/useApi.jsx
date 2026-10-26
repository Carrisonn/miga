import { useState, useEffect } from 'react'
import { useFetch } from './useFetch.jsx'
import { API_URL, API_URL_SEARCH } from '../config/constants.js'

export function useApi(slug = '') {
  const { getData } = useFetch()
  const [apiResponse, setApiResponse] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ error: null })

  useEffect(() => {
    if (!slug) return

    getRecepie(slug)
  }, [slug])

  async function getRandomRecepies() {
    setIsLoading(true)

    try {
      const [error, data] = await getData(API_URL)
      if (error) return setError(error)

      setApiResponse(data)
    } catch (error) {
      setError({ error: 'Service not available' })
    } finally {
      setIsLoading(false)
    }
  }

  async function searchRecepie(recepie) {
    setIsLoading(true)

    try {
      const [error, data] = await getData(`${API_URL_SEARCH}${recepie}`)
      if (error) return setError(error)

      setApiResponse(data)
    } catch (error) {
      setError({ error: 'Service not available' })
    } finally {
      setIsLoading(false)
    }
  }

  async function getRecepie(slug) {
    setIsLoading(true)

    try {
      const [error, data] = await getData(`${API_URL}/${slug}`)
      if (error) return setError(error)

      setApiResponse(data)
    } catch (error) {
      setError({ error: 'Service not available' })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    apiResponse,
    isLoading,
    error,
    getRandomRecepies,
    searchRecepie,
    getRecepie
  }
}