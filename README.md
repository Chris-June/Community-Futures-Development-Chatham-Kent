# Community Futures Chatham-Kent Web App

Modern React + TypeScript site built with Vite and Tailwind CSS. It provides resources, programs, guides, and blogging for Community Futures Development Corporation of Chatham‑Kent.

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS (design tokens and utilities in `src/index.css`)
- Framer Motion (animations)
- React Router v6 (routing)
- Lucide Icons

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Run the dev server
   ```bash
   npm run dev
   ```
3. Create a production build
   ```bash
   npm run build
   ```
4. Preview the production build locally
   ```bash
   npm run preview
   ```

## Project Structure (high level)
```
src/
  components/
    layouts/            # Navbar, Footer, MainLayout
    LogoMarquee/        # Infinite partner logos marquee component
    blog/               # Blog UI components
  data/
    blogPosts.ts        # Blog post data source (array of Post)
    approvedPartners.ts # Approved partners logo data
  pages/                # Top-level route pages
  types/                # Shared TypeScript types
  index.css             # Tailwind layers + design tokens + utilities
```

## Adding a New Blog Post
Blog content lives in `src/data/blogPosts.ts` as an array of `Post` objects (see `src/types/blog.ts`).
Posts render on:
- Blog index: `src/pages/blog/Blogs.tsx` at route `/blogs`
- Single post page: `src/pages/blog/BlogPostPage.tsx` at route `/blog/:slug`

Steps:
1) Add/prepare the hero image (optional but recommended)
   - Place your image under `public/assets/images/blog/` (e.g., `blog-post-5.jpg`).
   - Prefer optimized JPG/WEBP and reasonable dimensions.

2) Append a new post object to `blogPosts` in `src/data/blogPosts.ts`
   ```ts
   {
     id: '5', // unique string ID
     title: 'Practical Guide to Business Grants in Chatham-Kent',
     slug: 'business-grants-chatham-kent', // unique, URL-safe
     author: 'Your Name',
     authorAvatar: '/assets/images/avatars/avatar-1.png', // optional existing avatar
     date: '2024-08-15', // ISO YYYY-MM-DD
     excerpt: 'Short teaser for list view (1–2 sentences).',
     imageUrl: '/assets/images/blog/blog-post-5.jpg',
     category: 'Funding',
     readingTime: 7, // minutes
     featured: false, // set true to surface in featured area
     tags: ['funding', 'grants', 'local'],
     content: `
### Intro Heading
Write your content here in markdown. You can use lists, headings, links, and inline formatting.

- Point 1
- Point 2

> Pro tip: Link to internal pages like [Contact](/about/contact).
`,
   }
   ```

3) Ensure unique identifiers
   - `id`: unique string (does not need to be numeric)
   - `slug`: unique, URL-safe; used by `/blog/:slug`

4) Optional: Feature the post
   - Set `featured: true` to include it in featured areas on the blog index.

5) Save and verify locally
   - Start/refresh dev server: `npm run dev`
   - Visit `/blogs` and `/blog/<your-slug>` to validate

Troubleshooting:
- If the image doesn’t show, confirm the file is under `public/` and referenced with a leading `/` (e.g., `/assets/images/blog/...`).
- If the post URL 404s, double-check the `slug` and that your object was added to the exported `blogPosts` array.

## Approved Partners Marquee
We use a Tailwind-only marquee to showcase Approved Partners.
- Component: `src/components/LogoMarquee/LogoMarquee.tsx`
- Global utilities + keyframes: `src/index.css` (classes like `marquee`, `marquee-track`, `animate-marquee`)
- Data source: `src/data/approvedPartners.ts`
- Integrated placements:
  - Site-wide strip above footer (`MainLayout`)
  - Homepage below hero (`Home`)

Usage:
```tsx
import LogoMarquee from '@/components/LogoMarquee/LogoMarquee';
import { approvedPartnerLogos } from '@/data/approvedPartners';

<LogoMarquee logos={approvedPartnerLogos} speedSeconds={28} gap="2rem" grayscale maskEdges pauseOnHover />
```

## Accessibility & Performance
- Semantic headings and landmarks (main, nav, footer)
- `prefers-reduced-motion` respected by marquee
- Optimize images; provide width/height on logos where known

## Deployment
Build with Vite and deploy the contents of `dist/` to your host (Netlify/Vercel/static hosting). Ensure SPA rewrites route to `index.html`.

## Scripts
- `npm run dev` – Start dev server
- `npm run build` – Production build
- `npm run preview` – Preview built app locally

---
Maintainers: Community Futures Development Corporation of Chatham-Kent
