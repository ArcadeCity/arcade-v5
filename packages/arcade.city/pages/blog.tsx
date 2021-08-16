import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        Blog Test
        <p>Now let's try this.</p>
      </main>
      <div className='prose'>
        <p className='font-sans text-2xl text-gray-400'>What is this</p>
      </div>
    </div>
  )
}

export default Blog
