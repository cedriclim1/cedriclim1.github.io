# cedriclim1.github.io

Personal website for Cedric Lim — PhD candidate, Stanford MS&E.

## Stack

Pure static HTML/CSS/JS. No build step. Drop-in to GitHub Pages.

## Structure

```
site/
├── index.html               # Home
├── cv.html                  # Curriculum vitae
├── work.html                # All projects (with hover previews + filters)
├── writing.html             # Blog index
├── post-phd-dataflow.html   # Blog post
├── post-physics-priors.html # Blog post
├── about.html               # About + contact
├── styles.css               # Shared styles (light + dark theme)
├── chrome.js                # Header/footer + icon defs (rendered on every page)
└── scripts.js               # Theme toggle + hover preview + filters
```

## Deploy to GitHub Pages

The repo `cedriclim1/cedriclim1.github.io` is the magic name — push to `main` and it serves at https://cedriclim1.github.io.

```bash
# from this folder, with site/ contents at the repo root:
cd site
git init
git add .
git commit -m "initial site"
git branch -M main
git remote add origin git@github.com:cedriclim1/cedriclim1.github.io.git
git push -u origin main
```

Then in repo Settings → Pages → set source to `main` / root.

## Local preview

```bash
cd site
python3 -m http.server 8000
# → http://localhost:8000
```

## Customization checklist

- [ ] Replace placeholder project blurbs with real content
- [ ] Replace publication titles / venues with real entries
- [ ] Drop a portrait JPG into `site/portrait.jpg` and update `about.html` to `<img>` it
- [ ] Verify your real LinkedIn handle, Scholar URL, etc. in `chrome.js`
- [ ] Add Plausible / Umami analytics if you want
- [ ] Optional: add a `CNAME` file for a custom domain

## Adding a docs-style note

Drop a `.md` file into `site/`, then link to it from `writing.html`:

```html
<a href="notes.html?doc=my-notes.md">My new notes</a>
```

The notes view auto-builds a left sidebar TOC from your `##` (sections) and
`###` (subsections), and supports:

- **Math** via KaTeX — wrap inline as `$E = mc^2$` or display as `$$ ... $$`
- **Code blocks** with syntax highlighting (highlight.js — auto-detects language;
  use ```` ```c ```` etc. for explicit)
- **Frontmatter** for title/date/tag at the top:

```
---
title: Notes on C
date: April 2026
tag: Programming
read: living document
---
```

Example: `site/notes-c.md` → opens at `notes.html?doc=notes-c.md`.

## Theme

Midnight blue (`#0b1428` / `#1d3a8a`) + warm copper (`#c2845a`). Toggle persists per-visitor in `localStorage`. Respects `prefers-color-scheme` on first load.
