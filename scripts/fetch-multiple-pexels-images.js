const https = require('https');
const fs = require('fs');

// PEXELS API KEY
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || 'YOUR_API_KEY_HERE';

// How many unique images per category
const IMAGES_PER_CATEGORY = 20;

// Search queries for each category - VERY SPECIFIC to avoid bedroom images
const searchQueries = {
  kitchen: 'kitchen cabinets countertop stove',
  wardrobe: 'closet wardrobe clothes storage',
  living: 'living room sofa couch furniture',
  ceiling: 'ceiling lights chandelier interior',
  renovation: 'construction renovation painting walls',
  commercial: 'office desk computer workspace',
  bedroom: 'bedroom bed mattress pillow'
};

/**
 * Fetch multiple images from Pexels
 */
function fetchPexelsImages(query, count = 20) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`;
    
    const options = {
      headers: {
        'Authorization': PEXELS_API_KEY
      }
    };

    https.get(url, options, (res) => {
      let data = '';
      
      res.on('data', chunk => data += chunk);
      
      res.on('end', () => {
        try {
          if (res.statusCode === 200) {
            const json = JSON.parse(data);
            const photos = json.photos || [];
            
            // Filter for quality (min 1920x1080)
            const filtered = photos.filter(p => {
              const src = p.src?.large2x || p.src?.large || '';
              return src && p.width >= 1920 && p.height >= 1080;
            });
            
            // Extract URLs
            const urls = filtered.map(p => p.src.large2x || p.src.large);
            
            resolve(urls);
          } else {
            console.error(`❌ API returned status ${res.statusCode}`);
            resolve([]);
          }
        } catch (e) {
          console.error(`❌ Parse error: ${e.message}`);
          resolve([]);
        }
      });
    }).on('error', (e) => {
      console.error(`❌ Request error: ${e.message}`);
      resolve([]);
    });
  });
}

/**
 * Main execution
 */
async function main() {
  console.log('=== FETCHING MULTIPLE PEXELS IMAGES ===\n');
  
  if (PEXELS_API_KEY === 'YOUR_API_KEY_HERE') {
    console.error('❌ ERROR: Set PEXELS_API_KEY environment variable');
    process.exit(1);
  }

  const results = {};
  
  for (const [category, query] of Object.entries(searchQueries)) {
    console.log(`[${category.toUpperCase()}]`);
    console.log(`  Query: "${query}"`);
    
    const urls = await fetchPexelsImages(query, IMAGES_PER_CATEGORY);
    
    if (urls.length > 0) {
      console.log(`  ✓ Found ${urls.length} high-quality images`);
      results[category] = urls;
    } else {
      console.log(`  ✗ Failed to fetch images`);
      results[category] = [];
    }
    
    // Rate limit
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Summary
  console.log('\n=== SUMMARY ===');
  let total = 0;
  for (const [category, urls] of Object.entries(results)) {
    console.log(`${category}: ${urls.length} images`);
    total += urls.length;
  }
  console.log(`\nTotal: ${total} images fetched\n`);

  // Save JSON
  fs.writeFileSync('pexels-images-multiple.json', JSON.stringify(results, null, 2));
  console.log('✓ Saved to pexels-images-multiple.json');

  // Generate TypeScript file
  const tsContent = `// Auto-generated - DO NOT EDIT
// Generated: ${new Date().toISOString()}

export const pexelsImages = ${JSON.stringify(results, null, 2)} as const;

export type ImageCategory = keyof typeof pexelsImages;

/**
 * Get image URL by category and index
 * Uses modulo to cycle through available images
 */
export function getPexelsImage(category: ImageCategory, index: number = 0): string {
  const images = pexelsImages[category];
  if (!images || images.length === 0) {
    return '/images/placeholder.jpg';
  }
  const imageIndex = index % images.length;
  return images[imageIndex];
}

/**
 * Get random image from category
 */
export function getRandomPexelsImage(category: ImageCategory): string {
  const images = pexelsImages[category];
  if (!images || images.length === 0) {
    return '/images/placeholder.jpg';
  }
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

/**
 * Get all images for a category
 */
export function getAllPexelsImages(category: ImageCategory): string[] {
  return pexelsImages[category] || [];
}
`;

  fs.writeFileSync('src/lib/pexels-images-multiple.ts', tsContent);
  console.log('✓ Saved to src/lib/pexels-images-multiple.ts');
  
  console.log('\n✅ Done! Now each category has multiple unique images.\n');
}

main().catch(console.error);
