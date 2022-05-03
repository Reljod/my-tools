import IntroCard from '@Home/IntroCard'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className='container p-3 vh-100'>
      <Head>
        <title>My Tools</title>
        <meta name="description" content="Compilation of my personal tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='row h-100 align-content-center justify-content-center'>
        <div className='col-12'>
          <IntroCard/>
        </div>
      </div>
      
    </div>
  )
}
