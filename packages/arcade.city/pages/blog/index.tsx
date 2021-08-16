import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import { Navbar } from '../../components/Navbar'

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <div
        className='absolute w-full h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-y-auto'
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      >
        <Navbar />
      </div>
    </div>
  )
}

export default Blog
