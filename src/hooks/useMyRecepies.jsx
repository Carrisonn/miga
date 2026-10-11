import { useState, useEffect } from 'react'
import { useRouter } from './useRouter.jsx'
import { recepieStore } from '../store/recepiesStore.js'

export function useMyRecepies(idText) {
  const { navigateTo } = useRouter()
  const [query, setQuery] = useState('')
  const [savedRecepies, setSavedRecepies] = useState(() => JSON.parse(localStorage.getItem('userRecepies')) || [])

  useEffect(() => {
    localStorage.setItem('userRecepie', JSON.stringify(savedRecepies))
  }, [savedRecepies])

  useEffect(() => {
    const params = new URLSearchParams()
    if (query) params.append('query', query)

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : `${window.location.pathname}`

    navigateTo(newUrl)
  }, [query, navigateTo])

  const filteredRecepies = savedRecepies.filter(({ name }) => {
    return name.toLowerCase().includes(query.trim().toLowerCase())
  })

  function toogleRecepie(recepie) {
    setSavedRecepies(prevState => {
      const existRecepie = prevState.some(saved => saved.id === recepie.id)
      if (existRecepie) return prevState.filter(saved => saved.id !== recepie.id)

      return [...prevState, recepie]
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const value = new FormData(event.target).get(idText).trim()
    if (!value) return

    setQuery(value)
  }

  function handleChange(event) {
    setQuery(event.target.value)
  }

  function handleReset() {
    setQuery('')
  }

  return {
    handleSubmit,
    handleChange,
    handleReset,
    toogleRecepie,
    query,
    filteredRecepies,
    savedRecepies,
  }
}