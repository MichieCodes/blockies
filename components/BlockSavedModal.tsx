import React from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'

import {SIZES} from '~/constants'

import {Modal, ModalButtonProps} from './Modal'
import {Input} from './Input'

export interface BlockSavedModalProps {
  id: string,
  password: string,
  close: () => void
}

export function BlockSavedModal({id, password, close} : BlockSavedModalProps) {
  const path = `/blocks/${id}`
  const router = useRouter()

  const modalButton = React.useMemo<ModalButtonProps[]>(() => [
    {
      title: 'View Block',
      action: (cb) => {
        cb()
        setTimeout(() => router.push(path), 300)
      }
    }
  ], [path, router])

  return (
    <Modal title="Block Saved" buttons={modalButton} close={close}>
      <StyledForm>
        <Input
          id="block-link"
          label="Your Block's Link"
          value={`${window.location.origin}${path}`}
          readOnly />
        <Input
          id="block-password"
          value={password}
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
