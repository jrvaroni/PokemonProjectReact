import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Pokemon</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
              {children}
        </main>
    </div>
  )
}

export default Layout