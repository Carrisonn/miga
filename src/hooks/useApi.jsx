import { useState } from 'react'
import { useFetch } from './useFetch.jsx'
import { API_URL, API_URL_SEARCH } from '../config/constants.js'

export function useApi() {
  const { getData } = useFetch()
  const [apiResponse, setApiResponse] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function getRandomRecepies() {
    setIsLoading(true)

    try {
      const [error, data] = await getData(API_URL)
      if (error) return console.log(error) // todo: manejar esto

      setApiResponse(data)
    } catch (error) {
      console.log(error) // todo: manejar esto
    } finally {
      setIsLoading(false)
    }
  }

  async function searchRecepie(recepie) {
    setIsLoading(true)

    try {
      const [error, data] = await getData(`${API_URL_SEARCH}${recepie}`)
      if (error) return console.log(error) // todo: manejar esto

      setApiResponse(data)
    } catch (error) {
      console.log(error) // todo: manejar esto
    } finally {
      setIsLoading(false)
    }
  }

  async function getRecepie(slug) {
    setIsLoading(true)

    try {
      const [error, data] = await getData(`${API_URL}/${slug}`)
      if (error) return console.log(error) // todo: manejar esto

      setApiResponse(data)
    } catch (error) {
      console.log(error) // todo: manejar esto
    } finally {
      setIsLoading(false)
    }
  }

  return {
    apiResponse,
    isLoading,
    getRandomRecepies,
    searchRecepie,
    getRecepie
  }
}