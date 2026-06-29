#!/usr/bin/env node

/**
 * Context-Aware Image Replacement System
 * 
 * This script intelligently analyzes WHERE images are used in the codebase
 * and replaces them with contextually appropriate images.
 * 
 * HOW IT WORKS:
 * 1. Scans all .tsx/.ts files for image URLs
 * 2. Analyzes the surrounding code context (component names, variables, text)
 * 3. Determines what TYPE of image should be there (kitchen, wardrobe, etc.)
 * 4. Replaces with the correct category image from Pexels
 */

const fs = require('fs');
const path = require('path');

/**
 * Context detection patterns
 * These help identify what type of image should be in a specific location
 */
const CONTEXT_PATTERNS = {
  kitchen: [
    /kitchen/i,
    /modular.*kitchen/i,
    /culinary/i,
    /cooking/i,
    /countertop/i,
    /cabinet/i,
    /appliance/i
  ],
  wardrobe: [
    /wardrobe/i,
    /closet/i,
    /armoire/i,
    /bedroom.*storage/i,
    /walk.*in/i,
    /clothing.*storage/i
  ],
  living: [
    /living.*room/i,
    /lounge/i,
    /sitting.*area/i,
    /sofa/i,
    /entertainment.*unit/i,
    /tv.*unit/i
  ],
  ceiling: [
    /ceiling/i,
    /false.*ceiling/i,
    /pop.*ceiling/i,
    /dropped.*ceiling/i,
    /coffered/i,
    /tray.*ceiling/i
  ],
  renovation: [
    /renovation/i,
    /remodel/i,
    /makeover/i,
    /transform/i,
    /complete.*home/i,
    /full.*home/i,
    /turnkey/i
  ],
  commercial: [
    /commercial/i,
    /office/i,
    /workspace/i,
    /corporate/i,
    /business/i,
    /professional.*space/i,
    /coworking/i
  ],
  bedroom: [
    /bedroom/i,
    /master.*bedroom/i,
    /sleeping.*area/i,
    /bed.*room/i
  ]
};

/**
 * Extract context around an image URL
 * Looks at surrounding 500 characters to understand context
 */
function extractContext(fileContent, imageUrl, filePath) {
  const urlIndex = fileContent.indexOf(imageUrl);
  if (urlIndex === -1) return null;
  
  // Get 500 chars before and after the URL
  const start = Math.max(0, urlIndex - 500);
  const end = Math.min(fileContent.length, urlIndex + 500);
  const context = fileContent.substring(start, end);
  
  return {
    context,
    urlIndex,
    filePath,
    imageUrl
  };
}

/**
 * Analyze context and determine image category
 */
function determineCategory(contextData) {
  const { context, filePath } = contextData;
  
  // Combine file path and surrounding text for analysis
  const analysisText = `${filePath} ${context}`;
  
  // Score each category based on pattern matches
  const scores = {};
  
  for (const [category, patterns] of Object.entries(CONTEXT_PATTERNS)) {
    scores[category] = 0;
    
    for (const pattern of patterns) {
      const matches = analysisText.match(pattern);
      if (matches) {
        scores[category] += matches.length;
      }
    }
  }
  
  // Find category with highest score
  let bestCategory = 'living'; // default fallback
  let highestScore = 0;
  
  for (const [category, score] of Object.entries(scores)) {
    if (score > highestScore) {
      highestScore = score;
      bestCategory = category;
    }
  }
  
  return {
    category: bestCategory,
    confidence: highestScore,
    scores
  };
}

/**
 * Find all image URLs in a file with their context
 */
function findImagesInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const results = [];
  
  // Patterns to match image URLs (including existing Pexels URLs to redistribute)
  const urlPatterns = [
    /https:\/\/images\.unsplash\.com\/[^\s'"]+/g,
    /https:\/\/upload\.wikimedia\.org\/[^\s'"]+/g,
    /https:\/\/images\.pexels\.com\/[^\s'"]+/g  // Also scan Pexels to redistribute
  ];
  
  for (const pattern of urlPatterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const imageUrl = match[0];
      const contextData = extractContext(content, imageUrl, filePath);
      
      if (contextData) {
        const analysis = determineCategory(contextData);
        
        results.push({
          file: filePath,
          url: imageUrl,
          category: analysis.category,
          confidence: analysis.confidence,
          scores: analysis.scores,
          line: content.substring(0, match.index).split('\n').length
        });
      }
    }
  }
  
  return results;
}

/**
 * Scan entire codebase
 */
function scanCodebase(dir = 'src') {
  const allFindings = [];
  
  function walk(currentPath) {
    if (!fs.existsSync(currentPath)) {
      console.log(`⚠️  Directory ${currentPath} not found, skipping...`);
      return;
    }
    
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const fullPath = path.join(currentPath, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !fullPath.includes('node_modules') && !fullPath.includes('.next')) {
        walk(fullPath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const findings = findImagesInFile(fullPath);
        allFindings.push(...findings);
      }
    }
  }
  
  walk(dir);
  return allFindings;
}

/**
 * Generate replacement plan
 */
function generateReplacementPlan(findings) {
  console.log('\n=== CONTEXT ANALYSIS RESULTS ===\n');
  
  // Group by file
  const byFile = {};
  
  for (const finding of findings) {
    if (!byFile[finding.file]) {
      byFile[finding.file] = [];
    }
    byFile[finding.file].push(finding);
  }
  
  // Display analysis
  for (const [file, items] of Object.entries(byFile)) {
    console.log(`\n📄 ${file}`);
    console.log('─'.repeat(80));
    
    for (const item of items) {
      const confidenceBar = '█'.repeat(Math.min(10, item.confidence)) + '░'.repeat(Math.max(0, 10 - item.confidence));
      
      console.log(`\nLine ${item.line}:`);
      console.log(`  Current:    ${item.url.substring(0, 60)}...`);
      console.log(`  Should be:  ${item.category.toUpperCase()} image`);
      console.log(`  Confidence: ${confidenceBar} (${item.confidence} matches)`);
      
      // Show scoring breakdown
      const sortedScores = Object.entries(item.scores)
        .filter(([_, score]) => score > 0)
        .sort((a, b) => b[1] - a[1]);
      
      if (sortedScores.length > 0) {
        console.log(`  Reasoning:`);
        for (const [category, score] of sortedScores.slice(0, 3)) {
          console.log(`    - ${category}: ${score} matches`);
        }
      }
    }
  }
  
  // Summary by category
  console.log('\n\n=== CATEGORY DISTRIBUTION ===\n');
  const categoryCounts = {};
  
  for (const finding of findings) {
    categoryCounts[finding.category] = (categoryCounts[finding.category] || 0) + 1;
  }
  
  for (const [category, count] of Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${category.padEnd(15)} ${count} images`);
  }
  
  console.log(`\n  TOTAL:          ${findings.length} images\n`);
  
  return byFile;
}

/**
 * Apply replacements using Pexels image map WITH MULTIPLE IMAGES
 */
function applyReplacements(byFile, dryRun = true) {
  console.log('\n=== APPLYING REPLACEMENTS ===\n');
  
  // Check if multiple images map exists
  const mapPath = 'src/lib/pexels-images-multiple.ts';
  
  if (!fs.existsSync(mapPath)) {
    console.error('❌ ERROR: pexels-images-multiple.ts not found!');
    console.error('Run: node scripts/fetch-multiple-pexels-images.js first\n');
    return;
  }
  
  // Read the image map
  const mapContent = fs.readFileSync(mapPath, 'utf8');
  const imageMap = {};
  
  // Parse the map to extract arrays of URLs
  const mapMatch = mapContent.match(/pexelsImages\s*=\s*({[\s\S]*?})\s*as const/);
  if (mapMatch) {
    try {
      // This is a simplified parser - extracts arrays of URLs
      const categories = ['kitchen', 'wardrobe', 'living', 'ceiling', 'renovation', 'commercial', 'bedroom'];
      
      for (const category of categories) {
        const regex = new RegExp(`"${category}":\\s*\\[([^\\]]+)\\]`, 's');
        const match = mapContent.match(regex);
        if (match) {
          const urlsText = match[1];
          const urls = urlsText.match(/"(https:\/\/[^"]+)"/g);
          if (urls) {
            imageMap[category] = urls.map(u => u.replace(/"/g, ''));
          }
        }
      }
    } catch (err) {
      console.error('❌ Failed to parse image map:', err.message);
      return;
    }
  }
  
  if (Object.keys(imageMap).length === 0) {
    console.error('❌ ERROR: Could not extract images from map!');
    return;
  }
  
  let totalImages = 0;
  for (const urls of Object.values(imageMap)) {
    totalImages += urls.length;
  }
  console.log(`✓ Loaded ${totalImages} images from map (${Object.keys(imageMap).length} categories)\n`);
  
  // Track how many images we've used per category to ensure variety
  const categoryCounters = {};
  for (const cat of Object.keys(imageMap)) {
    categoryCounters[cat] = 0;
  }
  
  let replacementCount = 0;
  
  for (const [file, items] of Object.entries(byFile)) {
    let fileContent = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    console.log(`\n📝 ${file}`);
    
    for (const item of items) {
      const urls = imageMap[item.category];
      
      if (!urls || urls.length === 0) {
        console.log(`  ⚠️  No ${item.category} images in map, skipping...`);
        continue;
      }
      
      // Get next image from this category (cycle through)
      const index = categoryCounters[item.category] % urls.length;
      const newUrl = urls[index];
      categoryCounters[item.category]++;
      
      if (!newUrl) {
        console.log(`  ⚠️  Invalid ${item.category} image at index ${index}, skipping...`);
        continue;
      }
      
      if (fileContent.includes(item.url)) {
        if (dryRun) {
          console.log(`  🔍 Would replace (line ${item.line}):`);
          console.log(`     ${item.url.substring(0, 50)}...`);
          console.log(`     → ${newUrl.substring(0, 50)}...`);
          console.log(`     (${item.category} image, confidence: ${item.confidence})`);
        } else {
          fileContent = fileContent.replace(item.url, newUrl);
          modified = true;
          replacementCount++;
          console.log(`  ✓ Replaced with ${item.category} image (line ${item.line})`);
        }
      } else {
        console.log(`  ⚠️  URL not found in file (may have been already replaced)`);
      }
    }
    
    if (modified && !dryRun) {
      fs.writeFileSync(file, fileContent, 'utf8');
      console.log(`  💾 Saved changes to ${file}`);
    }
  }
  
  console.log('\n' + '═'.repeat(80));
  
  if (dryRun) {
    console.log(`\n🔍 DRY RUN: Would replace ${replacementCount} images`);
    console.log('\nTo apply changes, run:');
    console.log('  node scripts/context-aware-image-replacement.js --apply\n');
  } else {
    console.log(`\n✅ Successfully replaced ${replacementCount} images!\n`);
  }
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  const dryRun = !args.includes('--apply');
  
  console.log('═══════════════════════════════════════════════════════════');
  console.log('  CONTEXT-AWARE IMAGE REPLACEMENT SYSTEM');
  console.log('═══════════════════════════════════════════════════════════');
  console.log('\nThis system analyzes your code to understand WHAT type of');
  console.log('image should be WHERE, then replaces them intelligently.\n');
  
  if (dryRun) {
    console.log('🔍 Running in DRY-RUN mode (no changes will be made)\n');
  } else {
    console.log('⚠️  APPLY mode: Changes WILL be made to your files!\n');
  }
  
  console.log('Scanning codebase for images...\n');
  
  const findings = scanCodebase('src');
  
  if (findings.length === 0) {
    console.log('✓ No images found to replace!');
    console.log('  Your codebase may already be using local images or no remote images were found.\n');
    return;
  }
  
  const byFile = generateReplacementPlan(findings);
  applyReplacements(byFile, dryRun);
}

// Run
main();
