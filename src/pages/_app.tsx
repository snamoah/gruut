import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Groot</title>
        <meta name="description" content="Download Videos and Images from Instagram" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default App
