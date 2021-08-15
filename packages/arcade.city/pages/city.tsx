import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from 'react-native'

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
        <span className={styles.active}>
          <Link href='/'>HOME</Link>
        </span>

        <span>
          <Link href='/blog'>BLOG</Link>
        </span>
      </div>

      <main className={styles.main}>
        CITY
        <Button
          title='Hello'
          onPress={() => {
            console.log('ok')
          }}
        />
      </main>
    </div>
  )
}

export default Home
