import type { NextPage } from 'next'
import { Navbar } from '../../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import imgOnlysats from './onlysats/onlysats3.png'
// import imgMetaverse from './bitcoinizing-the-metaverse/janebitcoin.jpg'
import imgMetaverse from './bitcoinizing-the-metaverse/ride3d.jpg'
import imgBitcoin from './bitcoin-first/bitcoin.png'
import image from './antidote/authoritarian2.png'

const Blog: NextPage = () => {
  return (
    <div className='container2'>
      <div className='absolute w-full h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-y-auto'>
        <Navbar />
        <div className='mt-24 max-w-3xl mx-auto'>
          <div className='mt-12 w-lg max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none'>
            <Link href='/blog/bitcoinizing-the-metaverse' passHref>
              <div
                style={{ minWidth: 500, maxWidth: 500 }}
                className='shadow-xl cursor-pointer flex flex-col rounded-lg overflow-hidden border-2 border-white'
              >
                <div className='flex-shrink-0 bg-purple'>
                  <div style={IMGCONTAINER}>
                    <Image
                      className='h-48 w-full object-cover object-top'
                      src={imgMetaverse}
                      alt=''
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>

                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <div className='block mt-1'>
                      <p className='text-xl font-semibold text-gray-900'>
                        Bitcoinizing the Metaverse
                      </p>
                      <div className='mt-1 flex space-x-1 text-sm text-gray-900'>
                        <time dateTime='2021-11-11'>November 11, 2021</time>
                      </div>
                      <p className='mt-4 text-base text-gray-900'>
                        Who will own the metaverse? Corporations,
                        &quot;crypto&quot;, or everyone?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href='/blog/onlysats' passHref>
              <div
                style={{ minWidth: 500, maxWidth: 500 }}
                className='shadow-xl cursor-pointer flex flex-col rounded-lg overflow-hidden border-2 border-white'
              >
                <div className='flex-shrink-0 bg-purple'>
                  <div style={IMGCONTAINER}>
                    <Image
                      className='h-48 w-full object-cover object-top'
                      src={imgOnlysats}
                      alt=''
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>

                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <div className='block mt-1'>
                      <p className='text-xl font-semibold text-gray-900'>
                        OnlySats
                      </p>
                      <div className='mt-1 flex space-x-1 text-sm text-gray-900'>
                        <time dateTime='2021-08-24'>August 24, 2021</time>
                      </div>
                      <p className='mt-4 text-base text-gray-900'>
                        Sex workers deserve to make a stable living without fear
                        of deplatforming. Bitcoin fixes this.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href='/blog/bitcoin-first' passHref>
              <div
                style={{ maxWidth: 500 }}
                className='shadow-xl cursor-pointer flex flex-col rounded-lg overflow-hidden border-2 border-white'
              >
                <div className='flex-shrink-0 bg-purple'>
                  <div style={IMGCONTAINER}>
                    <Image
                      className='h-48 w-full object-cover object-center'
                      src={imgBitcoin}
                      alt=''
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>

                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <div className='block mt-1'>
                      <p className='text-xl font-semibold text-gray-900'>
                        Bitcoin First
                      </p>
                      <div className='mt-1 flex space-x-1 text-sm text-gray-900'>
                        <time dateTime='2021-08-01'>August 19, 2021</time>
                      </div>
                      <p className='mt-4 text-base text-gray-900'>
                        Arcade City is pivoting to build on Bitcoin. All serious
                        builders should do the same.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href='/blog/antidote' passHref>
              <div
                style={{ maxWidth: 500 }}
                className='shadow-xl cursor-pointer flex flex-col rounded-lg overflow-hidden border-2 border-white'
              >
                <div className='flex-shrink-0 bg-purple'>
                  <div style={IMGCONTAINER}>
                    <Image
                      className='h-48 w-full object-cover object-center'
                      src={image}
                      alt=''
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>

                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <div className='block mt-1'>
                      <p className='text-xl font-semibold text-gray-900'>
                        The Antidote to Authoritarianism
                      </p>
                      <div className='mt-1 flex space-x-1 text-sm text-gray-900'>
                        <time dateTime='2021-08-01'>August 1, 2021</time>
                      </div>
                      <p className='mt-4 text-base text-gray-900'>
                        All people deserve to exit broken systems. We are
                        building a destination they can exit to.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className='mt-64 text-center'>
          <p>
            <Link href='/blog/bitcoin-first'>Bitcoin First</Link>
          </p>
          <p>
            <Link href='/blog/antidote'>The Antidote to Authoritarianism</Link>
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Blog

export const IMGCONTAINER: any = {
  width: '100%',
  height: 250,
  position: 'relative',
}
