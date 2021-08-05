import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
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
