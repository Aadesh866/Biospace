// SEO configuration for BIOSPACE website
export const siteConfig = {
  name: 'BIOSPACE Interiors',
  title: 'BIOSPACE Interiors - Premium Interior Design & Modular Solutions in India',
  description: 'Transform your space with BIOSPACE Interiors. Modular kitchens with 30-year warranty, custom wardrobes, living room designs, and complete home renovations across India. 1000+ happy customers.',
  url: 'https://biospace-interiors.com',
  ogImage: '/images/Logo.jpeg',
  links: {
    whatsapp: 'https://wa.me/919876543210', // Update with actual number
    facebook: 'https://facebook.com/biospace',
    instagram: 'https://instagram.com/biospace',
  },
  keywords: [
    'interior design india',
    'modular kitchen',
    'custom wardrobes',
    'home renovation',
    'false ceiling design',
    'living room interior',
    'bedroom interior design',
    'commercial interior',
    'interior designer mumbai',
    'interior designer bangalore',
    'interior designer delhi',
    'modular kitchen india',
    '30 year warranty kitchen',
    'german hardware kitchen',
    'bhk interior design',
    '2 bhk interior',
    '3 bhk interior',
    '4 bhk interior',
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'BIOSPACE Interiors',
    description: 'Premium interior design and modular solutions',
    url: 'https://biospace-interiors.com',
    telephone: '+91-9876543210', // Update with actual
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'Mumbai', // Update with actual
      addressRegion: 'Maharashtra', // Update with actual
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.0760', // Update with actual
      longitude: '72.8777', // Update with actual
    },
    sameAs: [
      'https://facebook.com/biospace',
      'https://instagram.com/biospace',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  },
}

export const pageMetadata = {
  home: {
    title: 'Premium Interior Design & Modular Solutions | BIOSPACE Interiors',
    description: 'Transform your home with BIOSPACE Interiors. Modular kitchens with 30-year warranty, custom wardrobes, complete renovations. 24-48hr site visits. 1000+ happy customers across India.',
    keywords: 'interior design, modular kitchen, home renovation, custom wardrobes, interior designer india',
  },
  services: {
    title: 'Our Services - Modular Kitchens, Wardrobes & More | BIOSPACE',
    description: 'Comprehensive interior solutions: Modular kitchens (₹2.5L-8L), custom wardrobes, living room design, false ceilings, complete renovations. German hardware, 30-year warranty.',
    keywords: 'modular kitchen price, wardrobe design, living room interior, false ceiling, home renovation cost',
  },
  projects: {
    title: 'Our Projects - 1000+ Successful Interior Designs | BIOSPACE',
    description: 'Browse our portfolio of 1000+ completed interior projects across Mumbai, Bangalore, Delhi. 2 BHK, 3 BHK, 4 BHK designs. Real customer testimonials and project timelines.',
    keywords: '2 bhk interior design, 3 bhk interior, interior design portfolio, home interior projects india',
  },
  contact: {
    title: 'Contact Us - Get Free Quote & 24-48hr Site Visit | BIOSPACE',
    description: 'Get in touch for a free quote and consultation. 24-48 hour site visits across India. WhatsApp, phone, or form inquiry. Transform your space with BIOSPACE Interiors.',
    keywords: 'interior designer contact, free interior quote, site visit, interior design consultation',
  },
  about: {
    title: 'About Us - 1000+ Happy Customers | BIOSPACE Interiors',
    description: 'BIOSPACE Interiors - Your trusted partner for premium interior solutions. 30-year warranty on kitchens, 15-year warranty on furniture. Expert craftsmanship, timely delivery.',
    keywords: 'interior design company india, about biospace, interior designer credentials',
  },
}

export function generateMetadata(page: keyof typeof pageMetadata) {
  const metadata = pageMetadata[page]
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${siteConfig.url}${page === 'home' ? '' : `/${page}`}`,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${page === 'home' ? '' : `/${page}`}`,
    },
  }
}
