import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const router = useRouter()
  const location = router.pathname
  return (
    <div className={styles.header}>
      {/* <span className={styles.active}>
        <a
          href='https://github.com/ArcadeCity/arcade'
          target='_blank'
          rel='noreferrer'
          className={styles.link}
        >
          COMING SOON
        </a>
      </span> */}
      <span className={location === '/' ? styles.active : ''}>
        <Link href='/'>WELCOME</Link>
      </span>

      <span className={location === '/blog/antidote' ? styles.active : ''}>
        <Link href='/blog/antidote'>BLOG</Link>
      </span>
    </div>
  )
}
