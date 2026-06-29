// Hybrid image configuration: Local images (primary) + Pexels (fallback)
import { pexelsImageMap } from './pexels-image-map';

// Map your 23 local WhatsApp project images to categories
export const localImages = {
  // Kitchen images (your actual projects)
  kitchen: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.18 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.19 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.20 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.21 PM.jpeg',
  ],
  
  // Bedroom/Wardrobe images
  bedroom: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.23 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.23 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM.jpeg',
  ],
  
  // Living room images
  living: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (2).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.25 PM.jpeg',
  ],
  
  // Wardrobe specific
  wardrobe: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.25 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM.jpeg',
  ],
  
  // Ceiling/Interior design
  ceiling: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (2).jpeg',
  ],
  
  // Renovation/Commercial spaces
  renovation: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (2).jpeg',
  ],
  
  // Commercial/Office
  commercial: [
    '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (1).jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (2).jpeg',
  ],
  
  // Hero/Gallery images
  gallery: [
    '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg',
    '/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg',
  ],
} as const;

export type ImageCategory = keyof typeof pexelsImageMap;

/**
 * Get image URL with hybrid strategy:
 * 1. Try local images first (your actual project photos)
 * 2. Fall back to Pexels if needed
 * 3. Use placeholder as last resort
 * 
 * @param category - Image category (kitchen, bedroom, etc.)
 * @param index - Index for multiple images in same category (optional)
 * @param useLocal - Prefer local images (default: true)
 * @returns Image URL
 */
export function getImageUrl(
  category: ImageCategory, 
  index: number = 0,
  useLocal: boolean = true
): string {
  // Try local images first
  if (useLocal && localImages[category] && localImages[category][index]) {
    return localImages[category][index];
  }
  
  // Fall back to Pexels
  if (pexelsImageMap[category]) {
    return pexelsImageMap[category];
  }
  
  // Last resort placeholder
  return '/images/Logo.jpeg';
}

/**
 * Get random local image from category
 */
export function getRandomLocalImage(category: ImageCategory): string {
  const images = localImages[category];
  if (images && images.length > 0) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  return pexelsImageMap[category] || '/images/Logo.jpeg';
}

/**
 * Get all images for a category (both local and Pexels)
 */
export function getAllImages(category: ImageCategory): string[] {
  const images: string[] = [];
  
  // Add local images
  if (localImages[category]) {
    images.push(...localImages[category]);
  }
  
  // Add Pexels image
  if (pexelsImageMap[category]) {
    images.push(pexelsImageMap[category]);
  }
  
  return images;
}

/**
 * Check if local images exist for category
 */
export function hasLocalImages(category: ImageCategory): boolean {
  return localImages[category] && localImages[category].length > 0;
}

// Export for convenience
export { pexelsImageMap };
