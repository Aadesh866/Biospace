# BIOSPACE Image Management System

## 🎯 Problem Solved

**Why Wikipedia Failed:**
- Wikipedia Commons is designed for landmarks, monuments, and famous places (works great for travel sites like RRHOLIDAYS)
- For abstract concepts like "modular kitchen" or "false ceiling", Wikipedia returns:
  - Historical photos from 1920s
  - Technical diagrams and blueprints
  - Random unrelated images
  - Hotel entrances instead of wardrobes
  - Telephone equipment instead of renovations

**The Root Cause:**
- Wikipedia curators manually select representative photos for **named entities** (Taj Mahal, Eiffel Tower)
- No curation exists for **abstract interior design concepts**
- Search algorithm returns anything matching keywords, without visual context understanding

## ✅ The Proper Solution: Pexels API

**Why Pexels Works:**
1. **Purpose-Built**: Stock photography platform designed for visual content
2. **Curated**: Professional photographers submit high-quality interior design photos
3. **Context-Aware Search**: Algorithm understands visual context (searching "modular kitchen" returns actual kitchen photos)
4. **Stable URLs**: Professional platform with stable, reliable image hosting
5. **Free & Legal**: Free API with proper licensing for commercial use

## 🚀 Quick Start

### 1. Get Pexels API Key
```bash
# Visit: https://www.pexels.com/api/
# Sign up and get your free API key
export PEXELS_API_KEY="your_api_key_here"
```

### 2. Fetch Images
```bash
node scripts/fetch-pexels-images.js
```

This will:
- Fetch high-quality interior design images for each category
- Verify URLs are accessible
- Generate `pexels-images.json` with results
- Create `src/lib/pexels-image-map.ts` for TypeScript imports

### 3. Verify All Images
```bash
node scripts/verify-all-images.js
```

This will:
- Scan all `.tsx` and `.ts` files for image URLs
- Check if each URL is accessible (200 OK)
- Report broken links
- Generate `image-verification-report.json`

## 📁 Files Overview

### `fetch-pexels-images.js`
**Purpose**: Fetch context-aware interior design images from Pexels API

**Features**:
- Context-aware search queries optimized for interior design
- Multiple fallback queries per category
- Quality filtering (minimum 1920x1080 resolution)
- URL verification before saving
- Rate limiting to respect API limits
- Attribution tracking (photographer credits)

**Output**:
- `pexels-images.json` - Raw API results
- `src/lib/pexels-image-map.ts` - TypeScript mapping for code

### `verify-all-images.js`
**Purpose**: Scan codebase and verify all image URLs are accessible

**Features**:
- Extracts URLs from all source files
- Checks both local and remote images
- Handles timeouts gracefully
- Generates detailed report
- Exits with error if broken links found

**Output**:
- `image-verification-report.json` - Detailed verification report
- Console summary with broken URL list

## 🔧 Usage in Code

### Before (Hardcoded Unsplash URLs)
```tsx
const services = [
  {
    title: 'Modular Kitchens',
    image: 'https://images.unsplash.com/photo-xyz?...'
  }
];
```

### After (Centralized Image Management)
```tsx
import { pexelsImageMap } from '@/lib/pexels-image-map';

const services = [
  {
    title: 'Modular Kitchens',
    image: pexelsImageMap.kitchen
  }
];
```

## 🎨 Image Categories

```typescript
{
  kitchen: 'modern modular kitchen interior',
  wardrobe: 'luxury wardrobe interior',
  living: 'modern living room interior',
  ceiling: 'false ceiling design modern',
  renovation: 'home interior renovation',
  commercial: 'modern office interior design',
  bedroom: 'modern bedroom interior design'
}
```

## 📊 Search Query Strategy

Each category has multiple fallback queries ranked by specificity:

1. **Primary**: Most specific ("modern modular kitchen interior")
2. **Secondary**: Broader terms ("luxury kitchen island design")
3. **Tertiary**: Generic fallbacks ("contemporary kitchen cabinet")
4. **Regional**: Location-specific if needed ("modular kitchen india")

## 🔄 Update Workflow

1. **Fetch Fresh Images**:
   ```bash
   PEXELS_API_KEY=your_key node scripts/fetch-pexels-images.js
   ```

2. **Verify Current Images**:
   ```bash
   node scripts/verify-all-images.js
   ```

3. **Review Results**:
   - Check `pexels-images.json` for quality
   - Review photographer credits
   - Ensure images match context

4. **Update Code** (if needed):
   - Image map auto-generated at `src/lib/pexels-image-map.ts`
   - Components should import from this file

## ⚠️ Important Notes

### API Rate Limits
- Pexels free tier: 200 requests/hour
- Script includes 1-second delay between requests
- Avoid running script multiple times in quick succession

### Image Quality
- Minimum resolution: 1920x1080
- Landscape orientation preferred
- Professional photography only
- No diagrams, blueprints, or technical drawings

### URL Stability
- Pexels URLs are stable and long-lived
- Unlike user-uploaded platforms, professional hosting infrastructure
- Regular verification recommended (monthly)

### Attribution
- Pexels images are free to use
- Attribution not required but script tracks photographer info
- Consider adding credits in footer or about page

## 🐛 Troubleshooting

### "API Key Invalid"
```bash
# Ensure environment variable is set
echo $PEXELS_API_KEY

# Or set inline
PEXELS_API_KEY=your_key node scripts/fetch-pexels-images.js
```

### "No Suitable Images Found"
- Check internet connection
- Verify API key is valid
- Try broader search terms
- Check Pexels API status

### "URL Verification Failed"
- Image might be temporarily unavailable
- Network timeout issues
- Run verification again to confirm

## 📈 Future Enhancements

- [ ] Add Unsplash as secondary fallback
- [ ] Implement local image caching
- [ ] Add image optimization pipeline
- [ ] Create web UI for image management
- [ ] Add bulk replacement tool
- [ ] Integrate with CI/CD for automated verification

## 📝 Comparison: Wikipedia vs Pexels

| Feature | Wikipedia Commons | Pexels API |
|---------|------------------|------------|
| **Best For** | Landmarks, monuments, famous places | Stock photography, design concepts |
| **Search Quality** | Keyword matching only | Visual context understanding |
| **Interior Design** | ❌ Poor (irrelevant results) | ✅ Excellent (curated content) |
| **Image Quality** | ⚠️ Mixed (user uploads) | ✅ Professional photography |
| **URL Stability** | ⚠️ User-uploaded, can be deleted | ✅ Professional hosting |
| **API** | Free, no key required | Free with API key (200 req/hr) |
| **Licensing** | Mixed (varies by image) | ✅ Free for commercial use |
| **Use Case** | Travel sites (RRHOLIDAYS ✓) | Design sites (BIOSPACE ✓) |

## 🎓 Key Learnings

1. **Context Matters**: Tools that work for one domain (travel) may completely fail for another (interior design)

2. **Understand the Source**: Wikipedia is an encyclopedia, not a stock photo library. Its strength is factual information about named entities, not visual design concepts.

3. **Right Tool for the Job**: Pexels, Unsplash, and similar platforms are purpose-built for visual content discovery.

4. **Verification is Critical**: Always verify image URLs work before deploying to production.

5. **Centralize Configuration**: Single source of truth for images makes updates and debugging easier.

## 📞 Support

For issues or questions:
1. Check this README
2. Review `project_handover_KIRO.txt` for historical context
3. Run verification script to diagnose issues
4. Check Pexels API documentation
