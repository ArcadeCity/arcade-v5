import type { NextPage } from 'next'
// import styles from '../../styles/Home.module.css'
import { Navbar } from '../../components/Navbar'
import Link from 'next/link'

const Blog: NextPage = () => {
  return (
    <div className='container'>
      <div
        className='absolute w-full h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-y-auto'
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      >
        <Navbar />
        <div className='mt-64 text-center'>
          <p>
            <Link href='/blog/bitcoin-first'>Bitcoin First</Link>
          </p>
          <p>
            <Link href='/blog/antidote'>The Antidote to Authoritarianism</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
