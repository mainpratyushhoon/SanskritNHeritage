# Sanskriti — The Living Archive of Sanskrit

A modern, responsive multi-page static website dedicated to exploring Sanskrit scriptures, grammar, heritage, and cultural traditions.

## 📋 Project Overview

Sanskriti is a comprehensive digital archive designed to make the Sanskrit language, its scriptures, grammar systems, and cultural heritage accessible to scholars, students, and enthusiasts worldwide. Built as a responsive static site with vanilla HTML, CSS, and JavaScript.

**Status:** Phase 1 MVP Complete ✅

---

## 📁 Project Structure

```
SanskritNHeritage/
├── index.html                 # Homepage
├── pages/
│   ├── scripture.html         # Scripture Library
│   ├── grammar.html           # Grammar & Linguistics Tools
│   ├── heritage.html          # Heritage & History
│   ├── assignments.html       # Course Materials/Assignments
│   ├── dictionary.html        # Sanskrit Dictionary
│   └── search-results.html    # Search Results Page (placeholder)
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

1. **index.html** - Hero section, search, 4 main categories, featured scripture, timeline
2. **pages/scripture.html** - Scripture library with filter options and grid
3. **pages/grammar.html** - Grammar concepts with detailed cards
4. **pages/heritage.html** - Timeline and heritage categories
5. **pages/assignments.html** - Course materials and assignments list
6. **pages/dictionary.html** - Sanskrit dictionary with sample entries

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

## 🚦 Next Steps (Phase 2)

- [ ] Integrate real Sanskrit texts and translations
- [ ] Build PDF viewer for assignments
- [ ] Expand dictionary with comprehensive entries
- [ ] Add imagery and visual assets
- [ ] Implement advanced search with indexing
- [ ] Add audio pronunciation guide
- [ ] Consider CMS integration for content management

---

## 📄 Version

**v1.0.0** - Initial MVP Release (April 2026)