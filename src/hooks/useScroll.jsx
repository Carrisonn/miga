import { useEffect, useState } from 'react'

export function useScroll() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 600 ? setShowButton(true) : setShowButton(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollTo({ position = 0 }) {
    window.scrollTo({ top: position, behavior: 'smooth' })
  }

  return {
    showButton,
    scrollTo
  }
}