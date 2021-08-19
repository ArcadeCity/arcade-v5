import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='container2'>
      <Navbar />
      <main className='main'>Connect Freely</main>
      <div className='arcade'>
        <h2 className='text-2xl pb-1'>The</h2>
        <h1 className='text-6xl py-8'>ARCADE</h1>
      </div>
    </div>
  )
}

export default Home
