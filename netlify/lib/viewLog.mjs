import { timingSafeEqual } from 'node:crypto'

const MAX_VISITS = 300

export function emptyLog() {
  return { total: 0, visits: [] }
}

export function keysMatch(provided, expected) {
  if (!expected || !provided) return false
  const left = Buffer.from(String(provided))
  const right = Buffer.from(String(expected))
  if (left.length !== right.length) return false
  return timingSafeEqual(left, right)
}

function normalizeIp(ip) {
  if (!ip) return 'Unknown'
  return ip.startsWith('::ffff:') ? ip.slice(7) : ip
}

function isLocalIp(ip) {
  return ip === '127.0.0.1' || ip === '::1' || ip === 'localhost'
}

function placeName(geo) {
  if (!geo) return ''
  const country = typeof geo.country === 'string'
    ? geo.country
    : geo.country?.name || geo.country?.code || ''
  const region = typeof geo.subdivision === 'string'
    ? geo.subdivision
    : geo.subdivision?.name || ''
  const city = geo.city || ''
  return [city, region, country].filter(Boolean).join(', ')
}

export function visitFromRequest({ ip, geo }) {
  const address = normalizeIp(ip)
  const location = isLocalIp(address) ? 'Local preview' : (placeName(geo) || 'Unknown')
  return {
    at: new Date().toISOString(),
    ip: address,
    location,
  }
}

export function recordVisit(log, visit) {
  const current = log?.total >= 0 ? log : emptyLog()
  return {
    total: current.total + 1,
    visits: [visit, ...(current.visits || [])].slice(0, MAX_VISITS),
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function formatWhen(iso) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return 'Unknown'
  return date.toLocaleString('en-GB', {
    timeZone: 'Asia/Colombo',
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export function renderStatsPage(log) {
  const visits = Array.isArray(log?.visits) ? log.visits : []
  const total = Number.isFinite(log?.total) ? log.total : visits.length
  const unique = new Set(visits.map((visit) => visit.ip).filter(Boolean)).size
  const rows = visits.length
    ? visits.map((visit) => `
        <tr>
          <td>${escapeHtml(formatWhen(visit.at))}</td>
          <td>${escapeHtml(visit.ip || 'Unknown')}</td>
          <td>${escapeHtml(visit.location || 'Unknown')}</td>
        </tr>`).join('')
    : `<tr><td colspan="3">No visits recorded yet.</td></tr>`

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>View stats</title>
  <style>
    :root { color-scheme: light; }
    body { margin: 0; font-family: Outfit, ui-sans-serif, system-ui, sans-serif; background: #fff5f8; color: #2c1420; }
    main { max-width: 880px; margin: 0 auto; padding: 32px 20px 64px; }
    h1 { font-family: Fraunces, ui-serif, Georgia, serif; font-weight: 500; font-size: 2.4rem; margin: 0 0 8px; }
    p { color: #5a3e4a; line-height: 1.5; }
    .stats { display: flex; gap: 12px; flex-wrap: wrap; margin: 24px 0; }
    .stat { background: rgba(255,255,255,0.72); border: 1px solid rgba(195,58,132,0.18); border-radius: 16px; padding: 16px 18px; min-width: 140px; }
    .stat b { display: block; font-size: 1.6rem; }
    .stat span { color: #7d6570; font-size: 0.85rem; }
    .wrap { overflow-x: auto; border-radius: 16px; background: white; border: 1px solid rgba(195,58,132,0.16); }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: 12px 14px; border-bottom: 1px solid #f3d7e4; white-space: nowrap; }
    th { font-size: 0.78rem; letter-spacing: 0.04em; text-transform: uppercase; color: #7d6570; }
  </style>
</head>
<body>
  <main>
    <h1>View stats</h1>
    <p>Private log for this site. The portfolio shows the total only. Location is the city or region from the connection, not a precise map pin.</p>
    <div class="stats">
      <div class="stat"><b>${escapeHtml(total.toLocaleString('en-GB'))}</b><span>Total views</span></div>
      <div class="stat"><b>${escapeHtml(unique.toLocaleString('en-GB'))}</b><span>Addresses in this log</span></div>
    </div>
    <div class="wrap">
      <table>
        <thead><tr><th>When (Sri Lanka)</th><th>IP address</th><th>Location</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </main>
</body>
</html>`
}
