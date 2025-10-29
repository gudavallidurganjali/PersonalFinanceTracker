const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

const outDir = path.resolve(__dirname, '..', 'designs', 'screenshots')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const pages = ['/', '/budgets', '/goals']
const base = process.env.BASE_URL || 'http://localhost:5173'

async function waitForServer(url, timeout = 15000) {
  const start = Date.now()
  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url)
      if (res && res.status === 200) return true
    } catch (e) {
      // ignore
    }
    await new Promise(r => setTimeout(r, 500))
  }
  return false
}

;(async () => {
  const ok = await waitForServer(base)
  if (!ok) {
    console.error('Dev server not reachable at', base)
    process.exit(1)
  }

  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 800 })

  for (const p of pages) {
    const url = base.replace(/\/$/, '') + p
    console.log('Loading', url)
    await page.goto(url, { waitUntil: 'networkidle' })
    const file = path.join(outDir, (p === '/' ? 'overview' : p.replace(/^\//, '')) + '.png')
    await page.screenshot({ path: file, fullPage: true })
    console.log('Wrote', file)
  }

  await browser.close()
})().catch(err => {
  console.error(err)
  process.exit(1)
})
