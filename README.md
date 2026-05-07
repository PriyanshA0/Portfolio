# Hunter App Store

Hunter App Store is a personal portfolio and project showcase repo. The current active experience lives in the Next.js app under `portfolio-v2`, while the repository root keeps the launch scripts and a few legacy assets for compatibility.

## What’s Inside

- A modern portfolio built with Next.js, React, TypeScript, and Tailwind CSS.
- A featured projects area with detailed project pages for app-style builds.
- Interactive sections for about, music, favorite movie, GitHub activity, experience, education, and contact links.
- A `Code Basics` learning project embedded inside the portfolio as a dedicated app page.
- Legacy static pages and assets preserved for older routes and compatibility.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI
- Framer Motion
- Lucide Icons

## Getting Started

Install dependencies from the repository root:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Start the production server:

```bash
npm run start
```

## Available Scripts

The root package forwards to the Next.js app in `portfolio-v2`.

- `npm run dev` - start the portfolio in development mode
- `npm run start` - start the production server for the portfolio

If you want to work directly inside the Next app, you can also use:

```bash
cd portfolio-v2
npm run dev
```

## Project Structure

```text
portfolio-v2/
	app/            Next.js routes and pages
	components/     Portfolio sections and reusable UI
	data/           Content, links, and project metadata
	public/         Images, legacy pages, and static assets
```

## Featured Areas

- Home, About, Music, Favorite Movie, Connect, GitHub Activity, Experience, Education, and Projects sections.
- Detailed app pages with screenshots and download or live links.
- A horizontal screenshot slider for mobile-friendly browsing.
- A live GitHub activity chart that scales better on smaller screens.

## Notes

- The `Code Basics` project is now available inside the Next.js app at `/basics`.
- Some legacy static files remain in `portfolio-v2/public` so older embedded pages continue to work.

## License

No license has been specified yet.