# Phinerd landing page

A single-page site for Phinerd — a mentor-led, cohort-based internship platform
that hyper-curates candidates for early-stage Indian startups. Built to attract
initial hiring customers and investors.

## Files

- `index.html` — page structure and copy
- `styles.css` — all styling (design tokens at the top of the file)
- `script.js` — mobile nav, the shortlist card interaction, scroll reveals, and the contact form
- No build step, no dependencies. Just static files.

## Publish it on GitHub Pages (free)

1. Create a new GitHub repository (e.g. `phinerd-site`).
2. Upload `index.html`, `styles.css`, and `script.js` to the root of the repo
   (drag-and-drop works on github.com, or `git push` if you're using the CLI).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
6. GitHub will give you a URL like `https://yourusername.github.io/phinerd-site/`
   within a minute or two. That's your live site.
7. Optional: add a custom domain (e.g. `phinerd.com`) under the same Pages
   settings once you own one — GitHub will walk you through the DNS records.

## Before you launch, edit these

- **Contact email** — in `script.js`, replace `hello@phinerd.com` with your real inbox.
- **Founder note** — in `index.html`, search for "A note from the founder" and swap in your own name/quote.
- **Form backend (optional but recommended)** — right now the contact form opens
  the visitor's email client. To collect submissions directly into a dashboard
  or spreadsheet instead:
  1. Sign up free at [formspree.io](https://formspree.io) and create a form.
  2. In `index.html`, add `action="https://formspree.io/f/YOUR_ID" method="POST"`
     to the `<form id="contact-form">` tag.
  3. In `script.js`, delete (or comment out) the block under `// --- Contact form ---`.
- **Investor deck / candidate list links** — the "Request the deck" and role
  routing currently go through the same contact form. Once you have a deck
  link or Typeform, you can point those buttons directly at it.
- **Real numbers** — this draft deliberately avoids inventing traction, user
  counts, or funding figures. Add your actual metrics once you have them to
  strengthen the investor section.

## Design notes

The visual identity is built around Phinerd's core differentiator — hand
curation, not volume — using an "admissions dossier" motif: a stamped
shortlist of candidate cards in the hero (click or hover to fan them out),
ledger-style data blocks, and a stamp-red / mustard / forest accent palette
against ink navy and warm paper. Fonts: Fraunces (display), Inter (body),
IBM Plex Mono (labels and data).

The page now speaks to three audiences, each with its own section and nav
anchor: **startups** (`#startups`, hiring), **students** (`#students`, apply
to join a mentor-led cohort directly — not just get sourced by a startup),
and **investors** (`#investors`). The student section uses the forest-green
accent to visually separate it from the other two, and the contact form's
"I am a..." dropdown routes all three into one form.
