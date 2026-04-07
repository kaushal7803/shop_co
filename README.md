# SHOP.CO — E-commerce UI

A modern, responsive e-commerce storefront built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. This project demonstrates production-grade frontend architecture, component design, and performance optimization—built from a Figma design reference.

## Live Preview

🔗 **[https://shop-co-sepia-kappa.vercel.app](https://shop-co-sepia-kappa.vercel.app)**

### Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **State Management** | React Context + localStorage |
| **API** | FakeStore API (REST) |
| **Fonts** | Satoshi (body), Integral CF (headings) |

---

## Project Structure

```
my-app/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Server Component)
│   ├── page.tsx                  # Homepage (Server Component)
│   ├── cart/page.tsx             # Cart page (Server Component)
│   └── icon.png                  # Favicon
├── components/
│   ├── home/                     # Homepage sections
│   │   ├── hero-section.tsx      # Hero with animated CountUp stats
│   │   ├── brands-banner.tsx     # Infinite marquee (Framer Motion)
│   │   ├── product-section.tsx   # Product grid/carousel
│   │   ├── dress-style.tsx       # Browse by style section
│   │   └── reviews.tsx           # Customer reviews carousel
│   ├── layout/                   # Shared layout
│   │   ├── header.tsx            # Responsive header with mobile menu
│   │   ├── footer.tsx            # Footer with social icons & payments
│   │   └── top-banner.tsx        # Dismissible promo banner
│   └── ui/                       # Reusable UI components
│       ├── product-card.tsx      # Product card with hover cart
│       ├── review-card.tsx       # Review card with verified badge
│       ├── cart-client.tsx       # Cart items + order summary (Client)
│       ├── count-up.tsx          # Animated number counter
│       ├── fade-up.tsx           # Scroll-triggered fade animation
│       └── button.tsx            # Button primitives
├── lib/
│   ├── api.ts                    # FakeStore API client (SSR + fallback)
│   ├── cart-context.tsx          # Cart state provider
│   └── utils.ts                  # Utility functions
└── src/assets/                   # Static assets
    ├── icons/                    # Custom SVG icons (Figma exports)
    └── images/                   # Organized image assets
        ├── hero/                 # Hero section images
        ├── styles/               # Dress style category images
        ├── products/             # Product placeholder images
        ├── Footer/               # Payment gateway logos
        └── LogosMarquee/         # Brand logos for marquee
```

---

## Architecture Decisions

### Server vs Client Components
Pages (`app/page.tsx`, `app/cart/page.tsx`) are **Server Components** by default. Interactive elements are pushed to leaf-level Client Components:

```
Server Component (page.tsx)
  └── Server-rendered layout, headings, breadcrumbs
      └── Client Component (cart-client.tsx)  ← only this ships JS
```

This follows the **"push client to the leaves"** pattern, minimizing the client-side JS bundle.

### State Management
Cart state uses **React Context** (`CartProvider`) with `localStorage` persistence. The provider initializes with deterministic default data on both server/client to prevent hydration mismatches.

### Data Fetching
Products are fetched **server-side** from FakeStore API using **dynamic SSR** (`cache: "no-store"`).

**Why SSR instead of ISR?** During deployment, ISR fetches data at build time. If the external API is unreachable from the hosting provider's build environment (a common issue with free APIs like FakeStore), ISR caches empty data and serves it to every visitor until the next revalidation window. Dynamic SSR solves this by fetching fresh data on every request.

**Resilience pattern:**
- `AbortController` with a 10-second timeout prevents hanging requests
- 8 hardcoded fallback products ensure the UI never renders empty, even if the API is completely down
- The fetch runs server-side, so the API URL is never exposed to the client

### Static Imports for Images
All local images use **ES module imports** instead of `/public` path strings. This enables:
- Webpack content-hash cache busting
- Automatic AVIF/WebP format conversion
- Tree-shaking of unused assets

---

## Performance Optimizations

| Optimization | Impact |
|---|---|
| Font `preconnect` + `dns-prefetch` hints | Faster FCP — eliminates DNS/TLS handshake latency |
| `fetchPriority="high"` on hero image | Faster LCP — browser prioritizes the hero as critical resource |
| `dynamic()` import for BrandsBanner | Lower TBT — Framer Motion bundle split into separate chunk |
| AVIF/WebP image format conversion | ~30-50% smaller image payloads |
| `minimumCacheTTL: 86400` in Next.js config | CDN-level image caching for 24 hours |
| Static asset `Cache-Control: immutable` | Long-term browser caching for JS/CSS bundles (`/_next/static/`) |
| `sizes` prop on all `fill` Images | Proper srcset generation for responsive images |
| Dynamic SSR with fallback data | Reliable product rendering even when external API is down |

---

## Custom Assets

- **Icons**: Hand-exported from Figma (Search, Cart, Profile, Social icons, Verified badge, Banner stars)
- **Payment logos**: Visa, Mastercard, PayPal, Apple Pay, Google Pay
- **Brand logos**: Versace, Zara, Gucci, Prada, Calvin Klein

---

## Key Features

- 📱 **Fully Responsive** — Mobile-first design with `sm`, `md`, `lg`, `xl` breakpoint precision
- 🛒 **Cart System** — Add/remove items with quantity controls and live totals
- ✨ **Micro-Animations** — Scroll-triggered fade-ups, animated stat counters, infinite brand marquee
- 🔍 **Product Grid** — Horizontal scroll carousel on mobile, 4-column grid on desktop
- ⭐ **Star Ratings** — Fractional star rendering (half stars supported)
- 📄 **SEO Optimized** — Proper meta tags, semantic HTML, heading hierarchy
- ♿ **Accessible** — ARIA labels on all interactive elements, keyboard navigation

---

## Scripts

```bash
npm run dev       # Start development server (Turbopack)
npm run build     # Production build
npm start         # Start production server
npm run lint      # Run ESLint
```

---

## Deployment

This project is ready for **Vercel** deployment:

```bash
npx vercel
```

Or build locally for any Node.js host:

```bash
npm run build
npm start
```
