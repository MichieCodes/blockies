import {NextApiRequest, NextApiResponse} from 'next'

import {BlockService} from '~/services'

export default async function handler({method, body} : NextApiRequest, res : NextApiResponse) {
  switch(method) {
    case 'POST':
      const block = await BlockService.create(body)

      res.status(block ? 200 : 500).json(block)
      break
    case 'GET':
      const blocks = await BlockService.getAll()

      res.status(blocks ? 200 : 500).json(blocks)
      break
    default:
      res.setHeader('Allow', ['POST', 'GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}
