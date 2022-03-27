import type { NextPage } from 'next'
import Head from 'next/head'

import {JumboBlock} from '~/components'

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
        <JumboBlock />
      </main>
    </div>
  )
}

export default Create
