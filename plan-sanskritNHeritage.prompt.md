# Plan: Populate Sanskrit Heritage Website with Data

**TL;DR:** Create a JSON-based data system where each page type (institutions, programs, learning systems, etc.) has corresponding JSON files in a `/data/` folder. Build JavaScript loaders to dynamically render content on each page from the JSON files. Implement a Leaflet map for institution locations. You provide the content via PDF, we convert it to structured JSON, then populate all 6-7 main pages.

---

## Steps

### Phase 1: Data Structure Design

1. **Define JSON schema** for each page type:
   - `institutions.json` — institutions with: name, type, location (lat/lng), specialization, website, phone, research areas
   - `global-programs.json` — programs with: title, country, institution, focus, website, year established
   - `learning-systems.json` — systems with: name, location, students served, curriculum type, contact, description
   - `libraries-research.json` — resources with: name, type (library/archive/database), location, collection size, access method, website
   - `awards-funding.json` — awards with: name, amount, eligibility, deadline, institution, description
   - `methodology.json` — research method with: phases, data collection approach, sources, statistics
   
   Optional (extras):
   - `dictionary.json` — Sanskrit words: devanagari, transliteration, English meaning, etymology, usage, pronunciation
   - `grammar.json` — grammar rules: topic, Sanskrit example, explanation, rule category
   - `scripture.json` — scriptures: title, author, period, summary, significance, verses/chapters
   - `heritage.json` — heritage topics: period, description, cultural significance, references

2. **Create `/data/` folder structure** with the JSON files above

### Phase 2: Parse PDF Data to JSON

3. **Extract data from the PDF** you provide and convert to JSON files matching the schemas from Step 1
   - *Depends on:* PDF data from user
   - Handle missing fields gracefully with default values

### Phase 3: HTML Templates with Data Placeholders

4. **Create page structure for main 6-7 pages** with div containers for dynamic content:
   - `indian-institutions.html` — add map container, institution list section
   - `global-programs.html` — add program cards/grid section
   - `learning-systems.html` — add learning systems grid/list
   - `libraries-research.html` — add resource cards
   - `awards-funding.html` — add awards table/cards
   - `methodology.html` — add timeline/process section
   - `index.html` — add stats dashboard, category cards (pulls from all JSON files)
   
5. **Create optional page templates** (if including extras):
   - `dictionary.html` — searchable word list with Devanagari + English
   - `grammar.html` — grammar rule browser
   - `scripture.html` — scripture index
   - `heritage.html` — heritage timeline/sections

### Phase 4: Build Data Loader & Renderer (JavaScript)

6. **Create `js/data-loader.js`** — utility to fetch JSON files:
   - Function: `loadPageData(pageName)` → returns JSON object
   - Function: `loadAllData()` → caches all JSON files for performance

7. **Create page-specific renderer files:**
   - `js/render-institutions.js` — takes institutions.json, renders institution cards/list
   - `js/render-programs.js` — renders programs
   - `js/render-learning.js` — renders learning systems
   - `js/render-libraries.js` — renders resources
   - `js/render-awards.js` — renders awards
   - `js/render-home.js` — renders homepage overview with stats

8. **Call renderer on page load** — add `<script>` tags in each HTML file to load and render data

### Phase 5: Implement Institution Map (Leaflet.js)

9. **Add Leaflet.js library** to index.html and institution page
   - Import CSS & JS files from CDN

10. **Create `js/institution-map.js`** — map initialization:
    - Parse institutions.json locations
    - Plot markers on Leaflet map
    - Add popups with institution name, type, website
    - Color-code markers by institution type (if applicable)
    - Add zoom/pan controls

### Phase 6: Test & Verify

11. **Test each page** in browser:
    - Data loads correctly from JSON files
    - All fields display properly
    - Map renders with correct markers
    - Search/filter works (if implemented)
    - Responsive design holds on mobile
    
12. **Validate JSON** — ensure all data files are valid JSON (no syntax errors)

13. **Verify links** — check that all external links (websites, contacts) work

---

## Relevant Files

- `/data/` — Will create JSON files here
- `pages/` — All main and optional pages to populate
- `js/` — Add data-loader.js, render-*.js, and institution-map.js
- `index.html` — Update to load homepage data & Leaflet map library
- `css/styles.css` — May need minor tweaks for data layouts

---

## Verification Checklist

1. **Automated:** Run JSON validation check on all `/data/` files
2. **Manual:** Visit each page, verify:
   - All data renders
   - Images/icons load (if any)
   - Links are clickable and correct
   - Map displays correctly on institutions page (if implemented)
   - Responsive layout works on mobile/tablet

---

## Implementation Decisions

- **JSON over database:** Simple, file-based, easy to edit/version control
- **Leaflet map:** Open-source, no API key required, lightweight alternative to Google Maps
- **Focus on main 6-7 pages first:** Follow the plan.md structure; optional pages can be added later
- **No backend needed:** Static site with client-side JS loading—fast and deployable anywhere

---

## Further Considerations

1. **Search/Filter functionality?** Would you like users to search dictionary words, filter institutions by country, or search awards by category? This affects data structure.
2. **Download/Export data?** Should users be able to download institution lists as CSV or PDF?
3. **Updating data later?** Should we make the data files easy for non-technical team members to edit, or will you handle all updates?

---

## Next Step

Provide the PDF with content data, and I'll parse it into the JSON structure and implement the plan.
