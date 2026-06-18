import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Currency formatting for Indian Rupees
export function formatCurrency(amount: number, unit: 'Lakhs' | 'Crores' = 'Lakhs'): string {
  if (unit === 'Lakhs') {
    return `₹${amount}L`
  }
  return `₹${amount}Cr`
}

// Phone number formatting for Indian numbers
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Format as +91 XXXXX XXXXX
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`
  }
  
  // If already includes country code
  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return `+91 ${cleaned.slice(2, 7)} ${cleaned.slice(7)}`
  }
  
  return phone
}

// WhatsApp URL generator
export function generateWhatsAppURL(phoneNumber: string, message?: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, '')
  const encodedMessage = message ? encodeURIComponent(message) : ''
  
  return `https://wa.me/91${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`
}

// SEO meta description generator
export function generateMetaDescription(
  serviceName?: string, 
  location?: string,
  price?: string
): string {
  const base = "BIOSPACE - Premium interior design & build services. 24-48hr site visits, 30-year kitchen warranty, 1-week completion."
  
  if (serviceName && location && price) {
    return `${serviceName} in ${location} starting from ${price}. ${base}`
  }
  
  if (serviceName) {
    return `${serviceName} - ${base}`
  }
  
  return base
}

// URL slug generator
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
}

// Scroll to element utility
export function scrollToElement(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Device detection
export function isMobile(): boolean {
  return typeof window !== 'undefined' && window.innerWidth < 768
}

// Local storage utilities
export function setLocalStorage(key: string, value: any): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export function getLocalStorage(key: string): any {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }
  return null
}

// Image optimization helper
export function getOptimizedImageUrl(
  src: string, 
  width: number = 800, 
  quality: number = 80
): string {
  // For Unsplash images
  if (src.includes('unsplash.com')) {
    return `${src}&auto=format&fit=crop&q=${quality}&w=${width}`
  }
  
  // For local images, return as-is (Next.js Image component will handle optimization)
  return src
}

// Form validation helpers
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateIndianPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/\D/g, '')
  
  // Indian mobile numbers are 10 digits starting with 6,7,8,9
  return cleanPhone.length === 10 && /^[6-9]/.test(cleanPhone)
}

// Date formatting
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

// Project timeline calculation
export function calculateProjectDuration(bhkType: string, serviceTypes: string[]): string {
  const baseDays: Record<string, number> = {
    '1BHK': 3,
    '2BHK': 5,
    '3BHK': 7,
    '4BHK+': 10
  }
  
  const serviceMultipliers: Record<string, number> = {
    'modular-kitchen': 1,
    'wardrobes': 0.5,
    'living-room': 0.8,
    'false-ceiling': 0.3,
    'complete-renovation': 2
  }
  
  let totalDays = baseDays[bhkType] || 5
  
  serviceTypes.forEach(service => {
    if (serviceMultipliers[service]) {
      totalDays += Math.ceil(totalDays * serviceMultipliers[service])
    }
  })
  
  return totalDays <= 7 ? `${totalDays} Days` : `${Math.ceil(totalDays / 7)} Week${totalDays > 14 ? 's' : ''}`
}

// Price calculation helper
export function calculateEstimatedPrice(
  bhkType: string, 
  serviceTypes: string[]
): { min: number; max: number; unit: 'Lakhs' } {
  const basePrices: Record<string, { min: number; max: number }> = {
    '1BHK': { min: 2, max: 4 },
    '2BHK': { min: 3, max: 7 },
    '3BHK': { min: 4, max: 12 },
    '4BHK+': { min: 8, max: 16 }
  }
  
  const serviceAdjustments: Record<string, number> = {
    'modular-kitchen': 1.5,
    'wardrobes': 1.2,
    'living-room': 1.3,
    'false-ceiling': 1.1,
    'complete-renovation': 2.5
  }
  
  let basePrice = basePrices[bhkType] || basePrices['2BHK']
  
  if (serviceTypes.length > 1) {
    const maxAdjustment = Math.max(...serviceTypes.map(s => serviceAdjustments[s] || 1))
    basePrice = {
      min: Math.ceil(basePrice.min * maxAdjustment * 0.8),
      max: Math.ceil(basePrice.max * maxAdjustment)
    }
  }
  
  return { ...basePrice, unit: 'Lakhs' }
}