# Grant Schurman — Architectural Portfolio

Static site, no build step. Open `index.html` or host the repo root (GitHub Pages: Settings → Pages → `main` / root).

## Structure
- `content.js` — **all text, links and image lists live here.** Edit this for normal updates.
- `symbols.js` / `symbols/` — the six project symbols as vector SVG (extracted from the PDF).
- `images/` — project images. **Currently low-res stand-ins rendered from the compressed PDF.**
- `index.html`, `style.css`, `app.js` — the site itself.

## Swapping in full-size images
Save the original over the same filename in `images/` (e.g. `hero-03.jpg`, `p3-02.jpg`), or change the path in `content.js`.
Naming: `hero-0N.jpg` = project hero (full-bleed, no title overlay); `pN-0M.jpg` = Nth gallery image of project N;
`p6-pro-*` / `p6-free-*` / `p6-ai-*` / `p6-make-*` = project .06 groups. Add/remove entries in each project's `images: []`.

## Routes
`#/` home · `#/resume` · `#/school` · `#/personal` · `#/p/1` … `#/p/6` (`#/p/6/professional`, `#/p/6/personal`)

## Still to fill in
`links.fullNineYards`, `links.etsy`, and optionally `links.resumePdf` in `content.js`.
