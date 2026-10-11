import './Header.module.css'
import { useRouter } from '../hooks/useRouter.jsx'
import { Link } from './Link.jsx'

export function Header() {
  const { currentPath } = useRouter()
  const path = currentPath === '/' ? '/my-recepies' : '/'
  const linkText = currentPath === '/' ? 'My recepies' : 'Home'

  return (
    <header>
      <Link href='/'>
        <p>MIGA</p>
      </Link>
      <Link href={path}>
        {linkText}
      </Link>
    </header>
  )
}