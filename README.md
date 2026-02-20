# Temu Affiliate Demo Website

A minimal Next.js site that lists products and redirects clicks to Temu via an affiliate URL when provided.

## Run locally

Open PowerShell and run:

```powershell
cd "C:\Users\user\Documents\prductivity app\website"
npm install
npm run dev
```

Site will be available at `http://localhost:3000`.

## How it works

- Products are defined in `public/products.json`.
- Each product needs these fields: `id`, `name`, `price`, `image`, `targetUrl`, `affiliateUrl`.
- When a user clicks "Buy on Temu", the site calls `/api/redirect?id=<id>`.
- The API route looks up the product and redirects (307) to `affiliateUrl` if present, otherwise to `targetUrl`.
- The server logs basic click events to the console. You can extend this to store clicks in a DB or forward to an analytics service.

## Adding affiliate links

When you have Temu affiliate links, populate the `affiliateUrl` field for each product in `public/products.json`.

Example product entry:

```json
{
  "id": "1",
  "name": "Widget A",
  "price": "$19.99",
  "image": "https://...",
  "targetUrl": "https://www.temu.com/whatever",
  "affiliateUrl": "https://temu-affiliate.example/track?aff_id=YOUR_ID&url=https%3A%2F%2Fwww.temu.com%2Fwhatever"
}
```

## Next steps I can help with

- Add server-side analytics (store clicks in a small SQLite DB)
- Add a simple admin UI to add/update products
- Deploy to Vercel or Netlify and set up HTTPS
- Add UTM tagging and A/B testing

Tell me which next step you want and I'll implement it.
