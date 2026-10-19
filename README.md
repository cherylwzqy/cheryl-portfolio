This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## GitHub Pages deployment

`.github/workflows/deploy-pages.yml` builds and deploys this repository on pushes
to `main` or manual dispatch. It targets `cherylwzqy/cheryl-portfolio` only and
does not write to the `cherylwzqy.github.io` repository.

In this repository's **Settings → Pages → Build and deployment**, select
**GitHub Actions**. Leave the custom domain empty. Enable Actions and ensure the
`github-pages` environment permits deployments from `main`. The intended URL is
https://cherylwzqy.github.io/cheryl-portfolio/.

Build the static export locally in PowerShell:

```powershell
$env:GITHUB_PAGES = 'true'
npm run build
Remove-Item Env:GITHUB_PAGES
```

Serve `out/` mounted at `/cheryl-portfolio/` for previewing. `next start` does not
serve static exports. Pages serves original images without runtime optimization;
public media files are copied unchanged. Use `publicAsset()` from
`app/lib/public-asset.ts` for public asset URLs. Keep route URLs in `Link` and
router calls unprefixed; Next.js handles their base path.

The normal `npm run build` preserves Vercel's root URLs, standard Next.js output,
and image optimization. Do not set `GITHUB_PAGES` on Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
