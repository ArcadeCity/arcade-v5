import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const router = useRouter()
  const location = router.pathname
  return (
    <div className={styles.header}>
      <span className={location === '/' ? styles.active : ''}>
        <Link href='/'>HOME</Link>
      </span>

      <span className={location === '/city' ? styles.active : ''}>
        <Link href='/city'>CITY</Link>
      </span>
    </div>
  )
}
