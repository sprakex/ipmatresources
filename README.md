# IPMAT Resources

A collection of free resources for IPMAT and JIPMAT preparation. Built with Next.js and Fumadocs.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static output goes to `out/`.

## Project structure

| Path | What it is |
|------|-----------|
| `content/docs/` | All the resource pages in Markdown |
| `content/docs/meta.json` | Sidebar navigation config |
| `app/(home)/` | Landing page |
| `app/docs/` | Docs layout and page rendering |
| `lib/transcripts.ts` | Transcript data (not currently linked on site) |
| `components/` | Reusable UI components |

## Deploy

The site is set up for GitHub Pages. Push to `main` and the GitHub Action in `.github/` handles the rest.
