import React from 'react'
import styled from 'styled-components'

import {Modal, ModalButtonProps} from './Modal'

interface ConfirmDeleteModalProps {
  cb: (confirm : boolean) => void
  close: () => void
}

export function ConfirmDeleteModal({close, cb} : ConfirmDeleteModalProps) {
  const modalButton = React.useMemo<ModalButtonProps[]>(() => [
    {
      title: 'Delete Block',
      action: (closeCB) => {
        cb(true)
        closeCB()
      }
    }
  ], [])

  return (
    <Modal
      title="Confirm Deletion"
      size="sm"
      buttons={modalButton}
      close={close}>
      <StyledText>
        Are you sure you want to delete
        <span> TS - Add Types to adder function</span>?
      </StyledText>
    </Modal>
  )
}

const StyledText = styled.p`
  font-size: 3.15rem;
  
  span {
    font-weight: 700;
  }
`
