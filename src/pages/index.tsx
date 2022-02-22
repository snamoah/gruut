import axios from 'axios'
import { useState } from 'react'
import Layout from '../components/Layout'
import InputBox from '../components/InputBox'
import styles from '../styles/index.module.css'
import Eye from '../components/illustrations/Eye'
import Hand from '../components/illustrations/Hand'
import GiftBox from '../components/illustrations/GiftBox'
import DownloadModal from '../components/modals/DownloadModal'
import PrivateAccountModal from '../components/modals/PrivateAccountModal'
import WomanWithPhone from '../components/illustrations/WomanWithMobile'
import { ErrorBoundary } from '../components/ErrorBoundary'
import ErrorModal, { RequestError } from '../components/modals/ErrorModal'
import { trackEvent } from '../config/analytics'

const Home = () => {
  const [url, setUrl] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [error, setError] = useState<RequestError | null | undefined>()
  const [privateAccountModalOpen, setPrivateAccountModalOpen] = useState(false)
  const [data, setData] = useState<Record<string, any>>({})

  const closeDownloadModal = () => {
    setDownloadModalOpen(false)
  }
  const onSubmit = async (url: string) => {
    setUrl(url)
    setSubmitting(true)
    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL!, { url })

      setData(data)
      if (data.isPrivate) {
        setPrivateAccountModalOpen(true)
        trackEvent({ action: 'privateAccountModalOpen' })
      } else {
        setDownloadModalOpen(true)
        trackEvent({ action: 'downloadModalOpen' })
      }
    } catch (error) {
      setError(error as RequestError)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <ErrorBoundary url={url} data={data}>
      <Layout>
        <section className={styles.aboveTheFold}>
          <aside>
            <h1 className={styles.title}>
              Download <br /> Instagram Content
            </h1>
            <p className={styles.subtitle}>
              Easy access to Posts, Reels and IGTV contents
            </p>
          </aside>
          <figure>
            <WomanWithPhone />
          </figure>
        </section>
        <section className={styles.inputBox}>
          <InputBox loading={submitting} onSubmit={onSubmit} />
        </section>
        <section className={styles.benefits}>
          <header>
            <h2>Benefits</h2>
            <p>We offer these and more!</p>
          </header>

          <div>
            <div>
              <figure>
                <GiftBox />
              </figure>
              <h3>Free</h3>
              <p>Downloads all your contents free of charge</p>
            </div>
            <div>
              <figure>
                <Eye />
              </figure>
              <h3>All content</h3>
              <p>Download images, videos, Reels and IGTV videos</p>
            </div>
            <div>
              <figure>
                <Hand />
              </figure>
              <h3>Easy</h3>
              <p>Dowloading content is as easy as copy and paste</p>
            </div>
          </div>
        </section>
        <section className={styles.howItWorks}>
          <div>
            <div>
              <h2>How it works</h2>

              <ol>
                <li>
                  <span>
                    Copy the link of any post, video, reel, IGTV video from instagram
                  </span>
                </li>
                <li>
                  <span>Paste link in the input field above and press enter</span>
                </li>
                <li>
                  <span>Preview video or image and then download</span>
                </li>
              </ol>
            </div>
            <figure></figure>
          </div>
        </section>
        {data.posts && (
          <DownloadModal
            open={downloadModalOpen}
            onClose={closeDownloadModal}
            username={data.username}
            profileUrl={data.profilePicUrl}
            posts={data.posts}
          />
        )}
        <PrivateAccountModal
          open={privateAccountModalOpen}
          onClose={() => setPrivateAccountModalOpen(false)}
          username={data.username}
          profileUrl={data.profilePicUrl}
        />
        {error && (
          <ErrorModal
            open={Boolean(error)}
            onClose={() => setError(null)}
            error={error}
          />
        )}
      </Layout>
    </ErrorBoundary>
  )
}

export default Home
