# BIOSPACE Website Design Document

## Overview

The BIOSPACE website is a modern, performance-optimized web application built to showcase a premium interior design and build firm transitioning from contract work to establishing their own brand presence. The website serves as the primary digital touchpoint for potential customers to discover services, view project portfolios, and initiate contact for interior design projects.

### Key Design Principles

- **Speed First**: Optimized for fast loading times with lazy loading and image optimization
- **Mobile Responsive**: Mobile-first design approach ensuring excellent experience across all devices
- **Brand Consistency**: Warm orange color scheme reflecting the BIOSPACE brand identity
- **Trust Building**: Prominent display of warranties, testimonials, and project count to build credibility
- **Lead Generation**: Strategic placement of contact forms and call-to-action buttons throughout the user journey

### Technology Stack

- **Framework**: Next.js 15 with App Router for optimal performance and SEO
- **Language**: TypeScript for type safety and better developer experience
- **Styling**: Tailwind CSS v4 for utility-first styling
- **Components**: shadcn/ui for consistent, accessible UI components
- **Animations**: Framer Motion and GSAP for smooth interactions
- **Image Optimization**: Next.js Image component with responsive images

## Architecture

### Application Structure

The website follows Next.js 15 App Router conventions with a clear separation of concerns:

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── loading.tsx         # Loading UI components
│   ├── not-found.tsx       # 404 error page
│   ├── services/
│   │   └── page.tsx        # Services listing page
│   ├── projects/
│   │   └── page.tsx        # Portfolio and project gallery
│   ├── contact/
│   │   └── page.tsx        # Contact forms and information
│   ├── manifest.ts         # PWA manifest configuration
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.txt          # SEO robots configuration
├── components/
│   ├── layout/             # Navigation, header, footer components
│   ├── home/               # Homepage-specific sections
│   └── ui/                 # Reusable UI components (shadcn/ui)
└── lib/
    └── utils.ts            # Utility functions and helpers
```

### Page Architecture

#### Homepage Structure
- **Hero Section**: Brand messaging, key value propositions, primary CTA
- **Services Section**: Overview of main service categories with pricing tiers
- **Why Choose Us**: Speed advantage, warranty terms, experience highlights
- **Testimonials Section**: Customer reviews and social proof
- **CTA Section**: Contact form and immediate action prompts

#### Services Page Structure
- **Service Categories**: Detailed descriptions of modular kitchens, custom sofas, false ceilings, wardrobes, and renovations
- **Pricing Tiers**: 2 BHK (₹3-7 Lakhs) and 3/4 BHK (₹4-16 Lakhs) with clear breakdowns
- **Process Timeline**: 24-48 hour site visits, 1-week completion
- **Warranty Information**: 30-year kitchen warranty, 10-15 year overall warranty

#### Projects Page Structure
- **Portfolio Gallery**: Grid layout showcasing completed projects with images
- **Filtering System**: Filter by service type, location, and project size
- **Project Details**: Timeline, specifications, and before/after comparisons
- **Trust Indicators**: 1000+ projects milestone and city coverage

#### Contact Page Structure
- **Contact Forms**: Separate forms for different inquiry types
- **Company Information**: Address, phone numbers, business hours
- **Location Map**: Interactive map showing office location
- **WhatsApp Integration**: Direct link for instant communication

## Components and Interfaces

### Layout Components

#### Navigation Component
```typescript
interface NavigationProps {
  currentPath: string;
}

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}
```

**Features:**
- Responsive hamburger menu for mobile
- Active state indication
- Smooth scroll to sections
- Logo display from `/images/Logo.jpeg`

#### Header Component
```typescript
interface HeaderProps {
  showContactCTA?: boolean;
  transparent?: boolean;
}
```

**Features:**
- Sticky navigation with backdrop blur
- Contact button in header
- Mobile-optimized layout

#### Footer Component
```typescript
interface FooterProps {
  showNewsletter?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}
