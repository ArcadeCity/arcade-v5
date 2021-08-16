import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>Connect Freely</main>
      <div className={styles.arcade}>
        <h2 className='text-2xl pb-1'>The</h2>
        <h1 className='text-6xl py-8'>ARCADE</h1>
      </div>
    </div>
  )
}

export default Home
