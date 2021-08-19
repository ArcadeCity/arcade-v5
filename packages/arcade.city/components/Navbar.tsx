// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const router = useRouter()
  const location = router.pathname
  return (
    <div className='header'>
      {/* <span className='active'>
        <a
          href='https://github.com/ArcadeCity/arcade'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          COMING SOON
        </a>
      </span> */}
      <span className={location === '/' ? 'active' : ''}>
        <Link href='/'>WELCOME</Link>
      </span>

      <span className={location === '/blog' ? 'active' : ''}>
        <Link href='/blog'>BLOG</Link>
      </span>
    </div>
  )
}
