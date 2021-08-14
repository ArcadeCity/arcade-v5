import dynamic from 'next/dynamic'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Canvas = dynamic(() => import('../components/Canvas'), {
  ssr: false,
})

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

      <div
        style={{
          position: 'absolute',
          flex: 1,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
      >
        <Canvas />
      </div>

      <main className={styles.main}>
        Connect Freely.
        {/* <a
          href='https://github.com/ArcadeCity/arcade'
          className={styles.sneak}
          target='_blank'
          rel='noreferrer'
        >
          Sneak peek
        </a> */}
      </main>
      <div className={styles.arcade}>
        <h2>The</h2>
        <h1>ARCADE</h1>
      </div>
    </div>
  )
}

export default Home
