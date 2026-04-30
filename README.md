# Alluring Scents (React + Vite)

Modernized version of the Alluring Scents website, migrated from plain HTML/CSS/JS to React with Vite while preserving the original content, section order, and visual hierarchy.

## Run Locally

```bash
npm install
npm run dev
```

Then open the URL shown by Vite (usually `http://localhost:5173`).

## Project Structure

```text
src/
  components/
    home/
    layout/
    order/
    products/
    shared/
  data/
  hooks/
  pages/
  styles/
    appShell.module.css
    legacy.css
  App.jsx
  main.jsx
public/
  Assets/
```

## Key Refactor Decisions

- Migrated to **React functional components + hooks**.
- Replaced multi-page HTML files with route-based pages:
  - `/` (Home)
  - `/products`
  - `/order`
- Preserved existing section flow, text content, and CTA hierarchy.
- Replaced imperative DOM logic in `main.js` with hook-driven React behavior:
  - Sticky nav + mobile menu toggle
  - Hero video readiness/play handling
  - Product filtering state
  - FAQ accordion state
  - Reveal-on-scroll animations
- Kept visual parity by reusing the existing stylesheet as `src/styles/legacy.css`.
- Added modular CSS (`appShell.module.css`) for React app shell scoping.
- Kept image/video paths stable by serving original assets from `public/Assets`.

## Notes

- This refactor is intentionally conservative to preserve the existing brand presentation and UX.
- Minor behavior improvements include route scroll reset and cleaner component reuse.
