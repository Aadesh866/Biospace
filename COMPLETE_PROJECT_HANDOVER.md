# BIOSPACE INTERIORS WEBSITE - COMPLETE PROJECT DOCUMENTATION

**Project Type**: Interior Design Company Website (India-based)  
**Tech Stack**: Next.js 16.2.9 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion  
**Status**: Local Images Integrated ✅ | Server Running on Port 3001  
**Last Updated**: June 28, 2026

---

## 🎯 PROJECT OVERVIEW

BIOSPACE is a premium interior design firm in India specializing in:
- **Modular Kitchens** (30-year warranty with German hardware)
- **Custom Wardrobes** (15-year warranty)
- **Living Room Design** (10-year warranty)
- **False Ceilings** (10-year warranty)
- **Complete Home Renovation** (15-year warranty)
- **Commercial Interiors** (10-year warranty)

### Key Business Features
- ✅ **Lightning-fast execution**: 24-48hr site visits, 1-week project completion
- ✅ **Industry-leading warranties**: 30 years on kitchens
- ✅ **German hardware**: Hettich & Blum quality
- ✅ **Transparent pricing**: No hidden charges
- ✅ **1000+ completed projects** across Mumbai, Delhi, Bangalore, Pune, Chennai

---

## 📁 PROJECT STRUCTURE

```
website - BioSpace Interiors/
├── public/
│   └── images/                    # 23 LOCAL PROJECT PHOTOS (WhatsApp images)
│       ├── Logo.jpeg              # Company logo
│       ├── WhatsApp Image 2026-06-11 at 5.30.18 PM.jpeg  # Kitchen 1
│       ├── WhatsApp Image 2026-06-11 at 5.30.19 PM.jpeg  # Kitchen 2
│       ├── WhatsApp Image 2026-06-11 at 5.30.20 PM.jpeg  # Kitchen 3
│       ├── WhatsApp Image 2026-06-11 at 5.30.21 PM.jpeg  # Kitchen 4
│       ├── WhatsApp Image 2026-06-11 at 5.30.23 PM.jpeg  # Bedroom 1
│       ├── WhatsApp Image 2026-06-11 at 5.30.23 PM (1).jpeg  # Bedroom 2
│       ├── WhatsApp Image 2026-06-11 at 5.30.24 PM.jpeg  # Bedroom 3
│       ├── WhatsApp Image 2026-06-11 at 5.30.24 PM (1).jpeg  # Living 1
│       ├── WhatsApp Image 2026-06-11 at 5.30.24 PM (2).jpeg  # Living 2
│       ├── WhatsApp Image 2026-06-11 at 5.30.25 PM.jpeg  # Living 3
│       ├── WhatsApp Image 2026-06-11 at 5.30.25 PM (1).jpeg  # Wardrobe 1
│       ├── WhatsApp Image 2026-06-11 at 5.30.26 PM.jpeg  # Wardrobe 2
│       ├── WhatsApp Image 2026-06-11 at 5.30.26 PM (1).jpeg  # Ceiling 1
│       ├── WhatsApp Image 2026-06-11 at 5.30.26 PM (2).jpeg  # Ceiling 2
│       ├── WhatsApp Image 2026-06-11 at 5.30.27 PM.jpeg  # Renovation 1
│       ├── WhatsApp Image 2026-06-11 at 5.30.27 PM (1).jpeg  # Renovation 2
│       ├── WhatsApp Image 2026-06-11 at 5.30.27 PM (2).jpeg  # Renovation 3
│       ├── WhatsApp Image 2026-06-11 at 5.30.28 PM.jpeg  # Commercial 1
│       ├── WhatsApp Image 2026-06-11 at 5.30.28 PM (1).jpeg  # Commercial 2
│       ├── WhatsApp Image 2026-06-11 at 5.30.28 PM (2).jpeg  # Commercial 3
│       ├── WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg  # Gallery/Hero 1
│       └── WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg  # Gallery/Hero 2
│
├── src/
│   ├── app/
│   │   ├── page.tsx               # Homepage
│   │   ├── layout.tsx             # Root layout with SEO metadata
│   │   ├── about/
│   │   │   └── page.tsx           # About page
│   │   ├── services/
│   │   │   ├── page.tsx           # Services listing
│   │   │   └── [id]/page.tsx      # Individual service pages
│   │   ├── projects/
│   │   │   ├── page.tsx           # Projects gallery
│   │   │   └── [id]/page.tsx      # Individual project pages
│   │   └── contact/
│   │       └── page.tsx           # Contact form
│   │
│   ├── components/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx           # Hero carousel (3 slides)
│   │   │   ├── HeroStatsSection.tsx      # Stats bar
│   │   │   ├── OneStopShopSection.tsx    # 4 service categories
│   │   │   ├── ServicesSection.tsx       # Services overview
│   │   │   ├── WhyChooseUs.tsx           # Value propositions
│   │   │   ├── InspirationGallery.tsx    # Project photos gallery
│   │   │   ├── TestimonialsSection.tsx   # Customer reviews
│   │   │   └── CTASection.tsx            # Call-to-action
│   │   ├── layout/
│   │   │   ├── Header.tsx                # Navigation bar
│   │   │   └── Footer.tsx                # Footer with links
│   │   └── ui/                           # Shadcn UI components
│   │
│   └── lib/
│       ├── image-config.ts        # 🔥 LOCAL IMAGE MAPPING SYSTEM
│       ├── pexels-image-map.ts    # Pexels fallback (deprecated)
│       ├── seo-config.ts          # SEO metadata configuration
│       └── utils.ts               # Utility functions
│
├── scripts/                       # Image pipeline scripts (historical)
├── .kiro/
│   └── specs/
│       └── biospace-website/      # Spec files for development workflow
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS config (custom brand colors)
├── package.json                   # Dependencies
└── tsconfig.json                  # TypeScript config
```

