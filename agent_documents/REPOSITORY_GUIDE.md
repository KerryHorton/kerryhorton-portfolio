# Repository Guide for Agents

This document is the operational guide for working in the Kerry Horton portfolio repository. Read it before changing code, content, configuration, or deployment state.

## Non-negotiable deployment workflow

The Git repository and Vercel Git integration are the deployment source of truth.

| Environment | Git branch | Primary domain | Purpose |
| --- | --- | --- | --- |
| Preview | `develop` | `https://dev.kerryhorton.studio` | Integration testing and stakeholder review |
| Production | `main` | `https://kerryhorton.studio` | Public production portfolio |

Follow this sequence for every change:

1. Confirm the current branch with `git status -sb`.
2. Work on `develop`. Do not make routine changes directly on `main`.
3. Run the relevant local checks, including `npm test`.
4. Push the commit to `develop`.
5. Wait for Vercel’s automatic Preview deployment to reach `READY`.
6. Review `https://dev.kerryhorton.studio` in a browser. Test the full affected user flow, responsive layouts, browser console, and network requests.
7. Merge `develop` into `main` only after the Preview deployment is approved.
8. Confirm Vercel’s automatic Production deployment reaches `READY` and smoke-test `https://kerryhorton.studio`.

Do not run `vercel --prod`, promote an arbitrary deployment, change the Vercel Production Branch, or push directly to `main` unless the user explicitly requests that action. The normal production release is a reviewed merge from `develop` to `main`.

## Deployment configuration

- Vercel project: `kerryportfolio`
- Vercel scope/team: `kerryhorton`
- Connected GitHub repository: `KerryHorton/kerryhorton-portfolio`
- Production branch: `main`
- Persistent Preview branch: `develop`
- Preview branch domain: `dev.kerryhorton.studio`
- Production domains: `kerryhorton.studio` and `www.kerryhorton.studio`
- Registrar and authoritative DNS provider: Porkbun
- Framework preset: Other
- Node.js runtime: 24.x

Vercel automatically creates a Preview deployment for pushes to `develop` and a Production deployment for pushes or merges to `main`. The stable branch domain follows the latest successful Git deployment from `develop`.

Useful read-only deployment checks:

```bash
vercel ls
vercel inspect <deployment-url>
vercel logs <deployment-url> --level error --since 1h
vercel env ls
```

Preview deployments may have Vercel Authentication in front of the portfolio’s own password gate. Use an authenticated browser session for visual review. For read-only command-line verification of a protected deployment, use:

```bash
vercel curl / --deployment <preview-url>
```

### Required environment variables

The middleware requires both variables below:

- `PORTFOLIO_PASSWORD`
- `PORTFOLIO_SESSION_SECRET` — at least 32 characters

They are configured in Vercel for:

- Production
- Development
- Preview, restricted to the `develop` Git branch

Local values belong in `.env.local`, which is ignored by Git. Never print, document, commit, or copy secret values into source files. `.env.example` contains only the required variable names.

Environment-variable changes affect only new deployments. After changing Vercel variables, redeploy the affected environment or push a new commit before testing.

### Analytics and Speed Insights

Vercel Web Analytics and Speed Insights are enabled for the project.

This is not a Next.js repository, so it does not use the `/next` package exports. `vercel-observability.js` calls the framework-neutral browser APIs from generated modules in `vendor/`.

```text
@vercel/analytics              -> vendor/vercel-analytics.mjs
@vercel/speed-insights         -> vendor/vercel-speed-insights.mjs
scripts/build-observability.mjs
```

`npm install` runs `postinstall`, which regenerates the vendor modules from the installed package versions. Do not hand-edit files in `vendor/`; update the dependency or generator and rebuild instead.

The password middleware intentionally allows the observability entry point, vendor modules, and Vercel collection endpoints to load before portfolio authentication.

## Runtime architecture

This is a small static multi-page site, not a bundled React application.

- React 18, ReactDOM, and Babel Standalone load from CDN script tags.
- JSX files execute in the browser through `type="text/babel"`.
- Shared components are attached to `window` rather than imported as ES modules.
- HTML files define the script load order, so dependency order matters.
- Vercel builds the middleware and API route while serving the remaining files as static assets.

Avoid introducing Next.js-specific imports or assuming a conventional bundler exists. A larger framework migration should be treated as a separate architectural task.

## Live pages and entry points

