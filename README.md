# Alluring Scents (React + Vite)

Modernized version of the Alluring Scents website, migrated from plain HTML/CSS/JS to React with Vite while preserving the original content, section order, and visual hierarchy.

## Run Locally

```bash
npm install
npm run dev
```

Then open the URL shown by Vite (usually `http://localhost:5173`).

## Netlify Deployment

This project is configured for Netlify SPA hosting:

- Vite base path is `/` in `vite.config.js`
- SPA fallback redirect exists in `public/_redirects`
- Netlify build settings are pinned in `netlify.toml`

Expected Netlify settings:

- Build command: `npm run build`
- Publish directory: `dist`

## Deployment Verification

After building, run:

```bash
npm run verify:netlify
```

This check prints:

- Asset paths found in `dist/index.html`
- Whether referenced JS/CSS files exist in `dist/assets`
- Whether a JS bundle is present so React can mount

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
  _redirects
scripts/
  verify-netlify-build.mjs
```

## Key Refactor Decisions

- Migrated to React functional components + hooks.
- Replaced multi-page HTML files with route-based pages:
  - `/` (Home)
  - `/products`
  - `/order`
- Preserved existing section flow, text content, and CTA hierarchy.
- Replaced imperative DOM logic in legacy JS with hook-driven React behavior.
- Kept visual parity by reusing the existing stylesheet as `src/styles/legacy.css`.
- Added modular CSS (`appShell.module.css`) for React app shell scoping.
- Kept image/video paths stable by serving assets from `public/Assets`.

## If Netlify Still Shows a Blank Page

1. Check Netlify deploy logs:
   - Confirm build command is exactly `npm run build`
   - Confirm publish directory is exactly `dist`
2. In browser DevTools Network tab:
   - Reload and check failed files under `/assets/...`
   - Verify `index.html` references `/assets/*.js` and `/assets/*.css`
3. Confirm base URL handling:
   - `vite.config.js` must use `base: '/'`
   - There should be no GitHub Pages repo subpath in asset URLs
4. Confirm SPA fallback:
   - `public/_redirects` contains: `/*    /index.html   200`

## Notes

- Do not deploy source folders (`src`) directly.
- Do not deploy with GitHub Pages base paths.
- Deploy built output (`dist`) only.
