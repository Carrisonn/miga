import { useState, useRef, useEffect } from 'react'
import { useRouter } from './useRouter.jsx'

export function useSearchForm(idText, searchRecepie, getRandomRecepies) {
  const timeoutID = useRef(null)
  const { navigateTo } = useRouter()
  const [query, setQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('query') || ''
  })

  useEffect(() => {
    const params = new URLSearchParams()
    if (query) params.append('query', query)

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : `${window.location.pathname}`

    navigateTo(newUrl)
  }, [query, navigateTo])

  function handleSubmit(event) {
    event.preventDefault()

    const value = new FormData(event.target).get(idText).trim()
    if (!value) return
    if (event.target.name === idText) return

    searchRecepie(value)
  }

  function handleChange(event) {
    setQuery(event.target.value)

    const value = query.trim()
    if (!value) return

    if (timeoutID.current) clearTimeout(timeoutID.current)

    timeoutID.current = setTimeout(() => {
      searchRecepie(query)
    }, 500)
  }

  function handleReset() {
    setQuery('')
    getRandomRecepies()
  }

  return {
    query,
    handleChange,
    handleSubmit,
    handleReset
  }
}