const https = require('https');
const fs = require('fs');

// PEXELS API KEY - Get yours at: https://www.pexels.com/api/
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || 'YOUR_API_KEY_HERE';

// Context-aware search queries optimized for interior design
const searchQueries = {
  kitchen: [
    'modern modular kitchen interior',
    'luxury kitchen island design',
    'contemporary kitchen cabinet',
    'modular kitchen india'
  ],
  wardrobe: [
    'luxury wardrobe interior',
    'walk-in closet modern',
    'sliding wardrobe design',
    'bedroom wardrobe furniture'
  ],
  living: [
    'modern living room interior',
    'luxury living room sofa',
    'contemporary living space design',
    'living room false ceiling'
  ],
  ceiling: [
    'false ceiling design modern',
    'pop ceiling with lights',
    'modern ceiling interior led',
    'living room ceiling design'
  ],
  renovation: [
    'home interior renovation',
    'modern home makeover interior',
    'luxury apartment renovation',
    'complete home interior design'
  ],
  commercial: [
    'modern office interior design',
    'corporate office workspace',
    'commercial interior architecture',
    'professional office space'
  ],
  bedroom: [
    'modern bedroom interior design',
    'luxury master bedroom',
    'contemporary bedroom furniture',
    'bedroom false ceiling design'
  ]
};

/**
 * Fetch images from Pexels API with proper error handling
 */
function fetchPexelsImages(query, perPage = 20) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`;
    
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
            resolve(json.photos || []);
          } else if (res.statusCode === 401) {
            console.error('❌ Pexels API Key invalid or missing!');
            resolve([]);
          } else {
            console.error(`❌ Pexels API returned status ${res.statusCode}`);
            resolve([]);
          }
        } catch (e) {
          console.error('❌ Failed to parse Pexels response:', e.message);
          resolve([]);
        }
      });
    }).on('error', (e) => {
      console.error('❌ Network error:', e.message);
      resolve([]);
    });
  });
}

/**
 * Filter images to ensure they're high quality and relevant
 */
function filterImages(photos) {
  if (!Array.isArray(photos)) {
    console.log('    Warning: photos is not an array');
    return [];
  }
  
  return photos.filter(photo => {
    // Ensure photo object has required properties
    if (!photo || !photo.width || !photo.height || !photo.src) {
      return false;
    }
    // Ensure minimum dimensions for quality
    return photo.width >= 1920 && photo.height >= 1080;
  }).map(photo => ({
    url: photo.src.large2x || photo.src.large || photo.src.original,
    photographer: photo.photographer || 'Unknown',
    photographer_url: photo.photographer_url || '',
    alt: photo.alt || 'Interior design'
  }));
}

/**
 * Fetch images with fallback queries
 */
async function fetchWithFallbacks(category, queries) {
  console.log(`\n[${category.toUpperCase()}]`);
  
  for (const query of queries) {
    console.log(`  Trying: "${query}"...`);
    
    const photos = await fetchPexelsImages(query, 10);
    const filtered = filterImages(photos);
    
    if (filtered.length > 0) {
      console.log(`  ✓ Found ${filtered.length} high-quality images`);
      return filtered[0]; // Return the best match
    }
    
    console.log(`  ✗ No suitable images found`);
  }
  
  console.log(`  ⚠ All queries failed for ${category}`);
  return null;
}

/**
 * Verify that image URLs are accessible
 */
function verifyImageUrl(url) {
  return new Promise((resolve) => {
    // Set timeout to prevent hanging
    const timeout = setTimeout(() => {
      console.log('    (timeout after 10s)');
      resolve(false);
    }, 10000);
    
    https.get(url, (res) => {
      clearTimeout(timeout);
      resolve(res.statusCode === 200);
    }).on('error', (err) => {
      clearTimeout(timeout);
      console.log(`    (error: ${err.message})`);
      resolve(false);
    });
  });
}

/**
 * Main pipeline execution
 */
async function main() {
  console.log('=== BIOSPACE PEXELS IMAGE PIPELINE ===');
  console.log('Purpose: Fetch context-aware interior design images\n');
  
  if (PEXELS_API_KEY === 'YOUR_API_KEY_HERE') {
    console.error('❌ ERROR: Please set PEXELS_API_KEY environment variable');
    console.error('Get your free API key at: https://www.pexels.com/api/\n');
    process.exit(1);
  }

  const results = {};
  
  // Fetch images for each category
  for (const [category, queries] of Object.entries(searchQueries)) {
    const image = await fetchWithFallbacks(category, queries);
    
    if (image) {
      // Verify the URL works
      console.log(`  Verifying URL...`);
      const isValid = await verifyImageUrl(image.url);
      
      if (isValid) {
        console.log(`  ✓ URL verified and accessible`);
        results[category] = image;
      } else {
        console.log(`  ✗ URL verification failed`);
        results[category] = null;
      }
    } else {
      results[category] = null;
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Generate summary
  console.log('\n=== RESULTS SUMMARY ===');
  const successful = Object.values(results).filter(r => r !== null).length;
  console.log(`Successfully fetched: ${successful}/${Object.keys(results).length} categories\n`);
  
  for (const [category, image] of Object.entries(results)) {
    if (image) {
      console.log(`✓ ${category}: ${image.url}`);
      console.log(`  Credit: ${image.photographer} (${image.photographer_url})`);
    } else {
      console.log(`✗ ${category}: FAILED`);
    }
  }

  // Save results
  const outputFile = 'pexels-images.json';
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`\n✓ Results saved to ${outputFile}`);
  
  // Generate image mapping for code - NOW WITH ARRAYS OF IMAGES
  const imageMap = {};
  for (const [category, image] of Object.entries(results)) {
    // Save as array with single image for now (will expand later)
    imageMap[category] = image ? [image.url] : ['/images/placeholder.jpg'];
  }
  
  // Validate that we have at least some successful images
  const successCount = Object.values(imageMap).filter(urls => urls[0] !== '/images/placeholder.jpg').length;
  if (successCount === 0) {
    console.error('\n❌ ERROR: No images were successfully fetched!');
    console.error('This could be due to:');
    console.error('  1. Invalid API key');
    console.error('  2. Network connectivity issues');
    console.error('  3. Pexels API being down');
    console.error('\nPlease check your setup and try again.\n');
    process.exit(1);
  }
  
  const mappingFile = 'src/lib/pexels-image-map.ts';
  const mappingContent = `// Auto-generated by scripts/fetch-pexels-images.js
