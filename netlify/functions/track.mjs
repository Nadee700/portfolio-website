import { getStore } from '@netlify/blobs'
import { emptyLog, recordVisit, visitFromRequest } from '../lib/viewLog.mjs'

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  })
}

function clientIp(request, context) {
  if (context?.ip) return context.ip
  const forwarded = request.headers.get('x-nf-client-connection-ip')
    || request.headers.get('x-forwarded-for')
    || ''
  return forwarded.split(',')[0].trim()
}

async function readLog() {
  const store = getStore('view-log')
  return (await store.get('log', { type: 'json' })) ?? emptyLog()
}

export default async (request, context) => {
  try {
    if (request.method === 'GET') {
      const log = await readLog()
      return json({ count: log.total ?? 0 })
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405)
    }

    const visit = visitFromRequest({
      ip: clientIp(request, context),
      geo: context?.geo,
    })
    const store = getStore('view-log')
    const next = recordVisit(await readLog(), visit)
    await store.setJSON('log', next)
    return json({ count: next.total })
  } catch {
    return json({ error: 'View log unavailable' }, 500)
  }
}
