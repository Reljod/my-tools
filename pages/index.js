import IntroCard from '@Home/IntroCard'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Tools</title>
        <meta name="description" content="Compilation of my personal tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroCard/>
    </div>
  )
}