| File | Responsibility |
| --- | --- |
| `index.html` | Homepage shell and homepage-specific CSS |
| `kerry-home.jsx` | Homepage hero, selected-work index, and project metadata |
| `About.html` | About page shell |
| `kerry-about.jsx` | About page rendering and interactions |
| `kerry-about.css` | About page styles |
| `case-study.html` | Shared case-study shell |
| `kerry-case.jsx` | Dynamic case-study renderer selected by `?p=<slug>` |
| `kerry-case.css` | Case-study layout and research-diagram styles |
| `kerry-content-a.jsx` | Case-study content for projects 01–05 |
| `kerry-content-b.jsx` | Case-study content for projects 06–10 and About-page data |
| `gate.html` | Public password-gate page |
| `kerry-gate.js` | Gate submission and redirect behavior |
| `kerry-bits.jsx` | Shared logo, navigation, footer, and decorative components |
| `kerry-base.css` | Shared inner-page design tokens and components |
| `kerry-resume.js` | Résumé modal and same-origin PDF viewer |
| `image-slot.js` | Custom image-slot element and persisted crop behavior |

`Kerry Homepage.html` is only a compatibility redirect to `index.html`.

## Authentication and server-side files

| File | Responsibility |
| --- | --- |
| `middleware.js` | Protects the portfolio, redirects unauthenticated page requests, and adds security/no-index headers |
| `api/auth.js` | Validates the password and creates or expires the session cookie |
| `lib/session.js` | HMAC session tokens, constant-time password comparison, and cookie helpers |

The gate uses one site-wide, HTTP-only session cookie with a 30-day lifetime. Keep public middleware exceptions narrow. New files required by `gate.html` before authentication must be explicitly made public in `middleware.js`.

## Content model

The homepage project list lives in `PROJECTS` inside `kerry-home.jsx`. Full project content lives in `window.KERRY_CASES` across the two content files.

When changing a project slug, title, ordering, or headline metadata, check both locations. A case-study link uses:

```text
case-study.html?p=<project-slug>
```

The case renderer supports paragraphs, subheads, quotes, lists, ordered lists, methods, sample summaries, themes, insight/recommendation/impact tables, journeys, frameworks, and image blocks.

Case-study image blocks use stable IDs derived from the project slug, section ID, and block index. Changing that structure can disconnect existing entries in `.image-slots.state.json`.

## Assets and design-source material

- `assets/` contains production images, logos, thumbnails, and the résumé PDF.
- `.image-slots.state.json` contains persisted embedded images and crop positions used by `<image-slot>`.
- `uploads/` contains original source PDFs and images used while building the portfolio.
- `screenshots/` contains design and regression snapshots from multiple iterations.

Do not assume every file in `uploads/` or `screenshots/` is live. Do not delete or rewrite source material unless the task explicitly includes asset cleanup.

## Wireframe and prototype tooling

`Portfolio Wireframes.html` and the following files form an older interactive design canvas rather than the live portfolio:

- `app.jsx`
- `design-canvas.jsx`
- `wireframe-kit.jsx`
- `screens-*.jsx`
- `tweaks-panel.jsx`

Treat these as design references unless the task specifically targets the wireframe canvas. Changes to them do not automatically change the live homepage, About page, or case-study pages.

## Local development and verification

Install dependencies and start the Vercel-aware local server:

```bash
npm install
npm run local
```

The local server is preferable to opening HTML files directly because authentication depends on Vercel middleware and `/api/auth`.

Run the automated checks:

```bash
npm test
```

Run a Vercel build before deployment-sensitive changes:

```bash
vercel build
```

At minimum, verify:

- password gate success, failure, and redirect behavior
- homepage hero, navigation, and all project links
- About page and external contact links
- representative case studies, including query-string routing
- résumé modal, PDF rendering, and download
- desktop and mobile layouts
- browser console errors and failed network requests
- Analytics and Speed Insights scripts on a deployed Vercel environment

## Working rules for agents

1. Start by reading `README.md` and this guide.
2. Confirm the branch and worktree before editing.
3. Preserve unrelated user changes.
4. Work on `develop` unless explicitly instructed otherwise.
5. Never expose or commit secrets.
6. Keep live-site changes separate from legacy wireframe changes.
7. Run tests proportional to the change.
8. Push to `develop` and verify the Preview deployment before proposing a merge to `main`.
9. Do not mutate Production, DNS, domains, environment variables, or deployment protection without explicit authorization.
