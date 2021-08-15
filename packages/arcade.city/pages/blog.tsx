import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arcade City</title>
        <meta name='description' content='Peer-to-peer everything.' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Amiri|Josefin+Sans:600&display=swap'
          rel='stylesheet'
        />
      </Head>

      <div className={styles.header}>
        <span>
          <Link href='/'>HOME</Link>
        </span>
        <span className={styles.active}>
          <Link href='/blog'>BLOG</Link>
        </span>
      </div>

      <main className={styles.main}>Blog</main>
      <div className={styles.arcade}>
        <h2>The</h2>
        <h1>ARCADE</h1>
      </div>
    </div>
  )
}

export default Home
