import React from 'react'
import styled from 'styled-components'

import {SIZES} from '~/constants'

import {Modal, ModalButtonProps} from './Modal'
import {Input} from './Input'

interface BlockSavedModalProps {
  close: () => void
}

const MODAL_BUTTONS : ModalButtonProps[] = [
  {
    title: 'View Block',
    action: (cb) => {
      console.log('navigating')
      setTimeout(cb, 2000)
    }
  }
]

export function BlockSavedModal({close} : BlockSavedModalProps) {
  return (
    <Modal title="Block Saved" buttons={MODAL_BUTTONS} close={close}>
      <StyledForm>
        <Input
          id="block-link"
          label="Your Block's Link"
          readOnly />
        <Input
          id="block-password"
          label="Your Block's Password"
          readOnly />
      </StyledForm>
    </Modal>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.s_md};
`
