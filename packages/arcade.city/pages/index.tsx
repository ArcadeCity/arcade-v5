import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arcade City</title>
        <meta name='description' content='Peer-to-peer everything.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>Ready?</main>
    </div>
  )
}

export default Home
