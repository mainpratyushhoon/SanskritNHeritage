# Sanskrit Knowledge Ecosystem Website

A modern, responsive multi-page static website documenting the Sanskrit Knowledge Ecosystem — institutions, learning systems, archival resources, journals, funding, and recognition in Sanskrit studies.

## 📋 Project Overview

The Sanskrit Knowledge Ecosystem website is a structured digital portal for the Sanskrit Knowledge Ecosystem project, covering all 15 required topics in a way that is easy to navigate, visually organized, and presentation-friendly. Built as a responsive static site with vanilla HTML, CSS, and JavaScript.

**Status:** Core site structure implemented (Step 1 of plan) ✅

---

## 📁 Project Structure

```
SanskritNHeritage/
├── index.html                 # Homepage and ecosystem overview
├── plan.md                    # Project plan and implementation guide
├── pages/
│   ├── indian-institutions.html   # Topics 1 & 2: Sanskrit universities and departments
│   ├── global-programs.html       # Topics 3-6: Global Sanskrit programs
│   ├── learning-systems.html      # Topics 7-9: Traditional and online learning
│   ├── libraries-research.html    # Topics 10-12: Libraries, digitization, journals
│   ├── awards-funding.html        # Topics 13-14: Honors and scholarships
│   ├── methodology.html           # Topic 15: Research process and methodology
│   ├── scripture.html             # Legacy: Scripture Library (original content)
│   ├── grammar.html               # Legacy: Grammar & Linguistics Tools
│   ├── heritage.html              # Legacy: Heritage & History
│   ├── assignments.html           # Legacy: Course Materials/Assignments
│   └── dictionary.html            # Legacy: Sanskrit Dictionary
├── css/
│   ├── styles.css             # Main entry point (imports all)
│   ├── variables.css          # Design tokens (colors, typography, spacing)
│   ├── components.css         # Reusable UI elements (buttons, cards, forms)
│   ├── layout.css             # Page structure (nav, sections, grids, footer)
│   ├── animations.css         # Keyframes, scroll reveals, transitions
│   └── responsive.css         # Mobile-first breakpoints & media queries
├── js/
│   ├── navigation.js          # Mobile menu toggle, active links, smooth scroll
│   ├── scroll-reveals.js      # Intersection Observer for scroll animations
│   └── search.js              # Client-side search filtering
├── assets/                     # Images, icons, fonts (placeholder structure)
├── data/                       # JSON data files (placeholder structure)
└── README.md                  # This file
```

---

## 🎨 Design System

### Color Palette
- **Saffron** (`#C8520A`): Primary accent, heritage color
- **Gold** (`#B8860B`): Secondary accent, warm metallic
- **Earth** (`#2C1A0E`): Primary text, dark warm tone
- **Cream** (`#FAF5EE`): Background, warm off-white
- **Ink** (`#1A0F05`): Footer text, deepest dark

### Typography
- **Display**: Cormorant Garamond — headings, nav, labels
- **Devanagari**: Noto Serif Devanagari — Sanskrit text
- **Body**: Crimson Pro — body copy

### Responsive Breakpoints
- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (2-3 column layouts)
- **Desktop**: 1025px+ (full design)

---

## ✨ Features Implemented

- [x] Modular, responsive CSS architecture
- [x] Mobile-first design with hamburger navigation
- [x] Multi-page structure (6 main pages)
- [x] Scroll reveal animations
- [x] Client-side search functionality
- [x] Full responsive design (tested down to 375px)
- [x] Accessible HTML structure
- [x] Semantic markup throughout

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- No build tools or backend required

### Local Development

```bash
# Start local server
cd SanskritNHeritage

# Python
python -m http.server 8000

# Or use Node.js
npx http-server

# Then open http://localhost:8000
```

---

## 🔧 JavaScript Modules

### navigation.js
- Mobile menu toggle
- Active link highlighting
- Smooth scrolling
- Close menu on outside click

### scroll-reveals.js
- Intersection Observer animations
- `.reveal` class detection
- Staggered delays (`.reveal-delay-1` to `.4`)
- Fallback for unsupported browsers

### search.js
- Client-side content search
- Search bar event listeners
- Tag-based quick search
- Navigation to search results

---

## 📱 Responsive Design

Fully responsive with:
- Mobile hamburger navigation
- Flexible grid layouts
- Touch-friendly button sizes (48px min)
- No horizontal scrolling
- Fluid typography

---

## 📊 Pages Included

1. **index.html** - Project homepage with ecosystem overview, topic grid, and research highlights
2. **pages/indian-institutions.html** - Topics 1 & 2: Sanskrit universities and departments in India
3. **pages/global-programs.html** - Topics 3-6: Sanskrit programs in Americas, Europe, SE Asia, Africa/Australia
4. **pages/learning-systems.html** - Topics 7-9: Traditional gurukulas, non-formal organizations, online platforms
5. **pages/libraries-research.html** - Topics 10-12: Sanskrit libraries, digitization initiatives, academic journals
6. **pages/awards-funding.html** - Topics 13-14: Honors, awards, scholarships, and research funding
7. **pages/methodology.html** - Topic 15: Research workflow, source verification, and content organization

### Legacy Pages (Original Content)
- **pages/scripture.html** - Scripture library with Vedic texts
- **pages/grammar.html** - Grammar concepts and Panini's system
- **pages/heritage.html** - Sanskrit heritage and historical timeline
- **pages/assignments.html** - Course materials and assignments
- **pages/dictionary.html** - Sanskrit dictionary entries

---

## 🎯 Content Notes

- All content is **placeholder text** for structure validation
- Real Sanskrit texts, grammar rules, and content to be added in Phase 2
- Pages are ready for content integration

---

## 📝 CSS Architecture

**Modular Approach:**
- `variables.css` - Design tokens and resets
- `components.css` - Reusable UI patterns
- `layout.css` - Page structure and grids
- `animations.css` - Transitions and scroll reveals
- `responsive.css` - All media queries in one file

**CSS Variables Used:**
- All colors, spacing, typography, and timing values
- Easy theme customization via `:root` variables

---

## 🌐 Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ All modern mobile browsers

---

## 🚦 Next Steps (Implementation Plan)

### Phase 2: Content Framework (Step 2)
- [ ] Add topic headings and scope blocks to each major page
- [ ] Add placeholder cards and tables for each topic
- [ ] Create source sections on every page

### Phase 3: Data Population (Steps 3-6)
- [ ] Fill Indian institutions with real university data
- [ ] Populate global programs across regions
- [ ] Add learning systems content
- [ ] Include libraries, digitization, and research details
- [ ] Add awards and funding information
- [ ] Complete methodology documentation

### Phase 4: Final Polish (Step 7)
- [ ] Verify all external links and citations
- [ ] Normalize citations across pages
- [ ] Add report/PPT links if available
- [ ] Review mobile responsiveness
- [ ] Proofread for consistency

---

## � Project Plan

See `plan.md` for the detailed implementation plan, including:
- Recommended site structure and navigation
- Page patterns and reusable components
- Data collection templates
- Implementation phases and timeline
- Source and citation guidelines

---

## �📄 Version

**v1.1.0** - Site Structure Update (April 2026)
- Restructured navigation for Sanskrit Knowledge Ecosystem
- Added 6 new major section pages
- Updated all footers for consistency
- Maintained responsive design and existing features