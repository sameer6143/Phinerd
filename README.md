# QR Code Generator

A simple, single-page QR code generator — type any text or URL, customize the size and color, and download the result as a PNG. No backend, no build step, no dependencies to install.

**Live demo:** `https://<your-username>.github.io/<repo-name>/` (update after deploying)

## Features
- Instant QR code generation from text or URLs
- Adjustable size (small / medium / large)
- Custom QR color
- One-click PNG download
- Works fully offline after first load (only one external script)

## Tech
- Plain HTML, CSS, and JavaScript
- [qrcodejs](https://cdnjs.com/libraries/qrcodejs) loaded via CDN for QR rendering

## Running locally
Just open `index.html` in any browser — no server or build tools needed.

## Deploying to GitHub Pages
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/root` folder.
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## License
MIT — free to use, modify, and share.
