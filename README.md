# @Since24 — Frontend

Official website for **@Since24**, a Rwanda-based company specializing in premium electronic appliances and professional installation services — including solar water heaters, automatic gate systems, barriers, and air conditioners.

## Live Features

- **Marketing website** — Home, Products, About, Contact pages
- **Product catalog** — Detailed specs, variants, and image galleries
- **Quote requests** — Integrated lead capture forms
- **Admin dashboard** — Manage products, projects, team, testimonials, FAQs, messages, and quotes
- **SEO optimized** — Structured data (JSON-LD), Open Graph, sitemap, robots.txt
- **PWA ready** — Web app manifest configured
- **Responsive** — Mobile-first design

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15.2.4 (App Router) |
| Language | TypeScript 5 |
| UI Library | shadcn/ui + Radix UI |
| Styling | Tailwind CSS 3 |
| Forms | React Hook Form + Zod |
| Animation | Framer Motion |
| Form Backend | Formspree |
| Images | Cloudinary CDN |
| Icons | Lucide React |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/pacyuzu16/atsince24-fe.git
cd atsince24-fe
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_ADMIN_USERNAME=your_admin_username
NEXT_PUBLIC_ADMIN_PASSWORD=your_admin_password
NEXT_PUBLIC_FORMSPREE_CONTACT=your_formspree_contact_form_id
NEXT_PUBLIC_FORMSPREE_QUOTE=your_formspree_quote_form_id
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
atsince24/
├── app/
│   ├── (main)/          # Public routes (home, products, about, contact)
│   ├── admin/           # Protected admin dashboard
│   ├── staff-login/     # Admin authentication
│   └── countdown/       # Promotional countdown page
├── components/
│   ├── ui/              # shadcn/ui base components
│   └── *.tsx            # Custom page-level components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── public/              # Static assets
```

## Routes

### Public
| Route | Description |
|---|---|
| `/` | Home page |
| `/products` | Product listing |
| `/products/[slug]` | Product detail page |
| `/about` | About the company |
| `/contact` | Contact form + FAQs |

### Admin (requires login)
| Route | Description |
|---|---|
| `/staff-login` | Admin login |
| `/admin` | Dashboard overview |
| `/admin/products` | Manage products |
| `/admin/projects` | Manage projects |
| `/admin/team` | Manage team members |
| `/admin/testimonials` | Manage testimonials |
| `/admin/faqs` | Manage FAQs |
| `/admin/messages` | View contact messages |
| `/admin/quotes` | View quote requests |

## Deployment

This project is built with Next.js and can be deployed to:

- **Vercel** (recommended) — connect your GitHub repo for automatic deployments
- **Netlify**
- Any Node.js hosting provider

## License

All rights reserved — @Since24
