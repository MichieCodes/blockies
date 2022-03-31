import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import {
  ACCESS_OPTIONS,
  MODE_OPTIONS,
  SYNTAX_OPTIONS
} from '~/constants'
import {IBlock} from '~/models'
import {fetchApi} from '~/utils'
import {useLeaveWarning} from '~/hooks'

import {
  BlockEditModal,
  BlockSavedModal,
  BlockSavedModalProps,
  Dropdown,
  Input,
  JumboBlock,
} from '~/components'
import {
  BlockCredentials,
  StyledButton,
  StyledFormGroup,
  StyledMain
} from './index'

const LEAVE_WARNING_TEXT = 
  'You have not saved your Block updates. Are you sure you want to leave?'

const Edit: NextPage = () => {
  const [content, setContent] = React.useState('')
  const [title, setTitle] = React.useState('Untitled Block')
  const [access, setAccess] = React.useState('public')
  const [syntax, setSyntax] = React.useState('plain text')
  const [showEditModal, setShowEditModel] = React.useState(true)
  const [showSavedModal, setShowSaveModel] = React.useState(false)
  const [saveModalState, setSaveModalState] = React.useState<
    BlockCredentials|undefined
  >() 

  useLeaveWarning(LEAVE_WARNING_TEXT)

  const closeEditModal = React.useCallback(() => {
    setShowEditModel(false)
  }, [])
  const closeSavedModal = React.useCallback(() => {
    setShowSaveModel(false)
  }, [])

  const setBlock = React.useCallback(({
    id, content, title, access, syntax, password
  } : IBlock) => {
    console.log(id, content, title, access, syntax, password)
    setContent(content[0])
    setTitle(title)
    setAccess(access)
    setSyntax(syntax)

    setSaveModalState({id, password: password!})
  }, []) 

  const onUpdate = async () => {
    if(!saveModalState) return

    const {id, password} = saveModalState
    const mode = 'normal'

    const block = {
      title,
      content: [content],
      mode,
      syntax,
      access,
      password
    }

    const data : IBlock = await fetchApi(
      `/api/blocks/${id}`,
      'PUT',
      block
    )

    if(!data) {
      alert('[ERROR] Could not update block. Please try again')
      return
    }

    setShowSaveModel(true)
  } 

  return (
    <div>
      <Head>
        <title>Blockies - Edit Block</title>
        <meta
          name="description"
          content="Blockies - Edit your blocks of text and code!" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <StyledMain>
        <JumboBlock
          syntax={syntax}
          content={content}
          onChange={(value) => setContent(value)} />
        <StyledFormGroup>
          <Input
            id="title"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <Dropdown id="mode" label="Mode" options={MODE_OPTIONS} />
          <Dropdown
            id="syntax"
            label="Syntax"
            options={SYNTAX_OPTIONS}
            value={syntax}
            onChange={(e) => setSyntax(e.target.value)} />
          <Dropdown
            id="access"
            label="Access"
            options={ACCESS_OPTIONS} 
            value={access}
            onChange={(e) => setAccess(e.target.value)} />
        </StyledFormGroup> 
        <StyledButton onClick={onUpdate}>
          Update
        </StyledButton>
      </StyledMain>

      {showEditModal && 
        <BlockEditModal
          close={closeEditModal}
          editCB={setBlock} />
      }
      {showSavedModal && saveModalState &&
        <BlockSavedModal {...saveModalState} close={closeSavedModal} />
      }
    </div>
  )
}
 
export default Edit
