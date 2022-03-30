import {NextApiRequest, NextApiResponse} from 'next'

import {BlockService} from '~/services'

export default async function handler({method, body, query: {id}} : NextApiRequest, res : NextApiResponse) {
  switch(method) {
    case 'GET': {
      const block = await BlockService.get(id as string)

      res.status(block ? 200 : 500).json(block)
      break
    }
    case 'PUT': {
      const block = await BlockService.edit({...body, id})

      res.status(block ? 200 : 500).json(block)
      break
    }
    case 'DELETE': {
      const deleted = await BlockService.remove(id as string, body)

      res.status(deleted ? 200 : 500).json(deleted)
      break
    }
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}
