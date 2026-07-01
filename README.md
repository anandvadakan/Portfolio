# Anand V - Portfolio

A personal portfolio website showcasing GTM, strategy, and operations case studies. Built as a single-page web application and deployed publicly via GitHub Pages.

**Live site:** [anandvadakan.github.io/Portfolio](https://anandvadakan.github.io/Portfolio/)

---

## What this site is

This is a professional portfolio for Anand V - a GTM Engineer, strategist, and AI workflow designer. The site presents selected case studies from real engagements, covering areas like go-to-market strategy, funnel optimization, and operations design.

Visitors can browse case studies, read detailed breakdowns of each project, and get in touch directly from the site.

---

## What's inside

```
portfolio/
├── src/
│   ├── pages/          - The main pages: Home, Works (case study list), individual Case Study, Contact, 404
│   ├── components/     - Reusable UI pieces: navigation bar, contact modal, card animations, background effects
│   └── data/           - The actual case study content (titles, problems, approaches, outcomes)
├── public/             - Static files served as-is (custom 404 page)
├── index.html          - The single HTML file the whole app loads from
├── package.json        - Lists all the tools/libraries this project depends on
└── vite.config.js      - Build configuration
```

The content that appears on the site lives in [src/data/caseStudies.js](src/data/caseStudies.js). Editing that file is all it takes to update or add a case study - no code changes needed.

---

## Key design choices

- **Slate and off-white colour palette** - clean, consultant-grade aesthetic
- **Animated card stack on the home page** - case study cards cycle automatically, pause on hover
- **Glitchy terminal background on the 404 page** - a WebGL-rendered effect called FaultyTerminal
- **Contact modal** - clicking "Get in touch" opens an overlay with email, LinkedIn, and GitHub links
- **No backend** - the site is entirely static; nothing is stored or processed server-side

---

## Tech stack (plain English)

| What you see | What powers it |
|---|---|
| The UI and interactions | React - a JavaScript library for building interfaces |
| Page routing (Home, Works, etc.) | React Router - handles navigation without full page reloads |
| Animations | GSAP - a professional animation library |
| The terminal background effect | OGL - a lightweight 3D/WebGL library |
| Contact form emails | EmailJS - sends emails directly from the browser, no server needed |
| Build and local dev server | Vite - a fast modern build tool |

---

## Running it locally

You need [Node.js](https://nodejs.org/) installed (version 18 or above works fine).

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the local dev server
npm run dev
```

After running `npm run dev`, open your browser and go to `http://localhost:5173`. Changes to files are reflected instantly without needing to refresh.

---

## Deploying to GitHub Pages

The site deploys automatically whenever changes are pushed to the `main` branch. A GitHub Actions workflow handles the build and publish steps.

To deploy manually:

```bash
# Build the production version of the site
npm run build
```

This creates a `dist/` folder. GitHub Actions then publishes that folder to the `gh-pages` branch, which GitHub Pages serves as the live site.

The site is configured to live at the `/Portfolio/` path (set in `vite.config.js`) to match the GitHub Pages URL structure.

---

## Updating content

**To edit a case study** - open [src/data/caseStudies.js](src/data/caseStudies.js) and update the relevant fields. Each case study has:
- `title` and `subtitle` - displayed on cards and the detail page
- `problem` - what the client/situation was
- `approach` - list of steps taken
- `outcome` - measurable results
- `tag` and colours - the label shown on the card

**To add a new case study** - copy an existing entry in that file and fill in the new details. It will automatically appear on the home page card stack and the Works listing.

---

## Contact

LinkedIn and GitHub links are in the contact modal on the live site.