// DO NOT EDIT MANUALLY
// Generated: ${new Date().toISOString()}

export const pexelsImageMap = ${JSON.stringify(imageMap, null, 2)} as const;

export type ImageCategory = keyof typeof pexelsImageMap;

// Helper function to get image URL with fallback
// Now returns different images based on index
export function getImageUrl(category: ImageCategory, index = 0): string {
  const images = pexelsImageMap[category];
  if (images && images.length > 0) {
    // Use modulo to cycle through available images
    const imageIndex = index % images.length;
    return images[imageIndex];
  }
  return '/images/placeholder.jpg';
}

// Helper function to get image URL with fallback
export function getImageUrl(category: ImageCategory, fallback = '/images/placeholder.jpg'): string {
  return pexelsImageMap[category] || fallback;
}
`;
  
  try {
    fs.mkdirSync('src/lib', { recursive: true });
    fs.writeFileSync(mappingFile, mappingContent);
    console.log(`✓ TypeScript mapping saved to ${mappingFile}`);
  } catch (err) {
    console.error(`❌ Failed to write TypeScript mapping: ${err.message}`);
    process.exit(1);
  }
  
  console.log('\n=== NEXT STEPS ===');
  console.log('1. Review pexels-images.json to verify image quality');
  console.log('2. Update components to use pexelsImageMap from src/lib/pexels-image-map.ts');
  console.log('3. Consider adding local fallback images for offline development\n');
}

// Run the pipeline
main().catch(err => {
  console.error('Pipeline failed:', err);
  process.exit(1);
});
