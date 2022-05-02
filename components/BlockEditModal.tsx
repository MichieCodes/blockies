import React from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'

import {SIZES} from '~/constants'
import {IBlock} from '~/models'
import {fetchApi} from '~/utils'

import {Modal, ModalButtonProps} from './Modal'
import {Input} from './Input'
import {ConfirmDeleteModal} from './ConfirmDeleteModal'

interface BlockEditModalProps {
  editCB: (block : IBlock) => void,
  close: () => void
}

type ConfirmCallback = (confirm : boolean) => void 

const _getId = (link : string) => link.split('/blocks/')[1] 

export function BlockEditModal({close, editCB} : BlockEditModalProps) {
  const [link, setLink] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmCB, setConfirmCB] = React.useState<ConfirmCallback>()
  const router = useRouter()

  const closeModal = React.useCallback(() => {
    setConfirmCB(undefined)
  }, [])

  const onDelete = React.useCallback((cb : () => void) => {
    setConfirmCB(() => async (confirm : boolean) => {
      if(!confirm) return

      console.log(link, password)

      const data : IBlock = await fetchApi(
        `/api/blocks/${_getId(link)}`,
        'DELETE',
        password
      ) 

      if(!data) {
        alert('[ERROR] Incorrect credentials')
        return
      } 

      cb()
      router.push('/')
    })
  }, [router.push, link, password])              

  const onEdit = React.useCallback(async (cb : () => void) => {
    console.log(link, password)

    const block = {
      password
    }

    const data : IBlock = await fetchApi(
      `/api/blocks/${_getId(link)}`,
      'PUT',
      block
    ) 

    if(!data) {
      alert('[ERROR] Incorrect credentials')
      return
    } 

    data.password = block.password

    editCB(data)
    cb()
  }, [link, password]) 

  const modalButtons = React.useMemo<ModalButtonProps[]>(() => [
    {
      title: 'Delete Block',
      action: onDelete
    },
    {
      title: 'Edit Block',
      action: onEdit
    }
  ], [onDelete, onEdit])

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
            label="Block Link"
            onChange={(e) => setLink(e.target.value)} />
          <Input
            id="block-password"
            type="password"
            label="Block Password"
            onChange={(e) => setPassword(e.target.value)} />
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
