const https = require('https');

// Strategy: Browse SPECIFIC Wikimedia Commons CATEGORIES.
// Categories are human-curated collections, much more reliable than search.
// We also try multiple category names per topic.

const categoryMap = {
  kitchen: ['Modular_kitchens', 'Kitchen_interiors', 'Kitchens', 'Kitchen_design'],
  wardrobe: ['Walk-in_closets', 'Wardrobes', 'Closets', 'Built-in_wardrobes'],
  living: ['Living_rooms', 'Interior_design', 'Living_room_furniture'],
  ceiling: ['Suspended_ceilings', 'False_ceilings', 'Ceiling_design', 'Dropped_ceilings', 'Ceilings'],
  renovation: ['Home_improvement', 'Interior_design', 'House_renovation'],
  commercial: ['Office_interiors', 'Open-plan_offices', 'Coworking_spaces', 'Office_buildings_in_India'],
  bedroom: ['Bedrooms', 'Bedroom_interiors', 'Bedroom_furniture']
};

function apiRequest(url) {
  return new Promise((resolve, reject) => {
    const options = { headers: { 'User-Agent': 'BioSpaceInteriors/1.0 (abiaadesh29@gmail.com)' } };
    https.get(new URL(url), options, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); }
        catch (e) { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

async function getCategoryFiles(categoryName) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${encodeURIComponent(categoryName)}&cmtype=file&cmlimit=10&format=json`;
  const data = await apiRequest(url);
  if (!data || !data.query || !data.query.categorymembers) return [];
  
  // Filter to only .jpg/.jpeg/.png files (no .svg, .tiff, .pdf)
  return data.query.categorymembers
    .map(m => m.title)
    .filter(t => {
      const lower = t.toLowerCase();
      return (lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png'))
        && !lower.includes('logo') && !lower.includes('icon') && !lower.includes('map')
        && !lower.includes('diagram') && !lower.includes('plan') && !lower.includes('blueprint');
    });
}

async function getFileUrl(fileTitle) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url|size&format=json`;
  const data = await apiRequest(url);
  if (!data || !data.query) return null;
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  if (pages[pageId] && pages[pageId].imageinfo) {
    const info = pages[pageId].imageinfo[0];
    // Prefer images that are reasonably sized (at least 400px wide)
    if (info.width && info.width >= 400) {
      // Use thumb URL for consistent sizing
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/${getThumbPath(info.url)}/1280px-${getFileName(info.url)}`;
    }
    return info.url;
  }
  return null;
}

function getThumbPath(url) {
  // Extract the hash path from the full URL
  const match = url.match(/\/commons\/([a-f0-9]\/[a-f0-9]{2})\//);
  return match ? match[1] : '';
}

function getFileName(url) {
  return decodeURIComponent(url.split('/').pop());
}

async function findBestImage(category, categoryNames) {
  for (const catName of categoryNames) {
    console.log(`  Trying Category:${catName}...`);
    const files = await getCategoryFiles(catName);
    
    if (files.length === 0) {
      console.log(`    No usable files found`);
      continue;
    }
    
    console.log(`    Found ${files.length} image files`);
    
    // Get URL for the first valid file
    for (const file of files.slice(0, 3)) {
      console.log(`    Checking: ${file}`);
      const url = await getFileUrl(file);
      if (url) {
        console.log(`    ✓ URL: ${url}`);
        return { title: file, url };
      }
    }
  }
  return null;
}

async function main() {
  console.log('=== BioSpace Commons Category Pipeline ===\n');
  const results = {};

  for (const [category, catNames] of Object.entries(categoryMap)) {
    console.log(`[${category.toUpperCase()}]`);
    const result = await findBestImage(category, catNames);
    results[category] = result ? result.url : null;
    if (result) {
      console.log(`  >> SELECTED: ${result.title}`);
    } else {
      console.log(`  >> FAILED - no image found`);
    }
    console.log('');
  }

  console.log('\n=== FINAL MAPPING ===');
  for (const [cat, url] of Object.entries(results)) {
    console.log(`${cat}: ${url || 'NEEDS FALLBACK'}`);
  }

  const fs = require('fs');
  fs.writeFileSync('verified-images.json', JSON.stringify(results, null, 2));
  console.log('\nSaved to verified-images.json');
}

main();
