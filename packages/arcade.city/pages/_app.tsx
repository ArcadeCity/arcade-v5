import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

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
      <Component {...pageProps} />
      <LCanvas />
    </>
  )
}
export default MyApp