---

## 🖼️ IMAGE SYSTEM (CRITICAL)

### **WHY LOCAL IMAGES?**
Initially tried using:
1. ❌ **Wikipedia API** - Works for landmarks but FAILS for abstract concepts like "interior design"
2. ❌ **Pexels API** - Returns RANDOM, INCORRECT images (e.g., searches for "false ceiling" returned a board saying "1+1=3")

**SOLUTION**: Use the 23 actual WhatsApp project photos provided by the client.

### **Image Configuration File**
**Location**: `src/lib/image-config.ts`

```typescript
// Map of all 23 local images categorized by type
export const localImages = {
  kitchen: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.18 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.19 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.20 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.21 PM.jpeg',
  ],
  bedroom: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.23 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.23 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM.jpeg',
  ],
  living: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (2).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.25 PM.jpeg',
  ],
  wardrobe: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.25 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM.jpeg',
  ],
  ceiling: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (2).jpeg',
  ],
  renovation: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (2).jpeg',
  ],
  commercial: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (2).jpeg',
  ],
  gallery: [
    '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg',
  ],
};

// Helper function to get images
export function getImageUrl(category, index = 0, useLocal = true) {
  if (useLocal && localImages[category] && localImages[category][index]) {
    return localImages[category][index];
  }
  return '/images/Logo.jpeg'; // Fallback
}
```

### **How Images Are Used**

**✅ COMPLETED - All Local Images Integrated**:
- `src/components/home/HeroSection.tsx` - Hero carousel (3 images)
- `src/components/home/OneStopShopSection.tsx` - Service categories (4 images)
- `src/components/home/ServicesSection.tsx` - Services overview (6 images)
- `src/components/home/InspirationGallery.tsx` - Project gallery (6 images)
- `src/app/services/page.tsx` - Services listing (6 images)
- `src/app/services/[id]/page.tsx` - Individual service pages (4 images)
- `src/app/projects/page.tsx` - Projects gallery (8+ images)
- `src/app/projects/[id]/page.tsx` - Project details (multiple images)
- `src/app/about/page.tsx` - About page (1 image)

**NO MORE PEXELS URLS** ✅ - All replaced with local images

---

## 🎨 DESIGN & BRANDING

### **Color Palette**
Defined in `tailwind.config.ts`:

```typescript
colors: {
  'brand-orange': {
    DEFAULT: '#FF6B35',
    500: '#FF6B35',
    600: '#E55A2B',
  },
  'brand-gray': {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    500: '#6B7280',
    600: '#4B5563',
    800: '#1F2937',
    900: '#111827',
  },
}
```

### **Typography**
- **Headings**: Montserrat (font-heading)
- **Body**: Inter (default)

### **Key Visual Elements**
- Gradient text: Orange gradient for emphasis
- Shadow effects: `shadow-glow`, `shadow-premium`, `shadow-premium-hover`
- Animations: Framer Motion for all interactive elements
- Hover effects: Scale, translate, shadow changes

---

## 🛠️ TECHNICAL SETUP

### **Installation**
```bash
npm install
```

### **Development**
```bash
npm run dev
```
Server runs on: `http://localhost:3000` (or 3001 if 3000 is in use)

### **Build**
```bash
npm run build
npm start
```

### **Key Dependencies**
```json
{
  "next": "16.2.9",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^11.15.0",
  "@radix-ui/react-*": "Latest" // UI components
}
```

