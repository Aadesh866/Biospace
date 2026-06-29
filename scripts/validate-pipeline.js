#!/usr/bin/env node

/**
 * Pipeline Validation Script
 * 
 * Runs comprehensive checks to ensure the image pipeline is working correctly
 * This should be run before deploying or after making changes
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const CHECKS = {
  passed: 0,
  failed: 0,
  warnings: 0
};

function log(message, type = 'info') {
  const icons = {
    info: 'ℹ',
    success: '✓',
    error: '✗',
    warning: '⚠'
  };
  console.log(`${icons[type]} ${message}`);
}

function checkPass(message) {
  CHECKS.passed++;
  log(message, 'success');
}

function checkFail(message) {
  CHECKS.failed++;
  log(message, 'error');
}

function checkWarn(message) {
  CHECKS.warnings++;
  log(message, 'warning');
}

// Check 1: Environment Variables
function checkEnvironment() {
  console.log('\n=== Checking Environment ===');
  
  const apiKey = process.env.PEXELS_API_KEY;
  
  if (!apiKey) {
    checkWarn('PEXELS_API_KEY not set - fetch script will require it');
  } else if (apiKey === 'YOUR_API_KEY_HERE') {
    checkFail('PEXELS_API_KEY is placeholder value');
  } else {
    checkPass('PEXELS_API_KEY is set');
  }
  
  // Check Node version
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  
  if (majorVersion >= 14) {
    checkPass(`Node.js version ${nodeVersion} (>= 14)`);
  } else {
    checkFail(`Node.js version ${nodeVersion} is too old (need >= 14)`);
  }
}

// Check 2: Required Files
function checkFiles() {
  console.log('\n=== Checking Required Files ===');
  
  const requiredFiles = [
    'scripts/fetch-pexels-images.js',
    'scripts/verify-all-images.js',
    'scripts/README.md',
    'scripts/TROUBLESHOOTING.md',
    'scripts/TESTING_CHECKLIST.md',
    'package.json'
  ];
  
  for (const file of requiredFiles) {
    if (fs.existsSync(file)) {
      checkPass(`${file} exists`);
    } else {
      checkFail(`${file} missing`);
    }
  }
  
  // Check for src directory
  if (fs.existsSync('src')) {
    checkPass('src/ directory exists');
  } else {
    checkFail('src/ directory missing');
  }
  
  // Check for public/images
  if (fs.existsSync('public/images')) {
    checkPass('public/images/ directory exists');
    
    const images = fs.readdirSync('public/images');
    if (images.length > 0) {
      checkPass(`${images.length} local images available`);
    } else {
      checkWarn('public/images/ is empty - no fallback images');
    }
  } else {
    checkWarn('public/images/ directory missing - no local fallbacks');
  }
}

// Check 3: Generated Files
function checkGeneratedFiles() {
  console.log('\n=== Checking Generated Files ===');
  
  if (fs.existsSync('pexels-images.json')) {
    checkPass('pexels-images.json exists');
    
    try {
      const data = JSON.parse(fs.readFileSync('pexels-images.json', 'utf8'));
      const categories = Object.keys(data);
      
      if (categories.length > 0) {
        checkPass(`${categories.length} image categories configured`);
        
        const validUrls = categories.filter(cat => data[cat] && data[cat].url).length;
        if (validUrls === categories.length) {
          checkPass('All categories have valid image URLs');
        } else {
          checkWarn(`Only ${validUrls}/${categories.length} categories have images`);
        }
      } else {
        checkWarn('pexels-images.json is empty');
      }
    } catch (err) {
      checkFail(`pexels-images.json is invalid: ${err.message}`);
    }
  } else {
    checkWarn('pexels-images.json not found - run npm run images:fetch');
  }
  
  if (fs.existsSync('src/lib/pexels-image-map.ts')) {
    checkPass('src/lib/pexels-image-map.ts exists');
    
    const content = fs.readFileSync('src/lib/pexels-image-map.ts', 'utf8');
    
    if (content.includes('export const pexelsImageMap')) {
      checkPass('TypeScript export found');
    } else {
      checkFail('TypeScript export missing or malformed');
    }
    
    if (content.includes('export type ImageCategory')) {
      checkPass('TypeScript type definition found');
    } else {
      checkWarn('TypeScript type definition missing');
    }
  } else {
    checkWarn('src/lib/pexels-image-map.ts not found - run npm run images:fetch');
  }
}

// Check 4: Network Connectivity
async function checkNetwork() {
  console.log('\n=== Checking Network Connectivity ===');
  
  return new Promise((resolve) => {
    https.get('https://api.pexels.com/', (res) => {
      if (res.statusCode === 200 || res.statusCode === 401) {
        checkPass('Can reach Pexels API');
      } else {
        checkWarn(`Pexels API returned status ${res.statusCode}`);
      }
      resolve();
    }).on('error', (err) => {
      checkFail(`Cannot reach Pexels API: ${err.message}`);
      resolve();
    });
  });
}

// Check 5: Code Quality
function checkCodeQuality() {
  console.log('\n=== Checking Code Quality ===');
  
  const scriptFiles = [
    'scripts/fetch-pexels-images.js',
    'scripts/verify-all-images.js'
  ];
  
  for (const file of scriptFiles) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for basic error handling
    if (content.includes('try') && content.includes('catch')) {
      checkPass(`${file} has error handling`);
    } else {
      checkWarn(`${file} may lack error handling`);
    }
    
    // Check for timeout handling
    if (content.includes('setTimeout') && file.includes('fetch')) {
      checkPass(`${file} has timeout handling`);
    }
    
    // Check for rate limiting
    if (content.includes('await new Promise') && file.includes('fetch')) {
      checkPass(`${file} has rate limiting`);
    }
  }
}

// Check 6: Package.json Scripts
function checkScripts() {
  console.log('\n=== Checking npm Scripts ===');
  
  try {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const scripts = pkg.scripts || {};
    
    const requiredScripts = {
      'images:fetch': 'node scripts/fetch-pexels-images.js',
      'images:verify': 'node scripts/verify-all-images.js'
    };
    
    for (const [name, expected] of Object.entries(requiredScripts)) {
      if (scripts[name]) {
        checkPass(`npm script "${name}" exists`);
        if (scripts[name].includes(expected)) {
          checkPass(`npm script "${name}" points to correct file`);
        } else {
          checkWarn(`npm script "${name}" may be misconfigured`);
        }
      } else {
        checkFail(`npm script "${name}" missing`);
      }
    }
  } catch (err) {
    checkFail(`Cannot read package.json: ${err.message}`);
  }
}

// Check 7: Documentation
function checkDocumentation() {
  console.log('\n=== Checking Documentation ===');
  
  const docs = [
    'scripts/README.md',
    'scripts/TROUBLESHOOTING.md',
    'scripts/TESTING_CHECKLIST.md'
  ];
  
  for (const doc of docs) {
    if (fs.existsSync(doc)) {
      const content = fs.readFileSync(doc, 'utf8');
      
      if (content.length > 100) {
        checkPass(`${doc} exists and has content`);
      } else {
        checkWarn(`${doc} exists but seems incomplete`);
      }
    } else {
      checkWarn(`${doc} missing`);
    }
  }
}

// Check 8: Component Integration
function checkComponents() {
  console.log('\n=== Checking Component Integration ===');
  
  if (!fs.existsSync('src')) {
    checkWarn('src/ directory not found - skipping component checks');
    return;
  }
  
  // Check if any components use Unsplash
  const unsplashPattern = /https:\/\/images\.unsplash\.com/;
  const wikiPattern = /https:\/\/upload\.wikimedia\.org/;
  
  let unsplashCount = 0;
  let wikiCount = 0;
  
  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !fullPath.includes('node_modules')) {
        scanDir(fullPath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        if (unsplashPattern.test(content)) {
          unsplashCount++;
        }
        if (wikiPattern.test(content)) {
          wikiCount++;
        }
      }
    }
  }
  
  scanDir('src');
  
  if (unsplashCount > 0) {
    checkWarn(`${unsplashCount} files still use Unsplash URLs - consider replacing`);
  } else {
    checkPass('No Unsplash URLs found in components');
  }
  
  if (wikiCount > 0) {
    checkWarn(`${wikiCount} files still use Wikipedia URLs - should be replaced`);
  } else {
    checkPass('No Wikipedia URLs found in components');
  }
}

// Main execution
async function main() {
  console.log('═══════════════════════════════════════════');
  console.log('  IMAGE PIPELINE VALIDATION');
  console.log('═══════════════════════════════════════════');
  
  checkEnvironment();
  checkFiles();
  checkGeneratedFiles();
  await checkNetwork();
  checkCodeQuality();
  checkScripts();
  checkDocumentation();
  checkComponents();
  
  // Summary
  console.log('\n═══════════════════════════════════════════');
  console.log('  VALIDATION SUMMARY');
  console.log('═══════════════════════════════════════════');
  console.log(`✓ Passed:   ${CHECKS.passed}`);
  console.log(`✗ Failed:   ${CHECKS.failed}`);
  console.log(`⚠ Warnings: ${CHECKS.warnings}`);
  console.log('═══════════════════════════════════════════\n');
  
  if (CHECKS.failed > 0) {
    console.log('❌ VALIDATION FAILED');
    console.log('Fix the errors above before proceeding.\n');
    console.log('For help, check:');
    console.log('  - scripts/TROUBLESHOOTING.md');
    console.log('  - scripts/README.md\n');
    process.exit(1);
  } else if (CHECKS.warnings > 0) {
    console.log('⚠️  VALIDATION PASSED WITH WARNINGS');
    console.log('System is functional but has some issues.\n');
    console.log('Recommended actions:');
    if (!process.env.PEXELS_API_KEY) {
      console.log('  - Set PEXELS_API_KEY environment variable');
    }
    if (!fs.existsSync('pexels-images.json')) {
      console.log('  - Run: npm run images:fetch');
    }
    if (!fs.existsSync('public/images') || fs.readdirSync('public/images').length === 0) {
      console.log('  - Add fallback images to public/images/');
    }
    console.log();
    process.exit(0);
  } else {
    console.log('✅ VALIDATION PASSED');
    console.log('Image pipeline is properly configured!\n');
    console.log('Ready to:');
    console.log('  - Fetch images: npm run images:fetch');
    console.log('  - Verify images: npm run images:verify');
    console.log('  - Build project: npm run build\n');
    process.exit(0);
  }
}

// Run validation
main().catch(err => {
  console.error('\n❌ Validation crashed:', err.message);
  console.error(err.stack);
  process.exit(1);
});
