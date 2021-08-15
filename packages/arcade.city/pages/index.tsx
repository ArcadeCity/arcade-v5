import dynamic from 'next/dynamic'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Canvas = dynamic(() => import('../components/Canvas'), {
  ssr: false,
})

const Home: NextPage = () => {
  // const [location] = useLocation()
  // console.log('location:', location)
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

        {/* <span>APP</span> */}
        <span>
          <Link href='/blog'>BLOG</Link>
        </span>
        {/* <span>FREE BITCOIN</span> */}
        {/* <span>CONTACT</span> */}
      </div>

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
      {/* <Switch location={location}>
        <Route path='/'>Home</Route>
        <Route path='/blog'>Blog</Route>
      </Switch> */}
      <main className={styles.main}>
        Connect Freely
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
