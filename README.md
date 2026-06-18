# BIOSPACE - Interior Design Website

A comprehensive website for BIOSPACE interior design and build firm, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Fast & Responsive**: Next.js 15 with App Router for optimal performance
- **Modern Design**: Professional UI with warm orange branding
- **Multi-page Structure**: Home, Services, Projects, and Contact pages
- **Lead Generation**: Contact forms with validation
- **Portfolio Showcase**: Project gallery with filtering
- **Mobile Optimized**: Fully responsive across all devices
- **SEO Ready**: Optimized metadata and structure

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Images**: Next.js Image optimization

## Key Sections

### Homepage
- Hero section with slideshow
- Services overview with pricing
- Why Choose Us with comparisons
- Customer testimonials
- Call-to-action sections

### Services Page
- Detailed service descriptions
- Pricing and timeline information
- Feature highlights with warranties
- Before/after showcases

### Projects Page
- Portfolio gallery with filters
- Project details and specifications
- Client testimonials and stats
- Case studies with timelines

### Contact Page
- Comprehensive contact forms
- Multiple contact methods
- Business hours and location
- FAQ section

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/
│   ├── home/              # Homepage sections
│   ├── layout/            # Header & footer
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities
└── styles/               # Global styles
```

## Key Features Implemented

- ✅ Lightning-fast site visits (24-48 hours)
- ✅ Industry-leading warranties (30 years kitchen)
- ✅ Rapid project completion (1 week average)
- ✅ Transparent pricing (₹3-16L per BHK)
- ✅ Comprehensive service portfolio
- ✅ 1000+ project showcase
- ✅ Indian market optimization (BHK, ₹ pricing)
- ✅ Mobile-first responsive design
- ✅ Lead generation forms
- ✅ Trust indicators and social proof

## Deployment

The site is production-ready and can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any hosting platform supporting Node.js

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for better performance
- Optimized bundle size
- SEO-friendly structure
- Fast loading times on 3G connections

## Contact Integration

The contact forms are ready for backend integration. Current implementation logs to console and shows success message. To integrate with a backend:

1. Replace the `handleSubmit` function in `/contact/page.tsx`
2. Add your API endpoint
3. Implement form validation and error handling
4. Add email notifications or CRM integration

## Brand Assets

- Logo: `/images/Logo.jpeg`
- Additional project images available in `/images/` folder
- Color scheme: Warm orange (#FF6B35) with professional grays
- Typography: Inter (body) + Poppins (headings)

## License

This project is proprietary to BIOSPACE interior design firm.