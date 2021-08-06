import { ReactNode } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import styles from '../styles/Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
    <footer className={styles.footer}>
      {/* <ul>
        <li>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </li>
      </ul> */}
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
  </>
)

export default Layout
