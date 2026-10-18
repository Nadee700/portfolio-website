import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { emptyLog, keysMatch, recordVisit, renderStatsPage, visitFromRequest } from './netlify/lib/viewLog.mjs'

function viewTrackerPlugin(statsKey) {
  const file = path.resolve('data/views.json')

  const readLog = () => {
    try {
      return JSON.parse(fs.readFileSync(file, 'utf8'))
    } catch {
      return emptyLog()
    }
  }

  const writeLog = (log) => {
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, JSON.stringify(log))
  }

  const send = (res, status, body, type) => {
    res.statusCode = status
    res.setHeader('content-type', type)
    res.setHeader('cache-control', 'no-store')
    res.end(body)
  }

  return {
    name: 'view-tracker',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url || '/', 'http://localhost')

        if (url.pathname === '/api/track') {
          if (req.method === 'GET') {
            send(res, 200, JSON.stringify({ count: readLog().total ?? 0 }), 'application/json; charset=utf-8')
            return
          }
          if (req.method !== 'POST') {
            send(res, 405, JSON.stringify({ error: 'Method not allowed' }), 'application/json; charset=utf-8')
            return
          }
          const visit = visitFromRequest({ ip: req.socket.remoteAddress, geo: null })
          const nextLog = recordVisit(readLog(), visit)
          writeLog(nextLog)
          send(res, 200, JSON.stringify({ count: nextLog.total }), 'application/json; charset=utf-8')
          return
        }

        if (url.pathname === '/api/stats') {
          if (!keysMatch(url.searchParams.get('key') || '', statsKey)) {
            send(res, 404, 'Not found', 'text/plain; charset=utf-8')
            return
          }
          res.setHeader('x-robots-tag', 'noindex, nofollow')
          res.setHeader('referrer-policy', 'no-referrer')
          send(res, 200, renderStatsPage(readLog()), 'text/html; charset=utf-8')
          return
        }

        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss(), viewTrackerPlugin(env.STATS_KEY || '')],
    assetsInclude: ['**/*.pdf'],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
  }
})