### **Next.js Configuration**
**File**: `next.config.js`

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Historical (no longer used)
      },
    ],
  },
};
```

---

## 📄 WEBSITE PAGES

### **1. Homepage** (`src/app/page.tsx`)
**Components**:
- HeroSection - 3-slide carousel with hero images
- HeroStatsSection - Stats bar (1000+ projects, 98% satisfaction)
- OneStopShopSection - 4 service categories
- ServicesSection - 6 main services
- WhyChooseUs - Value propositions
- InspirationGallery - Project photo gallery
- TestimonialsSection - Customer reviews
- CTASection - Contact call-to-action

### **2. About Page** (`src/app/about/page.tsx`)
**Content**:
- Company history (Founded 2010)
- Mission statement
- 4 core values: Precision, Quality, Client First, Integrity
- Team stats: 14+ years experience, 50+ designers
- CTA to contact

### **3. Services Page** (`src/app/services/page.tsx`)
**6 Services Listed**:
1. **Modular Kitchens** - ₹2.5L-₹8L, 3-5 days, 30-year warranty
2. **Custom Wardrobes** - ₹1.8L-₹5L, 2-4 days, 15-year warranty
3. **Living Room Design** - ₹2L-₹6L, 4-6 days, 10-year warranty
4. **False Ceilings** - ₹150-₹300/sq ft, 2-3 days, 10-year warranty
5. **Complete Renovation** - ₹3L-₹16L per BHK, 7-14 days, 15-year warranty
6. **Commercial Interiors** - Custom quote, 5-15 days, 10-year warranty

Each service includes:
- Price range in ₹ (Indian Rupees)
- Timeline (in days)
- Warranty period
- Key features (6 per service)
- Highlights (3 badges)
- CTA button to individual service page

### **4. Individual Service Pages** (`src/app/services/[id]/page.tsx`)
**Dynamic Routes**:
- `/services/modular-kitchens`
- `/services/custom-wardrobes`
- `/services/complete-renovation`

**Features**:
- Hero banner with service image
- Overview description
- Key features grid
- Custom quote form with:
  - Name, Phone fields
  - Service-specific questions (layout, style, scope, etc.)
  - Submit button

### **5. Projects Page** (`src/app/projects/page.tsx`)
**Features**:
- Featured project spotlight
- Filter system: All, Kitchens, Bedrooms, Living, Commercial, Renovation
- 8 project cards with:
  - Project image
  - Budget badge
  - Duration badge
  - Title, location
  - Description
  - Area, timeline stats
  - Features (showing 2 + "more" badge)
  - View Details button
- Stats section: 1000+ projects, 15+ cities, 7 days avg, 98% satisfaction
- CTA section

### **6. Individual Project Pages** (`src/app/projects/[id]/page.tsx`)
**Dynamic Routes**:
- `/projects/1` - Modern 3 BHK Renovation
- `/projects/featured` - Luxury 4 BHK Penthouse

**Features**:
- Full-width hero banner
- Timeline, budget, area stats
- Project brief
- Scope of work (features checklist)
- Gallery grid (2 columns)
- Sidebar with CTA (Get Free Quote, WhatsApp)

### **7. Contact Page** (`src/app/contact/page.tsx`)
**Form Fields**:
- Full Name
- Email
- Phone Number
- Service Interest (dropdown)
- Project Details (textarea)
- Submit button

**Additional Info**:
- Office locations (multiple cities)
- Contact numbers
- Email addresses
- WhatsApp link
- Map integration (optional)

---

## 🔍 SEO CONFIGURATION

**File**: `src/lib/seo-config.ts`

### **Site Metadata**
```typescript
export const siteConfig = {
  name: "BIOSPACE Interiors",
  description: "Premium interior design with 30-year warranty. Modular kitchens, wardrobes, complete home renovation. 1000+ projects. 24-48hr site visits.",
  url: "https://biospace.in",
  keywords: [
    "interior design India",
    "modular kitchen",
    "home renovation",
    "wardrobe design",
    "false ceiling",
    // ... more keywords
  ],
}
```

### **Page-Specific Metadata**
Each page has custom:
- Title
- Description
- Keywords
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

**Implemented in**: `src/app/layout.tsx`

---

## 🎯 KEY FEATURES & FUNCTIONALITY

### **1. Image Optimization**
- All images use Next.js `<Image>` component
- Automatic lazy loading
- Responsive sizing
- WebP conversion (automatic)
- Priority loading for hero images

### **2. Animations**
- Framer Motion for all animations
- Scroll-triggered animations (`whileInView`)
- Hover effects (`whileHover`)
- Smooth transitions (duration 300-800ms)
- Scale, translate, opacity effects

### **3. Responsive Design**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Fluid typography
- Collapsible navigation
- Touch-friendly buttons

### **4. Form Handling**
- Client-side validation
- Success/error states
- Loading states
- Form submission (needs backend integration)

### **5. Performance**
- Static page generation where possible
- Dynamic imports for heavy components
- Image optimization
- CSS optimization (Tailwind JIT)
- Minimal JavaScript bundle

---

## 🚨 KNOWN ISSUES & SOLUTIONS

### **Issue 1: Port Already in Use**
**Error**: "Port 3000 is in use by process 10672"

**Solutions**:
```bash
# Option 1: Kill the process
taskkill /PID 10672 /F

