import React from 'react'
import styled from 'styled-components'

import {SIZES} from '~/constants'

import {Modal, ModalButtonProps} from './Modal'
import {Input} from './Input'
import {ConfirmDeleteModal} from './ConfirmDeleteModal'

interface BlockEditModalProps {
  close: () => void
}

type ConfirmCallback = (confirm : boolean) => void 

export function BlockEditModal({close} : BlockEditModalProps) {
  const [confirmCB, setConfirmCB] = React.useState<ConfirmCallback>()

  const closeModal = React.useCallback(() => {
    setConfirmCB(undefined)
  }, [])

  const onDelete = React.useCallback((cb : () => void) => {
    setConfirmCB(() => 
      (confirm : boolean) => {
        console.log('CONFIRMED?', confirm)
        setTimeout(cb, 500)
      }
    )
  }, [])              

  const modalButtons = React.useMemo<ModalButtonProps[]>(() => [
    {
      title: 'Delete Block',
      action: (cb) => {
        console.log('deleting')
        onDelete(cb)
      }
    },
    {
      title: 'Edit Block',
      action: (cb) => {
        console.log('editing')
        setTimeout(cb, 2000)
      }
    }
  ], [])

  return (
    <>
      <Modal
        isStatic
        title="Edit Your Block"
        buttons={modalButtons}
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
      {confirmCB && 
        <ConfirmDeleteModal
          close={closeModal}
          cb={confirmCB} />
      }
    </>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.s_md};
`
