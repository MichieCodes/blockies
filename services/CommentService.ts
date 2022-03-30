import {nanoid} from 'nanoid'

import {Optional} from '~/utils'
import {IComment, IBlock} from '~/models'
import {db} from './Connection'

type CreateCommentDTO = Optional<IComment, 'id' | 'created_at'>

async function create(comment : CreateCommentDTO) {
  const block = await db.get(comment.block_id) as IBlock
  const comments : IComment[] = block?.comments || []

  if(!block) return null

  comment.id = nanoid()
  comment.created_at = new Date().toISOString()
  
  comments.push(comment as IComment)
  block.comments = comments
  
  db.set(comment.block_id, block)

  return comment
}

export default {create}