This is a Next.js 16 app for a coffee shop site with a public website and embedded Sanity-backed content.

## Getting Started

Set the Sanity env vars before running the site. Published Sanity content on the public site refreshes automatically on roughly a 60-second window in production, without a redeploy. You can tune that interval with `SANITY_SITE_REVALIDATE_SECONDS`.

```bash
cp .env.example .env.local
```

Then run the development server:

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

## Sanity Env Vars

- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Sanity project ID used by the public site.
- `NEXT_PUBLIC_SANITY_DATASET`: Sanity dataset used by the public site.
- `SANITY_SITE_REVALIDATE_SECONDS`: Time-based refresh window for cached public-site Sanity queries. Defaults to `60` when unset or invalid.
- `SANITY_API_READ_TOKEN`: Optional server token for preview/live use cases.
- `NEXT_PUBLIC_SANITY_API_READ_TOKEN`: Optional browser token for preview/live use cases.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
