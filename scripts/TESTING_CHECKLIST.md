# Image Pipeline Testing Checklist

## Pre-Flight Checks

### 1. Environment Setup
- [ ] Node.js installed (version 14+)
- [ ] npm/yarn available
- [ ] Internet connection active
- [ ] Write permissions for project directory

### 2. Pexels API Setup
- [ ] Pexels account created at https://www.pexels.com/api/
- [ ] API key obtained
- [ ] API key set in environment: `export PEXELS_API_KEY="your_key"`
- [ ] Verify key is set: `echo $PEXELS_API_KEY`

## Test 1: Fetch Pexels Images

### Expected Behavior
```bash
npm run images:fetch
```

Should output:
```
=== BIOSPACE PEXELS IMAGE PIPELINE ===
Purpose: Fetch context-aware interior design images

[KITCHEN]
  Trying: "modern modular kitchen interior"...
  ✓ Found X high-quality images
  Verifying URL...
  ✓ URL verified and accessible

[WARDROBE]
...
```

### Success Criteria
- [ ] No "API Key invalid" errors
- [ ] At least 5/7 categories successfully fetch images
- [ ] `pexels-images.json` created in root
- [ ] `src/lib/pexels-image-map.ts` created
- [ ] TypeScript file is valid (no syntax errors)

### Failure Scenarios to Test

#### Test 1.1: Invalid API Key
```bash
PEXELS_API_KEY="invalid_key" npm run images:fetch
```
**Expected**: Error message about invalid API key, script exits with code 1

#### Test 1.2: No API Key
```bash
unset PEXELS_API_KEY
npm run images:fetch
```
**Expected**: Error message to set API key, exits with code 1

#### Test 1.3: Network Failure
- Disconnect internet
- Run `npm run images:fetch`
**Expected**: Timeouts, all categories fail, but script completes gracefully

#### Test 1.4: Rate Limit Exceeded
- Run script multiple times rapidly
**Expected**: Some requests may fail, but script handles it gracefully

## Test 2: Verify Images

### Expected Behavior
```bash
npm run images:verify
```

Should output:
```
=== IMAGE URL VERIFICATION TOOL ===

Scanning codebase for image URLs...
Found X unique image URLs

Verifying accessibility...

[1/X] Checking: https://images.unsplash.com/photo-...  ✓ OK
[2/X] Checking: /images/Logo.jpeg... ✓ OK
...
```

### Success Criteria
- [ ] Scans all .tsx and .ts files in src/
- [ ] Finds both local and remote image URLs
- [ ] Verifies local files exist in public/
- [ ] Checks remote URLs return 200
- [ ] Creates `image-verification-report.json`

### Failure Scenarios to Test

#### Test 2.1: Broken Local Image
- Remove a file from `public/images/`
- Run verification
**Expected**: Reports broken local image with 404 status

#### Test 2.2: Broken Remote URL
- Verify with current Unsplash URLs (some are broken)
**Expected**: Reports broken URLs, exits with code 1

#### Test 2.3: No Images Found
- Temporarily rename src/ directory
- Run verification
**Expected**: Warning about no images found

## Test 3: Integration Test

### Full Workflow
```bash
# 1. Clean start
rm -f pexels-images.json image-verification-report.json
rm -f src/lib/pexels-image-map.ts

# 2. Fetch fresh images
PEXELS_API_KEY="your_key" npm run images:fetch

# 3. Verify all images
npm run images:verify

# 4. Check TypeScript compilation
npm run build
```

### Success Criteria
- [ ] All commands complete successfully
- [ ] No TypeScript errors in build
- [ ] Generated files are valid
- [ ] Images load in development (`npm run dev`)

## Test 4: Edge Cases

### Test 4.1: Malformed JSON Response
**Scenario**: Pexels API returns invalid JSON
**Expected**: Script catches parse error, logs it, continues

