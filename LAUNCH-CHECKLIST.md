# Launch Checklist

This site is a static front-end, which keeps the attack surface low. Before publishing, make sure the hosting setup matches that simplicity.

## Security

- Serve the site over HTTPS only.
- Enable HTTP-to-HTTPS redirects at the host level.
- Mirror security headers at the server/CDN level where possible:
  - `Content-Security-Policy`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Permissions-Policy`
  - `Strict-Transport-Security` on HTTPS
- Disable directory listing on the web server.
- Do not enable file uploads, server-side script execution, or public write access in the site root.
- Keep asset and page files read-only for the web-facing account where possible.

## Pre-Launch Checks

- Test `index.html`, `products.html`, and `order.html` on desktop and mobile widths.
- Verify all WhatsApp and Instagram links open the correct destinations.
- Confirm the logo, favicon, hero video, and product images load on the live domain.
- Verify product filtering still works on small screens after deployment.
- Clear browser cache once after deployment to confirm the latest CSS, JS, and favicon are being served.
