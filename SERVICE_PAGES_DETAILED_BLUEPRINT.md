# 🎯 SERVICE PAGES ENHANCEMENT - DETAILED BLUEPRINT

**Goal**: Transform 6 service pages from basic to rich content pages with ALL content written, ALL images mapped, ALL sections designed.

---

## 📋 CURRENT STATUS CHECK

### What We Have Done:
✅ Created rich data structure for 3 services:
  - Modular Kitchens (COMPLETE with 8 sections)
  - Custom Wardrobes (COMPLETE with 8 sections)
  - Complete Renovation (COMPLETE with 8 sections)

✅ Built the page component with:
  - Hero section
  - Overview section (text + images + bullets)
  - What's Included grid
  - Why Choose BIOSPACE (4 reasons)
  - Process timeline
  - Gallery (6-9 images)
  - FAQ accordion
  - CTA section

### What Needs To Be Done:
❌ Fix the parsing error (apostrophe issue)
❌ Add content for 3 remaining services:
  - Living Room Design
  - False Ceilings
  - Commercial Interiors
❌ Test all 6 pages in browser
❌ Fix any visual/responsive issues

---

## 🎯 COMPLETE EXECUTION PLAN

### **PHASE 1: Fix Current Error** ✅
**Task**: Find and fix all apostrophe issues in the file

**Specific Actions**:
1. Search for all occurrences of `'ll`, `'ve`, `'re`, `'s` in strings
2. Replace with proper escaping or use "will", "have", etc.
3. Verify compilation succeeds

**Expected Outcome**: No parsing errors, server compiles successfully

---

### **PHASE 2: Create Content for Remaining 3 Services**

Each service needs EXACT same structure as Modular Kitchens:

#### **Service: Living Room Design**

**2.1 Overview Section**
- **Description**: 180-200 words about living room design services
- **Highlights**: Array of 6 benefit strings (30-40 words each)
- **Images**: 2 images from local photos
  - Image 1: `/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (1).jpeg`
  - Image 2: `/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (2).jpeg`

**2.2 What's Included** (8 items)
Each item needs:
- icon: emoji
- name: short title (2-3 words)
- description: 15-20 words

Items to include:
1. TV Unit (icon: 📺)
2. Sofa Set (icon: 🛋️)
3. Coffee Table (icon: ☕)
4. Entertainment Unit (icon: 🎮)
5. Wall Paneling (icon: 🎨)
6. LED Lighting (icon: 💡)
7. Curtains & Blinds (icon: 🪟)
8. Decorative Items (icon: ✨)

**2.3 Why Choose BIOSPACE** (4 items)
Each item needs:
- icon: Lucide icon component (Shield, Award, Clock, Star)
- title: 2-4 words
- description: 30-40 words

Items:
1. 10-Year Warranty (Shield icon)
2. Premium Fabrics (Award icon)
3. Fast Execution 4-6 days (Clock icon)
4. Custom Designs (Star icon)

**2.4 Process Steps** (4-5 steps)
Each step:
- step: number (1-5)
- title: 2-4 words
- description: 20-30 words
- timeline: "Day X" or "Day X-Y"

Steps:
1. Consultation - Day 1
2. Design & Quote - Day 2
3. Manufacturing - Day 3-5
4. Installation - Day 6-7

**2.5 Gallery** (6 images)
Images from local photos:
- `/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (1).jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.30.24 PM (2).jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.30.25 PM.jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.30.26 PM.jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg`

**2.6 FAQs** (6-8 questions)
Each FAQ:
- question: 8-15 words
- answer: 40-60 words

Questions:
1. How much does living room design cost?
2. What furniture is included?
3. Can I choose my own sofa fabric?
4. Do you provide home theater setup?
5. How long does installation take?
6. Do you handle electrical work for TV points?

---

#### **Service: False Ceilings**

**3.1 Overview Section**
- **Description**: 180-200 words about false ceiling services
- **Highlights**: Array of 6 benefit strings
- **Images**: 2 images
  - Image 1: `/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (1).jpeg`
  - Image 2: `/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (2).jpeg`

