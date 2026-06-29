const https = require('https');
const fs = require('fs');
const path = require('path');

/**
 * Extract all image URLs from TypeScript/TSX files
 */
function extractImageUrls(dir) {
  const urls = new Set();
  
  function walk(currentPath) {
    try {
      const files = fs.readdirSync(currentPath);
      
      for (const file of files) {
        const fullPath = path.join(currentPath, file);
        
        let stat;
        try {
          stat = fs.statSync(fullPath);
        } catch (err) {
          // Skip files we can't access (permissions, broken symlinks, etc.)
          console.log(`  Warning: Cannot access ${fullPath}, skipping...`);
          continue;
        }
        
        if (stat.isDirectory() && !fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
          walk(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            
            // Match various image URL patterns
            const patterns = [
              /https:\/\/images\.unsplash\.com\/[^\s'"]+/g,
              /https:\/\/upload\.wikimedia\.org\/[^\s'"]+/g,
              /https:\/\/images\.pexels\.com\/[^\s'"]+/g,
              /\/images\/[^\s'"]+\.(?:jpg|jpeg|png|webp|gif|svg)/gi
            ];
            
            for (const pattern of patterns) {
              const matches = content.match(pattern);
              if (matches) {
                matches.forEach(url => {
                  // Clean up URL (remove query params for display, but keep for checking)
                  const cleanUrl = url.trim();
                  urls.add(cleanUrl);
                });
              }
            }
          } catch (err) {
            console.log(`  Warning: Cannot read ${fullPath}, skipping...`);
          }
        }
      }
    } catch (err) {
      console.log(`  Warning: Cannot read directory ${currentPath}, skipping...`);
    }
  }
  
  walk(dir);
  return Array.from(urls);
}

/**
 * Check if a URL is accessible
 */
function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : require('http');
    const isLocal = url.startsWith('/images/');
    
    if (isLocal) {
      // Check local file system
      const localPath = path.join(process.cwd(), 'public', url);
      const exists = fs.existsSync(localPath);
      resolve({
        url,
        status: exists ? 200 : 404,
        accessible: exists,
        type: 'local'
      });
      return;
    }
    
    // Check remote URL
    const timeout = setTimeout(() => {
      resolve({
        url,
        status: 0,
        accessible: false,
        type: 'remote',
        error: 'timeout'
      });
    }, 10000);
    
    try {
      protocol.get(url, (res) => {
        clearTimeout(timeout);
        resolve({
          url,
          status: res.statusCode,
          accessible: res.statusCode === 200,
          type: 'remote',
          redirected: res.statusCode >= 300 && res.statusCode < 400
        });
      }).on('error', (err) => {
        clearTimeout(timeout);
        resolve({
          url,
          status: 0,
          accessible: false,
          type: 'remote',
          error: err.message
        });
      });
    } catch (err) {
      clearTimeout(timeout);
      resolve({
        url,
        status: 0,
        accessible: false,
        type: 'remote',
        error: err.message
      });
    }
  });
}

/**
 * Main verification process
 */
async function main() {
  console.log('=== IMAGE URL VERIFICATION TOOL ===\n');
  
  console.log('Scanning codebase for image URLs...');
  const urls = extractImageUrls('src');
  
  console.log(`Found ${urls.length} unique image URLs\n`);
  console.log('Verifying accessibility...\n');
  
  const results = {
    total: urls.length,
    accessible: 0,
    broken: 0,
    local: 0,
    remote: 0,
    details: []
  };
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    process.stdout.write(`[${i + 1}/${urls.length}] Checking: ${url.substring(0, 60)}...`);
    
    const result = await checkUrl(url);
    results.details.push(result);
    
    if (result.accessible) {
      results.accessible++;
      console.log(' ✓ OK');
    } else {
      results.broken++;
      console.log(` ✗ BROKEN (${result.status || result.error})`);
    }
    
    if (result.type === 'local') {
      results.local++;
    } else {
      results.remote++;
    }
    
    // Rate limiting for remote requests
    if (result.type === 'remote') {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  // Summary
  console.log('\n=== VERIFICATION SUMMARY ===');
  console.log(`Total URLs found: ${results.total}`);
  
  if (results.total === 0) {
    console.log('\n⚠ WARNING: No image URLs found in the codebase!');
    console.log('This could mean:');
    console.log('  1. No images are being used');
    console.log('  2. Images are imported differently');
    console.log('  3. The scan pattern needs to be updated\n');
  } else {
    console.log(`✓ Accessible: ${results.accessible} (${((results.accessible/results.total)*100).toFixed(1)}%)`);
    console.log(`✗ Broken: ${results.broken} (${((results.broken/results.total)*100).toFixed(1)}%)`);
    console.log(`  Local images: ${results.local}`);
    console.log(`  Remote images: ${results.remote}\n`);
  }
  
  // Broken URLs report
  const brokenUrls = results.details.filter(r => !r.accessible);
  if (brokenUrls.length > 0) {
    console.log('=== BROKEN URLS ===');
    brokenUrls.forEach(r => {
      console.log(`✗ ${r.url}`);
      console.log(`  Status: ${r.status || 'N/A'}`);
      if (r.error) console.log(`  Error: ${r.error}`);
      console.log();
    });
  }
  
  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: results.total,
      accessible: results.accessible,
      broken: results.broken,
      local: results.local,
      remote: results.remote
    },
    brokenUrls: brokenUrls.map(r => ({
      url: r.url,
      status: r.status,
      error: r.error
    })),
    allResults: results.details
  };
  
  fs.writeFileSync('image-verification-report.json', JSON.stringify(report, null, 2));
  console.log('✓ Full report saved to image-verification-report.json\n');
  
  if (results.broken > 0) {
    console.log('⚠ WARNING: Some images are broken! Run npm run fix:images to resolve.');
    process.exit(1);
  } else {
    console.log('✓ All images are accessible!');
  }
}

main().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
