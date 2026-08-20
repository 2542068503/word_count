# Apple Design Word Counter - Design Specification

## Overview
A web-based, real-time Word Counter designed with Apple Design language (iOS/macOS Human Interface Guidelines, translucent materials, SF-pro typography, fluid spring interactions) and client-side processing. Designed for instant deployment onto Cloudflare Pages.

## Visual Design & Architecture (Apple Design)

### 1. Typography & Hierarchy
- Font Family: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`
- Tracking: Tight tracking on headers (`letter-spacing: -0.02em`), natural on body (`letter-spacing: -0.005em`).
- Optical Sizing: Fluid text scaling using `clamp()` and responsive rem units.

### 2. Color Palette & Glassmorphism
- **Light Mode**:
  - Base Background: `#F5F5F7` (Apple Grouped Background)
  - Card Surface: `rgba(255, 255, 255, 0.72)` with `backdrop-filter: blur(20px) saturate(180%)`
  - Card Border: `1px solid rgba(255, 255, 255, 0.6)` and subtle inner highlight
  - Primary Accent: `#0071E3` (Apple System Blue)
  - Success / Read Time: `#34C759` (Apple System Green)
  - Warning / Speech Time: `#FF9500` (Apple System Orange)
  - Text Primary: `#1D1D1F`
  - Text Secondary: `#86868B`
- **Dark Mode**:
  - Base Background: `#000000`
  - Card Surface: `rgba(28, 28, 30, 0.75)` with `backdrop-filter: blur(24px) saturate(190%)`
  - Card Border: `1px solid rgba(255, 255, 255, 0.12)`
  - Text Primary: `#F5F5F7`
  - Text Secondary: `#A1A1A6`
  - Primary Accent: `#0A84FF`

### 3. Motion & Micro-interactions
- Timing Function: `cubic-bezier(0.16, 1, 0.3, 1)` (Apple Spring Physics)
- Interactive State: Instant pointer-down response (`transform: scale(0.97)` on buttons, `scale(0.995)` on cards)
- Counter Transitions: Smooth count-up animations for key metrics.
- Accessibility: Respects `prefers-reduced-motion` and `prefers-reduced-transparency`.

## Components & Layout

```
+-------------------------------------------------------------------+
|  [Logo] WordCounter        [Examples] [Copy] [Clear]  [Theme Toggle] |
+-------------------------------------------------------------------+
|                                 |                                 |
|  [Input Text Area]              |  [Bento Metrics Grid]           |
|  - Realtime typing listener     |  +---------------------------+  |
|  - Auto-expand / custom resize  |  | Total Characters: 1,280   |  |
|  - Clean modern scrollbar       |  +-------------+-------------+  |
|  - Drag & drop text/file support|  | Chinese: 840| English: 120|  |
|                                 |  +-------------+-------------+  |
|  [Quick Action Pills Bar]       |  | Numbers: 45 | Symbols: 88 |  |
|  - Trim Spaces                  |  +-------------+-------------+  |
|  - Uppercase / Lowercase        |  | Lines: 18   | Paragraphs:5|  |
|  - Clean Empty Lines            |  +---------------------------+  |
|  - Convert Fullwidth/Halfwidth  |  [Reading & Speech Estimate]    |
|  - Export Statistics Report     |  - Reading Time: ~2.3 mins      |
|                                 |  - Speech Time: ~6.2 mins       |
+---------------------------------+---------------------------------+
```

## Statistical Metrics & Logic

1. **Chinese Characters (汉字数)**: Regex `[\u4e00-\u9fa5\u3400-\u4dbf\uf900-\ufaff]`
2. **English Words (英文单词数)**: Regex `[A-Za-z0-9]+(?:['-_][A-Za-z0-9]+)*`
3. **Total Characters (with spaces)**: `text.length`
4. **Total Characters (without spaces)**: `text.replace(/\s+/g, '').length`
5. **Numbers (数字计数)**: Regex `\d+` (both single digits count and sequence count)
6. **Punctuation Marks (标点符号)**: Unicode punctuation characters (both CJK and Latin punctuation)
7. **Paragraphs (段落数)**: Non-empty lines split by line breaks `\n+`
8. **Physical Lines (物理行数)**: Split by `\n`
9. **Reading Time Estimate (预估阅读时间)**: `(Chinese / 400 + English / 200) min`
10. **Speaking Time Estimate (预估演讲时间)**: `((Chinese + English) / 150) min`

## Deployment Strategy (Cloudflare Pages)

1. **Local Files**:
   - `index.html` (Complete standalone web application with inline SVG icons, Apple Design CSS variables, modern Vanilla JS logic).
   - `_headers` (Cloudflare Pages security and cache headers).
2. **Deployment Options**:
   - Direct deployment via `npx wrangler pages deploy .` or Git repository integration on Cloudflare Pages.
