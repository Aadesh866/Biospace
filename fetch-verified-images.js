const https = require('https');

// Strategy: Use Wikipedia article LEAD IMAGES via the pageimages API.
// These are editorially curated by Wikipedia editors and GUARANTEED to visually 
// represent the exact topic. This is fundamentally different from "searching" 
// Commons with keywords (which returns random, often irrelevant results).
//
// We also use multiple fallback article titles per category, and filter out
// non-web formats like .tiff and .svg.

const categories = {
  kitchen: [
    'Kitchen',
    'Fitted kitchen', 
    'Countertop',
    'Kitchen cabinet'
  ],
  wardrobe: [
    'Wardrobe',
    'Closet',
    'Armoire',
    'Walk-in closet'
  ],
  living: [
    'Living room',
    'Family room',
    'Drawing room'
  ],
  ceiling: [
    'Dropped ceiling',
    'Ceiling',
    'Coffered ceiling',
    'Tray ceiling'
  ],
  renovation: [
    'Interior design',
    'Home improvement',
    'Renovation'
  ],
  commercial: [
    'Office',
    'Open-plan office',
    'Coworking'
  ],
  bedroom: [
    'Bedroom',
    'Master bedroom',
    'Bed'
  ]
};

function fetchArticleImage(articleTitle) {
  return new Promise((resolve, reject) => {
    const url = new URL(
      `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(articleTitle)}&prop=pageimages&pithumbsize=1200&format=json`
    );
    const options = { headers: { 'User-Agent': 'BioSpaceInteriors/1.0 (abiaadesh29@gmail.com)' } };

    https.get(url, options, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const data = JSON.parse(d);
          const pages = data.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pages[pageId] && pages[pageId].thumbnail) {
            const imgUrl = pages[pageId].thumbnail.source;
            const lower = imgUrl.toLowerCase();
            // Filter out non-web formats
            if (lower.includes('.tiff') || lower.includes('.svg') || lower.includes('.pdf')) {
              resolve(null);
            } else {
              resolve(imgUrl);
            }
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function fetchWithFallbacks(category, articleTitles) {
  for (const title of articleTitles) {
    console.log(`  Trying "${title}"...`);
    const url = await fetchArticleImage(title);
    if (url) {
      console.log(`  ✓ Found: ${url}`);
      return url;
    }
    console.log(`  ✗ No usable image`);
  }
  return null;
}

async function main() {
  console.log('=== BioSpace Wikipedia Image Pipeline ===\n');
  const results = {};

  for (const [category, titles] of Object.entries(categories)) {
    console.log(`[${category.toUpperCase()}]`);
    const url = await fetchWithFallbacks(category, titles);
    results[category] = url;
    console.log('');
  }

  console.log('\n=== FINAL RESULTS ===');
  for (const [cat, url] of Object.entries(results)) {
    console.log(`${cat}: ${url || 'FAILED'}`);
  }

  const fs = require('fs');
  fs.writeFileSync('verified-images.json', JSON.stringify(results, null, 2));
  console.log('\nSaved to verified-images.json');
}

main();
