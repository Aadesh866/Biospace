# Image Pipeline Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: "API Key Invalid or Missing"

**Symptoms**:
```
❌ Pexels API Key invalid or missing!
```

**Causes**:
1. PEXELS_API_KEY environment variable not set
2. API key is incorrect
3. API key has been revoked

**Solutions**:

```bash
# Check if key is set
echo $PEXELS_API_KEY

# Set for current session (Linux/macOS)
export PEXELS_API_KEY="your_actual_key_here"

# Set for current session (Windows PowerShell)
$env:PEXELS_API_KEY="your_actual_key_here"

# Set for current session (Windows CMD)
set PEXELS_API_KEY=your_actual_key_here

# Test API key directly
curl -H "Authorization: YOUR_KEY" "https://api.pexels.com/v1/search?query=kitchen&per_page=1"
```

**Permanent Solution**:
Add to your shell profile (~/.bashrc, ~/.zshrc, etc.):
```bash
export PEXELS_API_KEY="your_key"
```

---

### Issue 2: "No Images Successfully Fetched"

**Symptoms**:
```
❌ ERROR: No images were successfully fetched!
Successfully fetched: 0/7 categories
```

**Causes**:
1. Network connectivity issues
2. Pexels API is down
3. API rate limit exceeded
4. Search queries returning no results
5. Image quality filters too strict

**Solutions**:

**Check 1: Network Connectivity**
```bash
# Test basic connectivity
ping api.pexels.com

# Test API endpoint
curl https://api.pexels.com/v1/search?query=test
```

**Check 2: API Status**
- Visit https://www.pexels.com/api/
- Check for any service announcements

**Check 3: Rate Limits**
- Free tier: 200 requests/hour
- Wait 1 hour and try again
- Or upgrade API plan

**Check 4: Broaden Search Queries**
Edit `scripts/fetch-pexels-images.js`:
```javascript
// Make queries more general
kitchen: [
  'kitchen',  // Simpler query
  'modern kitchen',
  'interior kitchen'
],
```

**Check 5: Relax Quality Filters**
```javascript
// Lower minimum dimensions
return photo.width >= 1280 && photo.height >= 720;  // Instead of 1920x1080
```

---

### Issue 3: "URL Verification Failed"

**Symptoms**:
```
✗ URL verification failed
```

**Causes**:
1. Network timeout
2. Pexels CDN temporarily unavailable
3. Firewall blocking requests
4. HTTPS certificate issues

**Solutions**:

**Increase Timeout**:
Edit `scripts/fetch-pexels-images.js`:
```javascript
const timeout = setTimeout(() => {
  resolve(false);
}, 30000);  // Increase from 10s to 30s
```

**Skip Verification** (not recommended for production):
Comment out verification in fetch script:
```javascript
// const isValid = await verifyImageUrl(image.url);
const isValid = true;  // Skip verification
```

**Check Firewall**:
```bash
# Test if HTTPS requests are blocked
curl https://images.pexels.com/photos/1234567/test.jpeg
```

---

### Issue 4: "Cannot Write TypeScript Mapping"

**Symptoms**:
```
❌ Failed to write TypeScript mapping: EACCES: permission denied
```

**Causes**:
1. Insufficient file permissions
2. src/lib/ directory is read-only
3. File is open in editor
4. Antivirus blocking write

**Solutions**:

```bash
# Check permissions
ls -la src/lib/

# Fix permissions (Linux/macOS)
chmod 755 src/lib/
chmod 644 src/lib/pexels-image-map.ts

# Fix permissions (Windows)
# Right-click folder → Properties → Security → Edit permissions

# Close any editors with file open
# Close VSCode, restart script

# Temporarily disable antivirus (testing only)
```

---

### Issue 5: "Images Not Loading in Browser"

**Symptoms**:
- Script succeeds
- But images show broken in browser
- Console shows 404 or CORS errors

**Causes**:
1. Components not updated to use new image map
2. Next.js image domain not configured
3. CORS issues with Pexels
4. Cache showing old broken images

**Solutions**:

**Check 1: Component Updates**
Ensure components import from image map:
```typescript
import { pexelsImageMap } from '@/lib/pexels-image-map';

// Use it
image: pexelsImageMap.kitchen
```

**Check 2: Next.js Image Configuration**
Update `next.config.js`:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.pexels.com',
      pathname: '/**',
    },
  ],
}
```

**Check 3: Clear Cache**
```bash
# Clear Next.js cache
rm -rf .next/

# Rebuild
npm run build

# Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
```

**Check 4: CORS**
Pexels images should work, but if issues persist:
- Check browser console for CORS errors
- Pexels images are meant to be hotlinked
- Consider proxying through Next.js API route

---

### Issue 6: "Script Hangs/Freezes"

**Symptoms**:
- Script starts but never completes
- No output for long time
- CPU usage spikes

**Causes**:
1. Network timeout not working
2. Infinite loop in code
3. API returning huge response
4. Memory leak

**Solutions**:

**Force Timeout**:
```bash
# Run with timeout (Linux/macOS)
timeout 120s npm run images:fetch

