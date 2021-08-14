import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { trackPageView } from '../config/analytics'

import '../styles/globals.css'
import { initSentry } from '../config/sentry'

initSentry()

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', trackPageView)

    return () => {
      router.events.off('routeChangeComplete', trackPageView)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo
        title="Gruut - Download Instagram Content"
        description="Easily download Reels, IGTV Videos, Images and Posts from Instagram"
        openGraph={{
          type: 'website',
          url: 'https://gruut.xyz',
          title: 'Gruut - Download Instagram Content',
          description:
            'Easily download Reels, IGTV Videos, Images and Posts from Instagram',
          images: [
            {
              url: '/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Gruut OG Image',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
export default App