# Option 2: Use different port
npm run dev -- -p 3001

# Option 3: Change default port in package.json
"dev": "next dev -p 3001"
```

### **Issue 2: React 19 Compatibility**
**Fixed** ✅ - Updated all Radix UI packages to latest versions

### **Issue 3: Image 404 Errors**
**Fixed** ✅ - Moved all images from `/images/` to `/public/images/`

### **Issue 4: Pexels Images Wrong/Random**
**Fixed** ✅ - Replaced all Pexels URLs with local WhatsApp project images

---

## 📊 PROJECT TIMELINE & HISTORY

### **Phase 1: Initial Setup** ✅
- Created Next.js project
- Installed dependencies
- Fixed React 19 compatibility issues
- Created basic page structure

### **Phase 2: Image Pipeline (Failed Attempts)** ✅
- **Attempt 1**: Wikipedia API - Failed for abstract concepts
- **Attempt 2**: Pexels API - Returned random/incorrect images
- **Solution**: Use local WhatsApp images

### **Phase 3: Context-Aware Image System** ✅
- Built `scripts/context-aware-image-replacement.js`
- Analyzes code to determine correct image placement
- Pattern matching based on file paths, variable names, text

### **Phase 4: Local Image Integration** ✅
- Created `src/lib/image-config.ts`
- Mapped all 23 local images to categories
- Replaced ALL Pexels URLs with local images
- **Status**: 100% complete, 0 Pexels URLs remaining

### **Phase 5: SEO Optimization** 🔄 In Progress
- Task 8.1: SEO metadata ✅
- Task 8.2: Image optimization ⏳
- Task 8.3: Performance monitoring ⏳
- Tasks 9-14: Remaining spec tasks ⏳

---

## 🎬 NEXT STEPS FOR NEW AI

### **Immediate Actions**
1. ✅ **Verify server is running**: `npm run dev`
2. ✅ **Check all images load**: Visit all pages and verify no 404s
3. ⏳ **Test responsiveness**: Check mobile/tablet/desktop views
4. ⏳ **Test all forms**: Ensure validation works
5. ⏳ **Performance audit**: Run Lighthouse test

### **Remaining Tasks from Spec**
Located in: `.kiro/specs/biospace-website/tasks.md`

**Task 8**: SEO & Performance
- 8.1: ✅ Add comprehensive SEO metadata
- 8.2: ⏳ Optimize images (add alt texts, proper sizing)
- 8.3: ⏳ Add performance monitoring

**Task 9**: ⏳ Forms & Backend Integration
- 9.1: Integrate contact form with backend
- 9.2: Add email notifications
- 9.3: Add form analytics

**Task 10**: ⏳ Testing
- 10.1: Unit tests
- 10.2: Integration tests
- 10.3: E2E tests

**Task 11**: ⏳ Accessibility
- 11.1: ARIA labels
- 11.2: Keyboard navigation
- 11.3: Screen reader testing

**Task 12**: ⏳ Analytics & Tracking
- 12.1: Google Analytics integration
- 12.2: Conversion tracking
- 12.3: Heatmap tracking

**Task 13**: ⏳ Deployment
- 13.1: Production build
- 13.2: Deploy to Vercel/Netlify
- 13.3: Set up domain

**Task 14**: ⏳ Documentation
- 14.1: User manual
- 14.2: Admin documentation
- 14.3: Maintenance guide

---

## 🔑 CRITICAL INFORMATION FOR NEW AI

### **DO NOT**
- ❌ Use Pexels API (returns wrong images)
- ❌ Use Wikipedia API (fails for abstract concepts)
- ❌ Change image paths without updating `image-config.ts`
- ❌ Remove the local images from `/public/images/`
- ❌ Add new dependencies without testing compatibility with React 19

### **DO**
- ✅ Use local images from `/public/images/`
- ✅ Update `image-config.ts` if adding new images
- ✅ Test on multiple browsers (Chrome, Firefox, Safari)
- ✅ Verify all images have proper alt texts for SEO
- ✅ Keep pricing in ₹ (Indian Rupees)
- ✅ Maintain fast execution messaging (24-48hr visits, 1-week projects)
- ✅ Preserve 30-year warranty on kitchens messaging

### **Image Guidelines**
- All images are actual BIOSPACE project photos
- Kitchen images: `.30.18`, `.30.19`, `.30.20`, `.30.21`
- Bedroom images: `.30.23`, `.30.23 (1)`, `.30.24`
- Living room images: `.30.24 (1)`, `.30.24 (2)`, `.30.25`
- Wardrobe images: `.30.25 (1)`, `.30.26`
- Ceiling images: `.30.26 (1)`, `.30.26 (2)`
- Renovation images: `.30.27`, `.30.27 (1)`, `.30.27 (2)`
- Commercial images: `.30.28`, `.30.28 (1)`, `.30.28 (2)`
- Gallery/Hero images: `.34.17`, `.34.17 (1)`

---

## 📞 PROJECT CONTACTS & RESOURCES

### **Pexels API Key** (Deprecated - Not in use)
```
x3wAbQ9VvItropeEoCYkdFrbqpSf0rB2xHTlD469Ntv471F6iVLo2taM
```

### **Important Files to Reference**
- `BIOSPACE_WEBSITE_DOCUMENTATION.md` - Original documentation
- `IMAGE_PIPELINE_COMPLETE.md` - Image pipeline history
- `IMPLEMENTATION_COMPLETE.md` - Implementation notes
- `project_handover_KIRO.txt` - Previous handover notes
- `scripts/CONTEXT_AWARE_SYSTEM.md` - Context-aware system docs
- `.kiro/specs/biospace-website/` - Full spec files

---

## 🎓 LEARNING FROM THIS PROJECT

### **Image Pipeline Lessons**
1. **Wikipedia API**: Only works for specific entities (landmarks, places), NOT abstract concepts
2. **Pexels API**: AI-powered search is unreliable for specific industry terms (e.g., "false ceiling" returns random images)
3. **Local Images**: Always best for client projects where actual work photos exist
4. **Context-Aware Placement**: Analyzing code context (file paths, variable names, surrounding text) helps place images correctly

### **React 19 Compatibility**
- Radix UI packages needed updates for React 19
- Always check peer dependency compatibility
- Use `npm install package@latest` to get React 19 compatible versions

### **Next.js Image Optimization**
- Always use `<Image>` component for automatic optimization
- Configure `remotePatterns` in `next.config.js` for external images
- Use `priority` prop for above-the-fold images
- Local images (from `/public/`) need no configuration

---

## 🚀 QUICK START FOR NEW AI

```bash
# 1. Check server status
npm run dev