```

### Home Page Components

#### Hero Section Component
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaButtons: CTAButton[];
}

interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  action?: 'whatsapp' | 'form' | 'call';
}
```

**Features:**
- Animated text with staggered entrance
- Multiple CTA options (WhatsApp, Contact Form, Phone)
- Background video or image support
- Mobile-optimized typography

#### Services Section Component
```typescript
interface ServicesSectionProps {
  services: ServiceItem[];
  showPricing?: boolean;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  priceRange?: PriceRange;
}

interface PriceRange {
  min: number;
  max: number;
  currency: 'INR';
  unit: 'Lakhs';
}
```

#### Why Choose Us Component
```typescript
interface WhyChooseUsProps {
  features: USPFeature[];
  testimonialCount?: number;
  projectCount?: number;
}

interface USPFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}
```

#### Testimonials Component
```typescript
interface TestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  showRating?: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  location: string;
  projectType: string;
  content: string;
  rating?: number;
  image?: string;
}
```

### UI Components

#### Button Component
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  children: ReactNode;
}
```

**Variants:**
- **Primary**: Orange gradient background, white text
- **Secondary**: White background, orange text and border
- **Outline**: Transparent background, orange border and text
- **Ghost**: Transparent background, orange text

#### Card Component
```typescript
interface CardProps {
  variant?: 'default' | 'service' | 'project' | 'testimonial';
  hover?: boolean;
  shadow?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}
```

#### Input Component
```typescript
interface InputProps {
  type: 'text' | 'email' | 'tel' | 'textarea';
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  validation?: ValidationRule[];
}

interface ValidationRule {
  type: 'required' | 'email' | 'phone' | 'minLength';
  value?: number;
  message: string;
}
```

### Project Components

#### Project Gallery Component
```typescript
interface ProjectGalleryProps {
  projects: Project[];
  filters: FilterOption[];
  layout: 'grid' | 'masonry';
  itemsPerPage?: number;
}

interface Project {
  id: string;
  title: string;
  location: string;
  serviceType: string;
  images: ProjectImage[];
  timeline: string;
  specifications: ProjectSpec[];
  beforeAfter?: BeforeAfterImages;
}

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  featured?: boolean;
}

interface FilterOption {
  id: string;
  label: string;
  value: string;
  category: 'service' | 'location' | 'size';
}
```

#### Project Filter Component
```typescript
interface ProjectFilterProps {
  filters: FilterOption[];
  activeFilters: string[];
  onFilterChange: (filters: string[]) => void;
  clearFilters: () => void;
}
```

### Contact Components

#### Contact Form Component
```typescript
interface ContactFormProps {
  variant: 'general' | 'service-inquiry' | 'quote-request';
  onSubmit: (data: ContactFormData) => Promise<void>;
  showWhatsAppOption?: boolean;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType?: string;
  bhkSize?: string;
  location?: string;
  budget?: string;
  timeline?: string;
  message: string;
  preferredContact?: 'email' | 'phone' | 'whatsapp';
}
```

#### WhatsApp Integration Component
```typescript
interface WhatsAppButtonProps {
  message?: string;
  phoneNumber: string;
  showOnline?: boolean;
}
```

## Data Models

### Service Data Model
```typescript
interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  images: string[];
  priceRange: {
    bhk2: { min: number; max: number };
    bhk3: { min: number; max: number };
    bhk4: { min: number; max: number };
  };
  timeline: string;
  warranty: string;
  category: 'kitchen' | 'furniture' | 'ceiling' | 'wardrobe' | 'renovation';
}
```

### Project Data Model
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  location: {
    city: string;
    state: string;
  };
  serviceTypes: string[];
  bhkSize: '1BHK' | '2BHK' | '3BHK' | '4BHK+';
  timeline: {
    start: Date;
    end: Date;
    duration: string;
  };
  images: {
    before: ProjectImage[];
    after: ProjectImage[];
    process?: ProjectImage[];
  };
  specifications: {
    area: string;
    budget: string;
    materials: string[];
    features: string[];
  };
  testimonial?: {
    clientName: string;
    rating: number;
    comment: string;
  };
}
```

