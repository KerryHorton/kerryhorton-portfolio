# Kerry Horton Portfolio

Kerry Horton’s password-protected UX research and strategy portfolio. The site includes a homepage, About page, résumé viewer, and ten long-form case studies.

The application is a static React site deployed through Vercel. React and Babel run directly in the browser; Vercel provides the password-gate middleware, session API, Web Analytics, and Speed Insights.

## Development workflow

All work starts on `develop`:

1. Make and test changes on `develop`.
2. Push `develop` and review the Preview deployment at [dev.kerryhorton.studio](https://dev.kerryhorton.studio).
3. Confirm the complete preview experience before merging `develop` into `main`.
4. Vercel automatically deploys `main` to [kerryhorton.studio](https://kerryhorton.studio).

Do not push unverified changes directly to `main` or deploy directly to Production.

```bash
npm install
npm test
npm run local
```

## Agent documentation

Agents must read [agent_documents/REPOSITORY_GUIDE.md](agent_documents/REPOSITORY_GUIDE.md) before modifying the repository. It describes the architecture, important files, environment variables, testing, and deployment process in detail.
