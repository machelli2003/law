# Jah Bless Law Firm — Website Demo

A React + Vite + Tailwind CSS demo website for a Ghanaian law firm.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

- `src/pages` — one file per route (Home, About, Practice Areas, Lawyers, Insights, Contact, Privacy, Disclaimer)
- `src/components` — reusable UI building blocks (Navbar, Footer, cards, forms, etc.)
- `src/data` — demo content (practice areas, lawyer profiles, articles). Replace with real firm content or wire up to a CMS/backend later.
- `src/layouts/Layout.jsx` — shared page shell (Navbar + Footer + scroll-to-top)

## Before launching for real

- Replace all `+233 XX XXX XXXX`, `info@jahblesslaw.com`, and lawyer profiles with the firm's real information and photography.
- Swap the map placeholder on the Contact page for a real map embed.
- Have the Privacy Policy and Legal Disclaimer pages reviewed by qualified counsel — current copy is placeholder.
- Wire the consultation form up to a real email/CRM endpoint (it currently validates and shows a success state client-side only).
