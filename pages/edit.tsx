import React from 'react'
import type {NextPage} from 'next'
import Head from 'next/head'

import {
  ACCESS_OPTIONS,
  MODE_OPTIONS,
  SYNTAX_OPTIONS
} from '~/constants'
import {useLeaveWarning} from '~/hooks'

import {
  BlockEditModal,
  BlockSavedModal,
  Dropdown,
  Input,
  JumboBlock,
} from '~/components'
import {StyledButton, StyledFormGroup, StyledMain} from './index'

const LEAVE_WARNING_TEXT = 
  'You have not saved your Block updates. Are you sure you want to leave?'

const Edit: NextPage = () => {
  const [showSavedModal, setShowSaveModel] = React.useState(false)
  const [showEditModal, setShowEditModel] = React.useState(true)

  useLeaveWarning(LEAVE_WARNING_TEXT)

  const closeEditModal = React.useCallback(() => {
    setShowEditModel(false)
  }, [])
  const closeSavedModal = React.useCallback(() => {
    setShowSaveModel(false)
  }, [])

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
        <JumboBlock />
        <StyledFormGroup>
          <Input id="title" label="Title"/>
          <Dropdown id="mode" label="Mode" options={MODE_OPTIONS} />
          <Dropdown id="syntax" label="Syntax" options={SYNTAX_OPTIONS} />
          <Dropdown id="access" label="Access" options={ACCESS_OPTIONS} />
        </StyledFormGroup>
        <StyledButton onClick={() => setShowSaveModel(true)}>
          Update
        </StyledButton>
      </StyledMain>

      {showEditModal && <BlockEditModal close={closeEditModal} />}
      {showSavedModal && <BlockSavedModal close={closeSavedModal} />}
    </div>
  )
}

export default Edit