### Contact Data Model
```typescript
interface ContactInquiry {
  id: string;
  timestamp: Date;
  type: 'general' | 'service-inquiry' | 'quote-request';
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  project: {
    type: string[];
    bhkSize?: string;
    location: string;
    budget?: string;
    timeline?: string;
  };
  message: string;
  source: string;
  status: 'new' | 'contacted' | 'quoted' | 'converted';
}
```

### Content Data Model
```typescript
interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaButtons: CTAButton[];
  };
  services: Service[];
  testimonials: Testimonial[];
  projects: Project[];
  company: {
    name: string;
    tagline: string;
    description: string;
    founded: number;
    projectCount: number;
    experience: string;
    certifications: string[];
    contact: {
      phone: string;
      email: string;
      whatsapp: string;
      address: {
        street: string;
        city: string;
        state: string;
        pincode: string;
      };
    };
  };
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

After analyzing the acceptance criteria, I identified several properties that can be tested across varying inputs:

### Property 1: Responsive Layout Consistency
*For any* viewport size within supported ranges (320px to 1920px width), all page layouts should maintain proper element positioning, readability, and functionality without horizontal scrolling or element overflow.
**Validates: Requirements 1.4**

### Property 2: Navigation Consistency
*For any* page navigation sequence, the navigation elements (logo, menu items, active states) should remain consistent in appearance, positioning, and functionality across all pages.
**Validates: Requirements 2.5**

### Property 3: Brand Color Consistency
*For any* component or element that should use the brand color palette, the colors should be drawn from the predefined warm orange color scheme and maintain visual consistency.
**Validates: Requirements 3.2**

### Property 4: Project Filter Accuracy
*For any* combination of filters applied to the project gallery, all displayed projects should match the selected filter criteria, and no projects matching the criteria should be excluded.
**Validates: Requirements 5.2**

### Property 5: Form Validation Completeness
*For any* contact form submission, all required fields should be validated, and the form should accept valid data while rejecting invalid inputs with appropriate error messages.
**Validates: Requirements 6.2, 6.4**

### Property 6: Call-to-Action Button Presence
*For any* page or section view, relevant call-to-action buttons should be present, properly styled, and functional according to the user's current context and journey stage.
**Validates: Requirements 6.5**

### Property 7: Currency Format Consistency
*For any* pricing information displayed throughout the website, all currency values should use the Indian Rupee (₹) format with proper number formatting and consistent units.
**Validates: Requirements 8.1**

### Property 8: Image Optimization Compliance
*For any* image displayed on the website, the image should be properly optimized for web delivery with appropriate compression, format selection, and responsive sizing.
**Validates: Requirements 9.1**

### Property 9: Lazy Loading Implementation
*For any* portfolio or gallery images, images should load only when they enter or are about to enter the viewport, reducing initial page load time and data usage.
**Validates: Requirements 9.2**

## Error Handling

### Client-Side Error Handling

#### Form Validation Errors
- **Required Field Validation**: Display inline error messages for empty required fields
- **Format Validation**: Validate email format, phone number format (Indian mobile numbers)
- **Length Validation**: Ensure message fields meet minimum/maximum length requirements
- **Real-time Validation**: Provide immediate feedback as users type

#### Image Loading Errors
- **Fallback Images**: Display placeholder images when project images fail to load
- **Progressive Loading**: Show low-resolution placeholders while high-resolution images load
- **Error Retry**: Implement retry mechanism for failed image loads

#### Navigation Errors
- **404 Page**: Custom not-found page with navigation back to main sections
- **Broken Links**: Monitor and handle internal link errors gracefully
- **Mobile Menu**: Ensure mobile navigation closes properly on route changes

### Server-Side Error Handling

#### Form Submission Errors
- **API Failures**: Graceful handling of contact form submission failures
- **Validation Errors**: Server-side validation with detailed error responses
- **Rate Limiting**: Implement rate limiting for form submissions to prevent spam

#### Performance Errors
- **Bundle Loading**: Error boundaries for JavaScript chunk loading failures
- **API Timeouts**: Timeout handling for external API calls (WhatsApp integration)
- **Resource Loading**: Fallback strategies for CDN resource failures

## Testing Strategy

The BIOSPACE website will use a comprehensive testing approach combining unit tests and property-based tests to ensure reliability and correctness.

### Property-Based Testing

Property-based testing is appropriate for this website as it involves user interface behavior, form validation, filtering logic, and responsive design that should work consistently across varying inputs.

**Library Selection**: Fast-check for JavaScript/TypeScript property-based testing

**Property Test Configuration**:
- Minimum 100 iterations per property test
- Each property test references its design document property
- Tag format: **Feature: biospace-website, Property {number}: {property_text}**

**Property Test Implementation**:

1. **Responsive Layout Property Test**
   - Generate random viewport dimensions within supported ranges
   - Verify layout elements maintain proper positioning and readability
   - **Feature: biospace-website, Property 1: Responsive Layout Consistency**

2. **Navigation Consistency Property Test** 
   - Generate random page navigation sequences
   - Verify navigation elements remain consistent across pages
   - **Feature: biospace-website, Property 2: Navigation Consistency**

3. **Brand Color Property Test**
   - Generate random component samples
   - Verify colors are drawn from predefined orange palette
   - **Feature: biospace-website, Property 3: Brand Color Consistency**

4. **Project Filter Property Test**
   - Generate random filter combinations
   - Verify displayed projects match all applied filter criteria
   - **Feature: biospace-website, Property 4: Project Filter Accuracy**

5. **Form Validation Property Test**
   - Generate random form inputs including invalid data
   - Verify validation works correctly for all input combinations
   - **Feature: biospace-website, Property 5: Form Validation Completeness**

6. **CTA Button Property Test**
   - Generate random page visits and contexts
   - Verify appropriate CTA buttons are present and functional
   - **Feature: biospace-website, Property 6: Call-to-Action Button Presence**

7. **Currency Format Property Test**
   - Generate random pricing content
   - Verify all prices use ₹ currency format consistently
   - **Feature: biospace-website, Property 7: Currency Format Consistency**

8. **Image Optimization Property Test**
   - Generate random image checks across different pages
   - Verify images are properly optimized and formatted
   - **Feature: biospace-website, Property 8: Image Optimization Compliance**

9. **Lazy Loading Property Test**
   - Generate random scroll behaviors and viewport positions
   - Verify images load only when entering viewport
   - **Feature: biospace-website, Property 9: Lazy Loading Implementation**

### Unit Testing

Unit tests will cover specific examples, edge cases, and integration points:

**Component Testing**:
- Hero section renders with correct content and CTAs
- Service cards display pricing tiers correctly
- Contact forms submit with proper data structure
- Navigation menu opens/closes correctly on mobile

**Integration Testing**:
- WhatsApp link generation with pre-filled messages
- Form submission to backend/email services
- Image loading and optimization in production environment
- Performance metrics meet Lighthouse score requirements

**End-to-End Testing**:
- Complete user journey from homepage to contact submission
- Cross-browser compatibility across major browsers
- Mobile device testing on actual devices
- Performance testing under 3G network conditions

### Performance Testing

- **Load Time Testing**: Verify homepage loads within 2 seconds on 3G
- **Bundle Size Testing**: Monitor and alert on JavaScript bundle size increases  
- **Lighthouse Testing**: Automated Lighthouse audits maintaining score above 90
- **CDN Testing**: Verify static assets are served from CDN in production

### Accessibility Testing

- **Screen Reader Testing**: Verify content is accessible via screen readers
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Color Contrast**: Verify brand colors meet WCAG contrast requirements
- **Focus Management**: Test focus management in modals and navigation

This comprehensive testing strategy ensures the BIOSPACE website delivers a reliable, performant, and accessible experience for all users while maintaining brand consistency and functionality across various conditions and inputs.