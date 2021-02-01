import Head from 'next/head'
import Main from '../src/compnents/main'

export default function Home() {
  return (
    <>
      <Head>
        <title>CITY WHEATHER</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
        />
      </Head>
      <Main></Main>
    </>
  )
}
