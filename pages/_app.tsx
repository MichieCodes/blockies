import type {AppProps} from 'next/app'

import {MainLayout} from '~/components'

import {GlobalStyle} from '~/styles/global.styles'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <GlobalStyle />
    </MainLayout>
  )
}

export default MyApp
