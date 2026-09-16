# Hand & Hibiscus

A one-page ordering site for a handmade drinks brand. No backend — every
product, price and the WhatsApp number are hardcoded in the source, and
"ordering" opens a pre-filled WhatsApp chat.

Built with **Vite + React + Tailwind CSS**.

## Getting started

Requires [Node.js](https://nodejs.org) 18 or later.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## What to edit

| To change...                          | Edit...                              |
| -------------------------------------- | ------------------------------------- |
| Products, prices, testimonials, FAQs   | `src/data/products.js`                |
| The WhatsApp number or message wording | `src/lib/whatsapp.js`                 |
| Any section's text or layout           | the matching file in `src/components/`|
| Colors, fonts, spacing tokens          | `src/index.css` (`:root` variables) and `tailwind.config.js` |
| Product photos                         | drop files into `public/` — see `public/README.md` |

The WhatsApp number is currently `0530487116` (stored internationally as
`233530487116` in `src/lib/whatsapp.js`).

## Building for production

```bash
npm run build
```

This outputs a static site to `dist/`, ready to deploy anywhere that serves
static files (Netlify, Vercel, GitHub Pages, cPanel, etc.) — just upload the
contents of `dist/`.

To preview the production build locally before deploying:

```bash
npm run preview
```
