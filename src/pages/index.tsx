import Logo from '../components/Logo'
import styles from '../styles/index.module.css'
import Eye from '../components/illustrations/Eye'
import Hand from '../components/illustrations/Hand'
import GiftBox from '../components/illustrations/GiftBox'
import WomanWithPhone from '../components/illustrations/WomanWithMobile'

const Home = () => {
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
          <section>{/* input search bar */}</section>
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
          ©2021. Built with{' '}
          <span role="img" aria-label="Red Heart">
            ❤️
          </span>{' '}
          and{' '}
          <span role="img" aria-label="Coffee">
            ☕
          </span>{' '}
          by{' '}
          <b>
            <a href="" rel="noreferrer" target="_blank">
              @snamoah
            </a>
          </b>
        </p>
      </footer>
    </>
  )
}

export default Home
