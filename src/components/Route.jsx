import { match } from 'path-to-regexp'
import { useRouter } from '../hooks/useRouter.jsx'

export function Route({ path, component: Component }) {
  const { currentPath } = useRouter()
  const matcherFn = match(path, { decode: decodeURIComponent })
  const matched = matcherFn(currentPath)

  if (!matched) return null

  return <Component />
}