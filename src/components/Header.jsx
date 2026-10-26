import { useRouter } from '../hooks/useRouter.jsx'
import { Link } from './Link.jsx'

export function Header() {
  const { currentPath } = useRouter()

  const dataLink = currentPath === '/'
    ? { path: '/my-recepies', text: 'My Recepies' }
    : { path: '/', text: 'Home' }

  return (
    <header>
      <Link href='/'>
        <p>MIGA</p>
      </Link>
      <Link href={dataLink.path}>
        {dataLink.text}
      </Link>
    </header>
  )
}