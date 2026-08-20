# Apple Design Word Counter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a web-based Word Counter featuring Apple Human Interface Design aesthetics with real-time comprehensive text analytics, and provide one-click free deployment to Cloudflare Pages.

**Architecture:** A lightweight client-side application with zero external runtime dependencies. Core counter logic is cleanly decoupled and unit-tested with Node.js. UI adheres to Apple Design principles: frosted glassmorphism (`backdrop-filter`), SF Pro typography hierarchy, and fluid spring animations.

**Tech Stack:** Vanilla JavaScript (ES6+), Modern CSS3 (Custom Properties, Backdrop Filter, Flex/Grid, Spring Timing Curves), Inline SVG Lucide Icons, Cloudflare Pages Wrangler CLI.

## Global Constraints
- Target directory: `d:/Desktop/ZSY/project/word_count`
- UI Style: Apple Design (iOS/macOS HIG, #0071E3 accent, #F5F5F7/#000000 base, glassmorphism cards)
- Privacy: 100% client-side calculation, zero network upload of user text
- Deployment Target: Cloudflare Pages

---

### Task 1: Word Count Core Algorithm & Unit Tests

**Files:**
- Create: `d:/Desktop/ZSY/project/word_count/counter.js`
- Create: `d:/Desktop/ZSY/project/word_count/test_counter.js`

**Interfaces:**
- Produces: `analyzeText(text: string): StatisticsResult`
  - `chineseCount: number`
  - `englishWordCount: number`
  - `numberCount: number`
  - `punctuationCount: number`
  - `totalCharsWithSpaces: number`
  - `totalCharsWithoutSpaces: number`
  - `lineCount: number`
  - `paragraphCount: number`
  - `readingTimeMinutes: number`
  - `speakingTimeMinutes: number`

- [ ] **Step 1: Write the unit tests for counter logic**

Write `test_counter.js` covering Chinese characters, English words (including hyphens and contractions), mixed punctuation, empty strings, and reading time estimation.

- [ ] **Step 2: Run test to verify it fails**

Run: `node test_counter.js`

- [ ] **Step 3: Implement `counter.js`**

Implement Unicode regex-based Chinese character detection, English word boundaries, punctuation separation, paragraph normalization, and reading/speaking velocity formulas.

- [ ] **Step 4: Run test to verify it passes**

Run: `node test_counter.js`
Expected: All tests pass.

- [ ] **Step 5: Commit changes**

---

### Task 2: Apple Design Web Frontend & Interactive Application

**Files:**
- Create: `d:/Desktop/ZSY/project/word_count/index.html`

**Interfaces:**
- Consumes: `analyzeText` from `counter.js`
- Produces: Complete responsive single-page web app with Light/Dark mode, Dynamic Island header, Bento grid metrics, text enhancement toolbar (Trim, Case, Line breaks, Copy, Clear), and drag-and-drop file import.

- [ ] **Step 1: Build the complete single-page HTML/CSS/JS application**

Implement the full Apple HIG UI with CSS variables, frosted glass materials, tactile spring press feedback, real-time input debounce/requestAnimationFrame stats updating, and toast notification feedback.

- [ ] **Step 2: Verify page structure and functionality**

Test file parsing, text manipulation functions, theme toggling, and responsive layout behavior across mobile and desktop.

- [ ] **Step 3: Commit changes**

---

### Task 3: Cloudflare Pages Deployment Configuration & Live Deployment

**Files:**
- Create: `d:/Desktop/ZSY/project/word_count/_headers`
- Create: `d:/Desktop/ZSY/project/word_count/deploy.bat`
- Create: `d:/Desktop/ZSY/project/word_count/README.md`

- [ ] **Step 1: Create Cloudflare Pages configuration files**

Write `_headers` for caching & security, and `README.md` documentation.

- [ ] **Step 2: Create deployment helper script**

Write `deploy.bat` to support one-command deployment using Cloudflare Wrangler (`npx wrangler pages deploy .`).

- [ ] **Step 3: Execute deployment to Cloudflare Pages**

Run Wrangler to deploy the project to Cloudflare Pages and obtain the live public URL.

- [ ] **Step 4: Verify the online deployed URL**

Verify HTTP status and functional availability of the deployed site.
