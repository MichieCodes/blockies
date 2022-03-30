import nanoid from 'nanoid'

import {IComment, IBlock} from '~/models'
import { db } from './Connection'

type CreateCommentDTO = Optional<IComment, 'id' | 'created_at'>

async function create(comment : CreateCommentDTO) {
  const block : IBlock = await db.get(comment.block_id)
  const comments : IComment[] = block?.comments || []

  if(!block) return null

  comment.id = nanoid()
  comment.created_at = new Date().toISOString()
  
  comments.push(comment)
  block.comments = comments
  
  await db.set(comment.block_id, block)

  return comment
}

export default {create}