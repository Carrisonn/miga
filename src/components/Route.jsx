import { useRouter } from '../hooks/useRouter.jsx'

export function Route({ path, component: Component }) {
  const { currentPath } = useRouter()
  const routeRegex = new RegExp("^" + path.replace(/:\w+/g, "([^/]+)") + "$")
  const match = currentPath.match(routeRegex)

  if (!match) return null

  return <Component />
}