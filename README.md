# Tamim.dev — Developer Portfolio

A single-page, responsive portfolio for Tamim, an aspiring full-stack web developer, built with a "Deep Light" design.

**Live site:** _add the Vercel URL here after deployment_

## Tech stack

- React 18 + Vite
- Tailwind CSS v4 (design tokens in `src/index.css`)
- lucide-react icons

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```text
developer-portfolio/
├── public/
│   ├── icons/favicon.svg
│   └── images/
│       ├── profile/tamim.jpg
│       └── projects/            # fitlog.jpg, dev-stack-builder.jpg, bazardor.jpg
├── src/
│   ├── components/              # Navbar, Footer, Button, SectionHeading,
│   │                            # SkillBadge, SkillGroup, ProjectCard, SocialLinks
│   ├── sections/                # Hero, About, Skills, Projects, LearningJourney, Contact
│   ├── data/                    # projects.js, skills.js, socialLinks.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vercel.json
└── vite.config.js
```

## Updating content

All content lives in `src/data/`:

- **`projects.js`**: add or edit projects. A project's Live Demo / Source Code button only appears when the link is set. Fill the `tech` array (for example `['React', 'Tailwind CSS']`) to show technology badges.
- **`skills.js`**: add or edit skills. `level: 'used'` or `'growing'` controls the badge style.
- **`socialLinks.js`**: GitHub, LinkedIn and email links.

## Deploy to Vercel

1. Push this folder to a public GitHub repository.
2. Import the repository in Vercel. Vercel detects Vite automatically.
3. Build command: `npm run build`, output directory: `dist` (already set in `vercel.json`).
4. After the first deploy, open the live URL and test navigation and every project link.
5. Put the live URL at the top of this README.

## Notes

- No backend, database or authentication is used by this portfolio.
- Only confirmed information is shown: no invented experience, statistics or links.
- The Wanderlust project and a resume download are intentionally left out until they are ready.
