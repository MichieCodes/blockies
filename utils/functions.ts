import {IncomingMessage} from 'http'

export function getBaseUrl(req : IncomingMessage) {
  const protocol = req?.headers['x-forwarded-proto'] || 'http'
  return req ? `${protocol}://${req.headers.host}` : ''
}

export async function fetchApi<T>(url : string, method: string, data ?: T) {
  return fetch(
    url,
    {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data ? data : null)
    }
  ).then((data) => data.json()).catch(() => null)
}
