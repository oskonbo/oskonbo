import path from 'path'
import fs from 'fs'

export default function handler(req, res) {
  const { id } = req.query
  const file = path.join(process.cwd(), 'public', 'products.json')
  let products = []
  try {
    products = JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch (e) {
    console.error('Failed reading products.json', e)
  }

  const product = products.find((p) => String(p.id) === String(id))
  const destination = product ? (product.affiliateUrl && product.affiliateUrl.length > 0 ? product.affiliateUrl : product.targetUrl) : '/' 

  // Basic server-side click logging — replace or extend with analytics or DB as needed
  console.log('Affiliate redirect:', { id, destination, time: new Date().toISOString(), ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress })

  res.writeHead(307, { Location: destination })
  res.end()
}