# Run with timeout (Windows PowerShell)
# Install: npm install -g timeout-cli
timeout 120 npm run images:fetch
```

**Debug Mode**:
Add more logging to see where it hangs:
```javascript
console.log('Starting category:', category);
console.log('Making API request...');
const photos = await fetchPexelsImages(query, 10);
console.log('Received photos:', photos.length);
```

**Check for Infinite Loops**:
Review code for any while loops without exit conditions

---

### Issue 7: "TypeScript Errors After Generation"

**Symptoms**:
```
error TS2307: Cannot find module '@/lib/pexels-image-map'
```

**Causes**:
1. File path incorrect
2. TypeScript can't resolve @ alias
3. File wasn't generated
4. File has syntax errors

**Solutions**:

**Check 1: File Exists**
```bash
ls -la src/lib/pexels-image-map.ts
```

**Check 2: Verify TypeScript Config**
Check `tsconfig.json` has path mapping:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Check 3: Validate Generated File**
```bash
# Check for syntax errors
npx tsc --noEmit src/lib/pexels-image-map.ts

# View file content
cat src/lib/pexels-image-map.ts
```

**Check 4: Restart TypeScript Server**
In VSCode: Cmd+Shift+P → "TypeScript: Restart TS Server"

---

### Issue 8: "Images Different Each Time"

**Symptoms**:
- Running fetch multiple times gives different images
- Inconsistent results

**Causes**:
- This is expected behavior!
- Pexels returns different photos from their database
- Random selection from available photos

**Solutions**:

**If you want consistency**:
1. Run fetch once
2. Commit `pexels-images.json` to git
3. Don't re-run unless you want new images

**Lock specific images**:
```javascript
// In pexels-image-map.ts, manually set URLs
export const pexelsImageMap = {
  kitchen: 'https://specific-url-you-want.jpg',
  // ...
} as const;
```

---

### Issue 9: "Out of Memory Error"

**Symptoms**:
```
JavaScript heap out of memory
```

**Causes**:
1. Processing too many images
2. Large image downloads
3. Memory leak in verification

**Solutions**:

**Increase Node Memory**:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run images:fetch
```

**Reduce Batch Size**:
```javascript
// Fetch fewer images per query
const photos = await fetchPexelsImages(query, 5);  // Instead of 10
```

**Process Categories Separately**:
Edit script to process one category at a time

---

### Issue 10: "Windows Path Issues"

**Symptoms**:
- Error: "Cannot find module"
- Path separators wrong (/ vs \)

**Causes**:
- Windows uses backslashes
- Code assumes forward slashes

**Solutions**:

**Always use path.join()**:
```javascript
const fullPath = path.join(process.cwd(), 'public', url);
// NOT: process.cwd() + '/public/' + url
```

**Normalize Paths**:
```javascript
const normalizedPath = path.normalize(somePath);
```

---

## Diagnostic Commands

### Full System Check
```bash
# 1. Check Node version
node --version  # Should be 14+

# 2. Check npm version
npm --version

# 3. Check environment
echo $PEXELS_API_KEY

# 4. Check file permissions
ls -la scripts/
ls -la src/lib/

# 5. Check network
ping api.pexels.com

# 6. Test API directly
curl -H "Authorization: $PEXELS_API_KEY" "https://api.pexels.com/v1/search?query=test&per_page=1"

# 7. Verify dependencies
npm list --depth=0
```

### Clean Slate
```bash
# Remove all generated files
rm -f pexels-images.json
rm -f image-verification-report.json
rm -f src/lib/pexels-image-map.ts

# Clear cache
rm -rf .next/
rm -rf node_modules/.cache/

# Reinstall dependencies
npm ci

# Try again
npm run images:fetch
```

---

## Getting Help

### Information to Provide

When asking for help, include:

1. **Error Message** (full output)
2. **Command Run** (exact command)
3. **Environment**:
   - OS (Windows/macOS/Linux)
   - Node version
   - npm version
4. **Steps Taken** (what you've tried)
5. **Generated Files** (do they exist?)
6. **Network Test Results** (can you reach Pexels?)

### Log Files

Enable verbose logging:
```bash
# Add to fetch script
console.log('DEBUG:', JSON.stringify(results, null, 2));

# Run with full output
npm run images:fetch > debug.log 2>&1
```

### Contact

1. Check this troubleshooting guide
2. Check `scripts/README.md`
3. Check `TESTING_CHECKLIST.md`
4. Review `project_handover_KIRO.txt`
5. Search existing issues
6. Create new issue with debug info

---

## Prevention Tips

### Before Running Scripts

- [ ] Check environment variables are set
- [ ] Verify network connectivity
- [ ] Check available disk space
- [ ] Close files in editors
- [ ] Backup existing generated files

### Best Practices

1. **Version Control**: Commit `pexels-images.json` after successful fetch
2. **Documentation**: Document any custom modifications
3. **Testing**: Run verification after fetch
4. **Monitoring**: Check image URLs periodically
5. **Fallbacks**: Always have local images as backup

---

## Known Limitations

1. **Pexels Free Tier**: 200 requests/hour limit
2. **Image Consistency**: Results vary between runs
3. **Quality Control**: Automated - may need manual review
4. **Network Dependency**: Requires internet to fetch
5. **API Changes**: Pexels may change API format

---

## Emergency Fallback

If all else fails, use local images:

```typescript
// src/lib/image-map.ts
export const imageMap = {
  kitchen: '/images/WhatsApp Image 2026-06-11 at 5.30.18 PM.jpeg',
  wardrobe: '/images/WhatsApp Image 2026-06-11 at 5.30.19 PM.jpeg',
  living: '/images/WhatsApp Image 2026-06-11 at 5.30.20 PM.jpeg',
  // ... map all your local images
} as const;
```

Then update components to use this instead of Pexels map.