### Test 4.2: Empty Photo Array
**Scenario**: Pexels returns 0 photos for a query
**Expected**: Falls back to next query in list

### Test 4.3: Missing Image Properties
**Scenario**: Pexels photo object missing width/height/src
**Expected**: Filter function skips invalid photos

### Test 4.4: Very Long URLs
**Scenario**: Image URL exceeds typical length
**Expected**: URL is handled correctly, no truncation issues

### Test 4.5: Special Characters in URLs
**Scenario**: URL contains spaces, unicode, or special chars
**Expected**: encodeURIComponent handles it correctly

## Test 5: Performance Tests

### Test 5.1: Time to Complete
```bash
time npm run images:fetch
```
**Expected**: Completes in under 60 seconds (7 categories * 1s delay + API time)

### Test 5.2: Memory Usage
Monitor memory while running
**Expected**: No memory leaks, stays under 100MB

### Test 5.3: Rate Limiting
**Expected**: 1-second delay between category requests observed

## Test 6: File System Tests

### Test 6.1: Read-Only File System
- Make src/lib/ read-only
- Run fetch script
**Expected**: Error about write permission, graceful exit

### Test 6.2: Disk Full
**Expected**: Error about disk space, graceful exit

### Test 6.3: src/lib/ Doesn't Exist
- Delete src/lib/
- Run fetch script
**Expected**: Directory created automatically

## Test 7: Cross-Platform Tests

### Windows
- [ ] Path separators handled correctly (backslash vs forward slash)
- [ ] Line endings don't cause issues (CRLF vs LF)
- [ ] PowerShell vs CMD compatibility

### macOS/Linux
- [ ] Case sensitivity handled correctly
- [ ] File permissions correct
- [ ] Bash environment variables work

## Test 8: Validation Tests

### Test 8.1: TypeScript File Validity
```bash
# After running fetch
npx tsc --noEmit src/lib/pexels-image-map.ts
```
**Expected**: No TypeScript errors

### Test 8.2: JSON File Validity
```bash
# After running fetch
node -e "JSON.parse(require('fs').readFileSync('pexels-images.json'))"
```
**Expected**: No parse errors

### Test 8.3: Generated URLs Work
- Open browser dev tools
- Visit localhost:3000
- Check Network tab for image requests
**Expected**: All Pexels URLs return 200

## Regression Tests

### After Code Changes, Verify:
- [ ] All tests above still pass
- [ ] No new errors introduced
- [ ] Performance hasn't degraded
- [ ] Documentation is still accurate

## Automated Test Suite (Future)

Create `scripts/test-pipeline.js`:
```javascript
// Automated version of above tests
// Run with: npm run test:pipeline
```

## Known Issues Log

Document any issues found during testing:

1. **Issue**: [Description]
   - **Reproduction**: [Steps]
   - **Workaround**: [Solution]
   - **Status**: [Fixed/Open]

2. **Issue**: Pexels sometimes returns different image sizes
   - **Reproduction**: Run fetch multiple times
   - **Workaround**: Filter checks for minimum dimensions
   - **Status**: Working as designed

## Sign-Off Checklist

Before marking system as production-ready:

- [ ] All critical tests passing
- [ ] Documentation complete
- [ ] Edge cases handled
- [ ] Error messages are clear
- [ ] Performance acceptable
- [ ] Code reviewed
- [ ] Integration tested with actual components
- [ ] User tested the workflow

---

## Quick Test Commands

```bash
# Full test sequence
export PEXELS_API_KEY="your_key"
npm run images:fetch && npm run images:verify && npm run build

# Verify specific category works
node -e "const {pexelsImageMap} = require('./src/lib/pexels-image-map.ts'); console.log(pexelsImageMap.kitchen)"

# Check for broken URLs
npm run images:verify | grep "BROKEN"

# Test API key
curl -H "Authorization: $PEXELS_API_KEY" https://api.pexels.com/v1/search?query=kitchen&per_page=1
```
