import type { NextPage } from 'next'
// import styles from '../styles/Home.module.css'
import { View } from 'react-native'
import { CityWeb } from '../../components/src/components/CityWeb'
import { Navbar } from '../components/Navbar'

const City: NextPage = () => {
  return (
    <div className='container'>
      <Navbar />
      <View style={{ flex: 1, width: '100vw', height: '100vh' }}>
        <CityWeb />
      </View>
    </div>
  )
}

export default City
