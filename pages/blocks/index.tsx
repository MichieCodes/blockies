import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import {SIZES} from '~/constants'
import {BlockCard} from '~/components'

const Blocks: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blockies - Browse Blocks</title>
        <meta
          name="description"
          content="Blockies - View Latest Text & Code Blocks" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <StyledMain>
        <StyledSection>
          <BlockCard />
          <BlockCard />
          <BlockCard />
          <BlockCard />
          <BlockCard />
          <BlockCard />
          <BlockCard />
          <BlockCard />
        </StyledSection>
      </StyledMain>
    </div>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${SIZES.s_xl} 5rem;
`

export default Blocks
