import React from 'react'
import type {NextPage} from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import {
  ACCESS_OPTIONS,
  MODE_OPTIONS,
  SIZES,
  SYNTAX_OPTIONS
} from '~/constants'
import {useLeaveWarning} from '~/hooks'

import {
  BlockSavedModal,
  Button,
  Dropdown,
  Input,
  JumboBlock,
} from '~/components'

const LEAVE_WARNING_TEXT = 
  'You have not saved your new Block. Are you sure you want to leave?'

const Create: NextPage = () => {
  const [syntax, setSyntax] = React.useState('plain text')
  const [showSavedModal, setShowSaveModel] = React.useState(false)

  const closeModal = React.useCallback(() => {
    setShowSaveModel(false)
  }, [])

  useLeaveWarning(LEAVE_WARNING_TEXT)

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
        <JumboBlock syntax={syntax} />
        <StyledFormGroup>
          <Input id="title" label="Title"/>
          <Dropdown id="mode" label="Mode" options={MODE_OPTIONS} />
          <Dropdown
            id="syntax"
            label="Syntax"
            options={SYNTAX_OPTIONS}
            onChange={(e) => setSyntax(e.target.value)} />
          <Dropdown id="access" label="Access" options={ACCESS_OPTIONS} />
        </StyledFormGroup>
        <StyledButton onClick={() => setShowSaveModel(true)}>
          Save
        </StyledButton>
      </StyledMain>

      {showSavedModal
        ? <BlockSavedModal close={closeModal} />
        : null
      }
    </div>
  )
}

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3 * ${SIZES.s_xl} - 5rem);
`

export const StyledFormGroup = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: ${SIZES.s_md} ${SIZES.s_xl};
  width: 100%;
  margin: ${SIZES.s_xl} 0;
`

export const StyledButton = styled(Button)`
  width: 100%;
`

export default Create
