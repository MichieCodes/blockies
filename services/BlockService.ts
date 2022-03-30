import nanoid from 'nanoid'
import argon2 from 'argon2'

import {IBlock} from '~/models'
import { db } from './Connection'

type CreateBlockDTO = Optional<
  IBlock, 'id' | 'created_at' | 'updated_at'
>

async function create(block : CreateBlockDTO) {
  const id = nanoid()
  const password = nanoid()
  
  block.id = id
  block.password = await argon2.hash(password)
  block.created_at = new Date().toISOString()
  block.updated_at = new Date().toISOString()

  await db.set(id, block)

  return block
}

async function get(id : string) {
  const block : IBlock = await db.get(id)
  return block
}

//todo: transform
async function getAll() {
  const blocks : IBlock[] = Object.values(await db.getAll()) || []
  return blocks.filter((block) => block.access === 'public')
}

async function edit(block : Partial<IBlock> & Pick<IBlock, 'id'>) {
  const currentBlock : IBlock = await db.get(block.id)
  
  if(!block || !await argon2.verify(block.password, password)) 
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
  const block : IBlock = await db.get(id)
  
  if(!block || !await argon2.verify(block.password, password)) 
    return false

  await db.delete(id)

  return true
}

export default {create, get, getAll, edit, remove}
