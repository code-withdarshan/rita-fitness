# Rita Fitness Coach

Next.js App Router version of Rita's fitness coaching site. The home page is at `/` and Rita's story is at `/about`.

## Local development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run build` to generate a static site in `out/`.

The project uses Tailwind CSS and keeps the site's original custom styles in `app/globals.css`. Images and videos are served from `public/assets/`.

The production site is [rita-fitness.vercel.app](https://rita-fitness.vercel.app/). Vercel serves the static export from `out/` using the settings in `vercel.json`. Set `NEXT_PUBLIC_SITE_URL` when building for a different domain so Open Graph image URLs use that domain.
