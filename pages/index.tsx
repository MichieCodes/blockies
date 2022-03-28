import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import {SIZES} from '~/constants'
import {Button, Input, JumboBlock} from '~/components'

const Create: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blockies - Create Block</title>
        <meta
          name="description"
          content="Blockies - Share your blocks of text and code!" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <StyledMain>
        <JumboBlock />
        <StyledFormGroup>
          <Input id="title" label="Title"/>
          <Input id="mode" label="Mode"/>
          <Input id="syntax" label="Syntax"/>
          <Input id="access" label="Access"/>
        </StyledFormGroup>
        <StyledButton />
      </StyledMain>
    </div>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3 * ${SIZES.s_xl} - 5rem);
`

const StyledFormGroup = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: ${SIZES.s_md} ${SIZES.s_xl};
  width: 100%;
  margin: ${SIZES.s_xl} 0;
`

const StyledButton = styled(Button)`
  width: 100%;
`

export default Create
