import Logo from '../components/Logo'
import styles from '../styles/index.module.css'
import WomanWithPhone from '../components/illustrations/WomanWithMobile'

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
      </header>
      <main>
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
        <section>{/* benefits section */}</section>
        <section>{/* how it works */}</section>
        <footer></footer>
      </main>
    </div>
  )
}

export default Home
