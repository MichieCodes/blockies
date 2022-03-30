import {nanoid} from 'nanoid'
import argon2 from 'argon2'

import {Optional} from '~/utils'
import {IBlock, IBlockListItem} from '~/models'
import {db} from './Connection'

type CreateBlockDTO = Optional<
  IBlock, 'id' | 'created_at' | 'updated_at'
>

async function create(block : CreateBlockDTO) {
  const id = nanoid()
  const password = nanoid()
  
  block.id = id
  block.password = await argon2.hash(password)
  block.comments = []
  block.created_at = new Date().toISOString()
  block.updated_at = new Date().toISOString()

  await db.set(id, block)

  block.password = password

  return block
}

async function get(id : string) {
  const block = await db.get(id) as IBlock

  delete block.password
  return block
}

async function getAll() {
  const blocks : IBlock[] = Object.values(await db.getAll()) || []
  const block_list_items : IBlockListItem[] = 
    blocks
      .filter((block) => block.access === 'public')
      .map(({id, title, syntax, created_at, updated_at, mode, comments}) => ({
        id, title, syntax, created_at, updated_at, mode,
        comment_count: comments?.length || 0
      }))

  return block_list_items
}

async function edit(block : Partial<IBlock> & Pick<IBlock, 'id' | 'password'>) {
  const currentBlock = await db.get(block.id) as IBlock
  
  if(!block || !await argon2.verify(currentBlock.password!, block.password!)) 
    return null

  block = {
    ...currentBlock,
    ...block,
    updated_at: new Date().toISOString()
  }

  await db.set(block.id, block)

  return block
}

async function remove(id : string, password : string) {
  const block = await db.get(id) as IBlock 
  
  if(!block || !await argon2.verify(block.password!, password)) 
    return false

  await db.delete(id)

  return true
}

export default {create, get, getAll, edit, remove}
