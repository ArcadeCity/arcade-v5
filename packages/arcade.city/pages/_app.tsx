import '../styles/globals.css'
import '../styles/Home.module.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Header } from '../components/Header'

let LCanvas: any = null
if (process.env.NODE_ENV === 'production') {
  LCanvas = dynamic(() => import('../components/LCanvas'), {
    ssr: false,
  })
} else {
  LCanvas = require('../components/LCanvas').default
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <LCanvas />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
