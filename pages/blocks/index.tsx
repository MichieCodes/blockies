import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import {SIZES} from '~/constants'
import {IBlockListItem} from '~/models'
import {getBaseUrl} from '~/utils'

import {BlockCard} from '~/components'

const Blocks: NextPage<{blocks: IBlockListItem[]}> = ({blocks}) => {
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
          {blocks.map((block) => 
            <BlockCard key={block.id} block={block} />
          )}
        </StyledSection>
      </StyledMain>
    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async ({req}) => {
  const blocks = await fetch(`${getBaseUrl(req)}/api/blocks`)
    .then((data) => data.json())

  return {
    props: {
      blocks
    }
  }
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
