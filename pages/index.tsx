import type { NextPage } from 'next'
import Head from 'next/head'

const Create: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blockies</title>
        <meta
          name="description"
          content="Blockies - Share your blocks of text and code!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Hello World!
        </h1>
      </main>
    </div>
  )
}

export default Create