**3.2 What's Included** (8 items)
Items:
1. Gypsum Board (icon: 🏗️)
2. Metal Framework (icon: ⚙️)
3. LED Cove Lighting (icon: 💡)
4. Spotlights (icon: 🔦)
5. POP Design (icon: 🎨)
6. Painting (icon: 🖌️)
7. Electrical Wiring (icon: 🔌)
8. Acoustic Treatment (icon: 🔇)

**3.3 Why Choose BIOSPACE** (4 items)
1. 10-Year Warranty
2. Acoustic Engineering
3. 2-3 Days Installation
4. LED Integration

**3.4 Process Steps** (4 steps)
1. Site Assessment - Day 1
2. Design & Approval - Day 1
3. Framework Installation - Day 2
4. Finishing & Lights - Day 3

**3.5 Gallery** (6 images)
- `/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (1).jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.30.26 PM (2).jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.30.27 PM.jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.30.18 PM.jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg`

**3.6 FAQs** (6 questions)
1. How much does false ceiling cost per sq ft?
2. What is the difference between gypsum and POP?
3. Can you install AC ducts in false ceiling?
4. How long does installation take?
5. Do you provide warranty?
6. Can LED lights be added later?

---

#### **Service: Commercial Interiors**

**4.1 Overview Section**
- **Description**: 180-200 words about commercial interior services
- **Highlights**: Array of 6 benefit strings
- **Images**: 2 images
  - Image 1: `/images/WhatsApp Image 2026-06-11 at 5.30.28 PM.jpeg`
  - Image 2: `/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (1).jpeg`

**4.2 What's Included** (8 items)
Items:
1. Space Planning (icon: 📐)
2. Workstations (icon: 💼)
3. Reception Desk (icon: 🏢)
4. Meeting Rooms (icon: 👥)
5. Pantry Setup (icon: ☕)
6. Branding Elements (icon: 🎨)
7. IT Infrastructure (icon: 💻)
8. Lighting (icon: 💡)

**4.3 Why Choose BIOSPACE** (4 items)
1. 10-Year Commercial Warranty
2. Ergonomic Standards
3. 5-15 Days Timeline
4. Brand Integration

**4.4 Process Steps** (5 steps)
1. Requirement Analysis - Day 1-2
2. Space Planning & Design - Day 3-5
3. Approvals & Quotation - Day 6
4. Execution - Day 7-20
5. Handover - Day 21

**4.5 Gallery** (6 images)
- `/images/WhatsApp Image 2026-06-11 at 5.30.28 PM.jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (1).jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.30.28 PM (2).jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.30.27 PM (2).jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.34.17 PM.jpeg`
- `/images/WhatsApp Image 2026-06-11 at 5.34.17 PM (1).jpeg`

**4.6 FAQs** (6 questions)
1. How much does office interior cost per sq ft?
2. Do you handle IT cabling and networking?
3. Can you work on weekends to avoid disruption?
4. What is the warranty on commercial projects?
5. Do you provide ergonomic assessments?
6. Can you integrate our company branding?

---

### **PHASE 3: Add Remaining Service Routes**

Currently the page handles only 3 services. Need to add 3 more.

**Exact Routes Needed**:
- `/services/living-room` (NEW)
- `/services/false-ceilings` (NEW)
- `/services/commercial-interiors` (NEW)

**Also Update Services Listing Page**:
File: `src/app/services/page.tsx`
- Update the service IDs and links to match new routes

---

### **PHASE 4: Test All Pages**

**Testing Checklist** (6 pages × 8 sections = 48 checks):

For EACH service page:
1. ✅ Hero loads with correct image
2. ✅ Overview section displays text + images
3. ✅ What's Included grid shows all 8 items
4. ✅ Why Choose shows 4 reasons
5. ✅ Process timeline displays all steps
6. ✅ Gallery shows 6 images in grid
7. ✅ FAQs expand/collapse correctly
8. ✅ CTA button links to /contact
9. ✅ Responsive on mobile
10. ✅ No console errors

