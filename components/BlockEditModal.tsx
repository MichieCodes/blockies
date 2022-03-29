import React from 'react'
import styled from 'styled-components'

import {SIZES} from '~/constants'

import {Modal, ModalButtonProps} from './Modal'
import {Input} from './Input'

interface BlockEditModalProps {
  close: () => void
}

const MODAL_BUTTONS : ModalButtonProps[] = [
  {
    title: 'Delete Block',
    action: (cb) => {
      console.log('deleting')
      setTimeout(cb, 2000)
    }
  },
  {
    title: 'Edit Block',
    action: (cb) => {
      console.log('editing')
      setTimeout(cb, 2000)
    }
  }
]

export function BlockEditModal({close} : BlockEditModalProps) {
  return (
    <Modal
      isStatic
      title="Edit Your Block"
      buttons={MODAL_BUTTONS}
      close={close}>
      <StyledForm>
        <Input
          id="block-link"
          type="url"
          label="Block Link" />
        <Input
          id="block-password"
          type="password"
          label="Block Password" />
      </StyledForm>
    </Modal>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.s_md};
`
