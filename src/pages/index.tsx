import { useState } from 'react'
import Logo from '../components/Logo'
import InputBox from '../components/InputBox'
import styles from '../styles/index.module.css'
import Eye from '../components/illustrations/Eye'
import Hand from '../components/illustrations/Hand'
import GiftBox from '../components/illustrations/GiftBox'
import DownloadModal from '../components/modals/DownloadModal'
import PrivateAccountModal from '../components/modals/PrivateAccountModal'
import WomanWithPhone from '../components/illustrations/WomanWithMobile'

const Home = () => {
  const [submitting, setSubmitting] = useState(false)
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [privateAccountModalOpen, setPrivateAccountModalOpen] = useState(false)
  const [data, setData] = useState<Record<string, any>>({})

  const closeDownloadModal = () => {
    setDownloadModalOpen(false)
  }
  const onSubmit = async (url: string) => {
    console.log('===> url submitted', url)
    setSubmitting(true)
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
        method: 'POST',
        body: JSON.stringify({ url }),
      })
      const { data, error } = await response.json()

      console.log('===> data', data)

      if (error) {
        throw new Error(error)
      }

      setData(data)
      if (data.is_private) {
        setPrivateAccountModalOpen(true)
      } else {
        setDownloadModalOpen(true)
      }
    } catch (error) {
      console.log('===>', error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo />
        </header>
        <main className={styles.main}>
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
        </main>
      </div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          Built with{' '}
          <span role="img" aria-label="Red Heart">
            ❤️
          </span>{' '}
          and{' '}
          <span role="img" aria-label="Coffee">
            ☕
          </span>{' '}
          by{' '}
          <b>
            <a href="https://snamoah.dev" rel="noreferrer" target="_blank">
              @snamoah
            </a>
          </b>
        </p>
      </footer>
      <DownloadModal
        open={downloadModalOpen}
        onClose={closeDownloadModal}
        username={data.username}
        profileUrl={data.profile_pic_url}
        posts={data.posts}
      />
      <PrivateAccountModal
        open={privateAccountModalOpen}
        onClose={() => setPrivateAccountModalOpen(false)}
        username={data.username}
        profileUrl={data.profile_pic_url}
      />
    </>
  )
}

export default Home
