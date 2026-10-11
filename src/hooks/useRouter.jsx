import { useEffect, useState } from 'react'

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    function handleRouteChange() {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('routechange', handleRouteChange)
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('routechange', handleRouteChange)
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  function navigateTo(path) {
    window.history.pushState({}, '', path)
    window.dispatchEvent(new Event('routechange'))
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  function getSlug() {
    return currentPath.split('/').filter(Boolean)[1]
  }

  return {
    currentPath,
    navigateTo,
    getSlug
  }
}