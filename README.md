# TAQAT Hosting — Next.js Sample

TAQAT-branded Next.js App Router demo with server components and an API route.

## Stack
- **Next.js 15+** App Router, SSR, standalone output
- API route at `/api/info` returning JSON
- Nixpacks build on TAQAT Academy Hosting

## Local Development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deployed on TAQAT Hosting
1. Connect this repo in TAQAT Academy dashboard
2. Nixpacks detects Next.js, runs `next build` (standalone output)
3. Procfile: `web: ./node_modules/.bin/next start -H 0.0.0.0 -p $PORT`
4. Live at https://nextjs-sample.apps.taqat.academy

## Links
- [TAQAT Academy](https://taqat.academy)
- [SSO Login](https://sso.taqat.work)
- [Bright Gaza](https://brightgaza.com)
