import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const Navbar = () => (
  <div className={styles.header}>
    <span className={styles.active}>
      <Link href='/'>HOME</Link>
    </span>

    <span>
      <Link href='/city'>CITY</Link>
    </span>
  </div>
)
