import { getStore } from '@netlify/blobs'
import { emptyLog, keysMatch, renderStatsPage } from '../lib/viewLog.mjs'

function expectedKey() {
  if (typeof Netlify !== 'undefined' && Netlify.env) {
    return Netlify.env.get('STATS_KEY') || ''
  }
  return process.env.STATS_KEY || ''
}

export default async (request) => {
  const provided = new URL(request.url).searchParams.get('key') || ''
  if (!keysMatch(provided, expectedKey())) {
    return new Response('Not found', {
      status: 404,
      headers: { 'cache-control': 'no-store' },
    })
  }

  try {
    const store = getStore('view-log')
    const log = (await store.get('log', { type: 'json' })) ?? emptyLog()
    return new Response(renderStatsPage(log), {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
        'x-robots-tag': 'noindex, nofollow',
        'referrer-policy': 'no-referrer',
      },
    })
  } catch {
    return new Response('View log unavailable', { status: 500 })
  }
}