# 2. If port conflict, kill old process
taskkill /PID 10672 /F

# 3. Start fresh server
npm run dev

# 4. Visit in browser
http://localhost:3000

# 5. Verify all images load (check browser console for 404s)
# Visit these pages:
# - Homepage: http://localhost:3000
# - About: http://localhost:3000/about
# - Services: http://localhost:3000/services
# - Projects: http://localhost:3000/projects
# - Contact: http://localhost:3000/contact

# 6. Continue with remaining spec tasks
# See: .kiro/specs/biospace-website/tasks.md
```

---

## 📝 FINAL NOTES

**Current Status**: ✅ All local images integrated, server running, ready for next phase

**Next AI Should**:
1. Review this document fully
2. Start dev server and verify all pages load
3. Continue with remaining spec tasks (8.2 onwards)
4. Test responsiveness and accessibility
5. Prepare for production deployment

**Important**: The website showcases REAL client work (23 WhatsApp photos). These are NOT stock photos. The client was frustrated with random stock images, which is why we switched to local images.

**Contact Details**: Update WhatsApp number in project pages (`/projects/[id]/page.tsx`) - currently placeholder `+919876543210`

---

## ✅ COMPLETION CHECKLIST

- [x] React 19 compatibility fixed
- [x] All images moved to `/public/images/`
- [x] Image configuration system created
- [x] All Pexels URLs replaced with local images
- [x] SEO metadata added
- [x] All pages functional
- [x] Dev server running
- [ ] Forms integrated with backend
- [ ] Performance optimization complete
- [ ] Accessibility audit done
- [ ] Analytics integrated
- [ ] Production deployment
- [ ] Domain setup

---

**END OF DOCUMENTATION**

Good luck! 🚀 Everything you need is in this document and the codebase.
