import {NextApiRequest, NextApiResponse} from 'next'

import {CommentService} from '~/services'
import {CreateCommentDTO} from '~/services/CommentService'

export default async function handler({method, body} : NextApiRequest, res : NextApiResponse) {
  switch(method) {
    case 'POST':
      const comment = await CommentService.create(body as CreateCommentDTO)

      res.status(comment ? 200 : 500).json(comment)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}
