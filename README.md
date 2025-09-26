
# Asplenz Landing — Bilingual (FR/EN)

- Routes: `/fr` and `/en` (root `/` redirects to `/fr`)
- Navbar with language switcher
- Tailwind styling
- Contact form via `/api/contact` using Resend (optional)

## Run locally
```bash
npm i
npm run dev
# http://localhost:3000/fr  (or /en)
```

## Env (optional for email)
- RESEND_API_KEY=...
- CONTACT_TO_EMAIL=founders@asplenz.com
- RESEND_FROM="Asplenz <onboarding@resend.dev>"
