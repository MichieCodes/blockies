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
import {IBlock} from '~/models'
import {fetchApi} from '~/utils'
import {useLeaveWarning} from '~/hooks'

import {
  BlockSavedModal,
  BlockSavedModalProps,
  Button,
  Dropdown,
  Input,
  JumboBlock,
} from '~/components'

export type BlockCredentials = Omit<BlockSavedModalProps, 'close'>

const LEAVE_WARNING_TEXT = 
  'You have not saved your new Block. Are you sure you want to leave?'

const Create: NextPage = () => {
  const [content, setContent] = React.useState('')
  const [title, setTitle] = React.useState('Untitled Block')
  const [access, setAccess] = React.useState('public')
  const [syntax, setSyntax] = React.useState('plain text')
  const [saveModalState, setSaveModalState] = React.useState<
    BlockCredentials|undefined
  >()
  
  useLeaveWarning(LEAVE_WARNING_TEXT, !saveModalState)

  const onSave = async () => {
    const mode = 'normal'

    const block = {
      title,
      content: [content],
      mode,
      syntax,
      access
    }

    const data : IBlock = await fetchApi(
      '/api/blocks',
      'POST',
      block
    )

    if(!data) {
      alert('[ERROR] Could not save block. Please try again')
      return
    }

    setSaveModalState({id: data.id, password: data.password!})
  }      

  const closeModal = React.useCallback(() => {
    setSaveModalState(undefined)
  }, [])

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
        <JumboBlock
          syntax={syntax}
          onChange={(value) => setContent(value)} />
        <StyledFormGroup>
          <Input
            id="title"
            label="Title"
            defaultValue="Untitled Block"
            onChange={(e) => setTitle(e.target.value)} />
          <Dropdown id="mode" label="Mode" options={MODE_OPTIONS} />
          <Dropdown
            id="syntax"
            label="Syntax"
            options={SYNTAX_OPTIONS}
            onChange={(e) => setSyntax(e.target.value)} />
          <Dropdown
            id="access"
            label="Access"
            options={ACCESS_OPTIONS} 
            onChange={(e) => setAccess(e.target.value)} />
        </StyledFormGroup>
        <StyledButton onClick={onSave}>
          Save
        </StyledButton>
      </StyledMain>

      {saveModalState && 
        <BlockSavedModal {...saveModalState} close={closeModal} />
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
