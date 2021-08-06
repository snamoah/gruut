import Layout from '../components/Layout'
import styles from '../styles/faq.module.css'

const FAQPage = () => (
  <Layout>
    <h1 className={styles.title}>FAQs</h1>

    <section className={styles.section} id="stories-highlights-not-supported">
      <header>Why are Stories and Highlights not supported?</header>
      Instagram stories and profile highlights require user login to access. Gruut is only
      to access Reels, IGTV videos and posts because there are do not require login
      access. Some time in the future if Instagram opens this up, we will provide support
      for this.
    </section>

    <section className={styles.section} id="private-posts">
      <header>Unable to download posts?</header>
      Gruut will be unable to download content from users whose accounts are private.
      Instagram only shows posts of private accounts to their followers.
    </section>
  </Layout>
)

export default FAQPage
