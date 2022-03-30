import {IncomingMessage} from 'http'

export function getBaseUrl(req : IncomingMessage) {
  const protocol = req?.headers['x-forwarded-proto'] || 'http'
  return req ? `${protocol}://${req.headers.host}` : ''
}
