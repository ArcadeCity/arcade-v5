import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>Blog</main>
      <div className={styles.arcade}>
        <h2>The</h2>
        <h1>ARCADE</h1>
      </div>
    </div>
  )
}

export default Home
