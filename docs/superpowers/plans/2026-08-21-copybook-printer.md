# Calligraphy Copybook Generator & Pull-Down Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate an Apple-style Pull-Down Menu into the header for secondary navigation and build a feature-complete Hard-Pen Calligraphy Copybook (硬笔书法字帖) generation and A4 printing page (`zitie.html`).

**Architecture:** Client-side vector SVG grid rendering engine with real-time DOM reactivity, CSS Print layout optimization, and Apple Human Interface Design principles.

**Tech Stack:** Vanilla JavaScript (ES6+), CSS3 (Grid, Flexbox, Custom Properties, `@media print`), SVG Vector Graphics, HTML5.

## Global Constraints
- Target directory: `d:/Desktop/ZSY/project/word_count`
- UI Style: Apple Design (iOS/macOS HIG, frosted glass pull-down menu, spring transitions)
- Output format: Standard A4 (210mm × 297mm) print-optimized layout
- Deployment: Push to GitHub repository for Cloudflare Pages sync

---

### Task 1: Add Apple Pull-Down Menu to `index.html`

**Files:**
- Modify: `d:/Desktop/ZSY/project/word_count/index.html`

**Interfaces:**
- Produces: Header navigation with dropdown trigger button and frosted glass floating menu (`.apple-dropdown-menu`).

- [ ] **Step 1: Update CSS and HTML in `index.html` for the dropdown menu**
- [ ] **Step 2: Add event listener for dropdown toggle, keyboard escape, and click outside dismissal**
- [ ] **Step 3: Verify dropdown behavior**

---

### Task 2: Build `zitie.html` (Calligraphy Copybook Generator & A4 Printer)

**Files:**
- Create: `d:/Desktop/ZSY/project/word_count/zitie.html`

**Interfaces:**
- Produces: Full interactive copybook generation studio with:
  - Header with matching Apple brand logo, tools pull-down menu, and theme toggle.
  - Configuration sidebar (Title, Author, Text, Grid Type, Color, Tracing mode, Columns/Rows).
  - High-fidelity A4 live preview page with vector SVG grid cells (米字格, 田字格, 回宫格, 方格).
  - Print button that triggers standard A4 browser print (`window.print()`).
  - Sample poetry loaders (《沁园春·长沙》, 《将进酒》, 《岳阳楼记》, etc.).

- [ ] **Step 1: Write `zitie.html` structure, CSS styling, and SVG grid generator**
- [ ] **Step 2: Implement text parsing, pagination, and live preview rendering logic**
- [ ] **Step 3: Implement A4 `@media print` styles**

---

### Task 3: Verification & GitHub Sync

**Files:**
- Test: `index.html` and `zitie.html`

- [ ] **Step 1: Verify both pages load, dropdowns operate smoothly, and grid rendering is responsive**
- [ ] **Step 2: Commit and push changes to GitHub**