---

## 📝 EXACT FILE CHANGES NEEDED

### File 1: `src/app/services/[id]/page.tsx`

**Change 1**: Fix apostrophe issues
- Line ~179: Replace `we'll` with `we will`
- Search for all `'ll`, `'ve`, `'re` and replace

**Change 2**: Add Living Room Design data
- Insert after Complete Renovation service
- Copy exact structure from Modular Kitchens
- Replace all content with Living Room specific content

**Change 3**: Add False Ceilings data
- Insert after Living Room Design
- Copy exact structure
- Replace with False Ceiling content

**Change 4**: Add Commercial Interiors data
- Insert after False Ceilings
- Copy exact structure
- Replace with Commercial content

### File 2: `src/app/services/page.tsx` (if needed)

**Change**: Update service links to match new IDs
- Verify service cards link to correct routes
- Check: `/services/living-room` (not `living-room-design`)
- Check: `/services/false-ceilings` (not `false-ceiling`)
- Check: `/services/commercial-interiors` (not `commercial-interior`)

---

## 🚀 EXECUTION ORDER

### Step 1: Fix Current Errors
- [ ] Fix apostrophe issue in Modular Kitchens FAQ
- [ ] Test compilation

### Step 2: Write Living Room Content
- [ ] Write overview (200 words)
- [ ] Write 8 What's Included items
- [ ] Write 4 Why Choose reasons
- [ ] Write 4 Process steps
- [ ] Write 6 FAQs

### Step 3: Write False Ceiling Content
- [ ] Write overview (200 words)
- [ ] Write 8 What's Included items
- [ ] Write 4 Why Choose reasons
- [ ] Write 4 Process steps
- [ ] Write 6 FAQs

### Step 4: Write Commercial Content
- [ ] Write overview (200 words)
- [ ] Write 8 What's Included items
- [ ] Write 4 Why Choose reasons
- [ ] Write 5 Process steps
- [ ] Write 6 FAQs

### Step 5: Add All Data to File
- [ ] Insert Living Room data in serviceDataMap
- [ ] Insert False Ceiling data in serviceDataMap
- [ ] Insert Commercial data in serviceDataMap

### Step 6: Test All 6 Pages
- [ ] Test /services/modular-kitchens
- [ ] Test /services/custom-wardrobes
- [ ] Test /services/living-room
- [ ] Test /services/false-ceilings
- [ ] Test /services/complete-renovation
- [ ] Test /services/commercial-interiors

### Step 7: Fix Any Issues
- [ ] Responsive issues
- [ ] Image loading issues
- [ ] Content overflow issues
- [ ] Animation issues

---

## ✅ SUCCESS CRITERIA

**Content Quality**:
- ✅ Each service has 1,500-2,000 words of content
- ✅ All content is specific to the service (no generic text)
- ✅ All FAQs are actually asked questions
- ✅ All process steps are accurate

**Visual Quality**:
- ✅ All local images are used (no Pexels)
- ✅ Images are appropriate for the service
- ✅ Gallery shows actual project photos
- ✅ Layout is consistent across all 6 pages

**Functionality**:
- ✅ All 6 service pages load without errors
- ✅ FAQ accordion works
- ✅ Gallery lightbox works
- ✅ CTA buttons link correctly
- ✅ Mobile responsive

---

## 📊 PROGRESS TRACKER

| Service | Overview | Included | Why Choose | Process | Gallery | FAQs | Tested |
|---------|----------|----------|------------|---------|---------|------|--------|
| Modular Kitchens | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⏳ |
| Custom Wardrobes | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⏳ |
| Complete Renovation | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⏳ |
| Living Room | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| False Ceiling | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Commercial | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

**READY TO EXECUTE?** 
Start with Step 1 (Fix errors), then move through steps 2-7 systematically.
