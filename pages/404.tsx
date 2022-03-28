import type {NextPage} from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import {SIZES} from '~/constants'

const PageNotFound : NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blockies - Page Not Found</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <StyledMain>
        <img src="/images/logo.svg" />
        <div>
          <h1>No Blocks Here</h1>
          <h1>: (</h1>
        </div>
      </StyledMain>
    </div>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3 * ${SIZES.s_xl} - 5rem);

  img {
    max-width: 40rem;
    margin-bottom: ${SIZES.s_sm};
  }

  div > h1 {
    font-size: 7rem;
    text-align: center;
  }
`

export default PageNotFound
