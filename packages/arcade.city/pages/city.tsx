import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { View } from 'react-native'
import { CityWeb } from '../../components/src/components/CityWeb'

const City: NextPage = () => {
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

      <View style={{ flex: 1, width: '100vw', height: '100vh' }}>
        <CityWeb />
      </View>
    </div>
  )
}

export default City
