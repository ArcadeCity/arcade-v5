import type { NextPage } from 'next'
import styles from '../../../styles/Home.module.css'
import { Navbar } from '../../../components/Navbar'
import imgAuthoritarian from './authoritarian.png'

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <div
        className='absolute w-full h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-y-auto'
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      >
        <Navbar />
        <div className='pt-20 text-lg max-w-prose mx-auto'>
          <div className='flex flex-col justify-center items-center'>
            <img
              className='mb-8 w-auto h-96 rounded-xl border-2 border-minsk shadow-lg'
              src={imgAuthoritarian}
            />
            <p className='-my-4 mb-12 text-bluebell italic text-center text-sm leading-relaxed'>
              "CLAMPDOWN: A hooded detainee is escorted on Thursday as Hong
              Kong's national-security police arrested five members of a speech
              therapists' union for allegedly conspiring to commit sedition
              through a series of picture books that portray sheep being
              targeted by wolves, an allusion to China's crackdown on
              pro-democracy supporters in the city." &mdash;Wall Street Journal,
              July 23, 2021. Photo: Vincent Yu / Associated Press
            </p>
          </div>
          <h1>
            <span className='block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
              The Antidote to Authoritarianism
            </span>
            <span className='mt-4 block text-base text-center text-bluebell font-semibold tracking-wide'>
              August 1, 2021
            </span>
          </h1>
        </div>
        <div className='mt-8 mb-16 prose prose-lg text-white mx-auto'>
          <p className='pb-3 text-center italic text-xl leading-relaxed'>
            All people deserve to exit broken systems.
            <br />
            We are building a destination they can exit to.
          </p>
          <p>"We tried voluntary.... The voluntary phase is over."</p>
          <p>
            So{' '}
            <a href='https://youtu.be/UdIpGnwu8T0?t=387' target='_blank'>
              declared
            </a>{' '}
            the mayor of America's largest city last week, introducing a new
            slew of government mandates to "protect our people".
          </p>
          <p>Authoritarians love a crisis. Especially if it never ends.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
