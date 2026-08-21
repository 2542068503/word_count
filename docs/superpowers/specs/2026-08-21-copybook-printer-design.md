# Calligraphy Copybook Generator & Pull-Down Navigation - Design Specification

## Overview
An Apple Design-driven Hard-Pen Calligraphy Copybook (硬笔书法字帖) generation and A4 printing tool, integrated into the existing suite via an Apple Pull-Down Menu in the sticky header.

## Visual Design & Architecture (Apple Design Language)

### 1. Navigation & Pull-Down Menu
- **Dropdown Trigger**: Pill-shaped button in header (`更多工具 ▾` with dynamic chevron rotation on open).
- **Floating Menu Surface**:
  - Light Mode: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(20px) saturate(180%)`, border `1px solid rgba(0, 0, 0, 0.08)`, shadow `0 16px 36px -6px rgba(0, 0, 0, 0.12)`.
  - Dark Mode: `rgba(28, 28, 30, 0.88)` with `backdrop-filter: blur(24px) saturate(190%)`, border `1px solid rgba(255, 255, 255, 0.12)`.
  - Motion: Spring scale & opacity fade (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Navigation Targets**:
  - `index.html`: 在线字数统计 (Online Word Counter)
  - `zitie.html`: 硬笔书法字帖打印 (Calligraphy Worksheet Generator & Printer)

### 2. Copybook Studio (`zitie.html`) Layout
- **Left Panel (Configuration Studio)**:
  - Text Content: Title, Author/Dynasty, Main Body (with classic poetry sample loaders like 《沁园春·长沙》, 《岳阳楼记》, 《赤壁赋》, 《爱莲说》).
  - Grid Types:
    - 米字格 (Mizige - with cross and diagonal dashed lines)
    - 田字格 (Tianzige - with cross dashed line)
    - 回字格 (Huizige - concentric inner square)
    - 方格 (Fangge - clean square boundary)
  - Color Themes:
    - 经典朱砂红 (`#d32f2f` border, `#ef5350` inner dashed)
    - 典雅墨灰 (`#3f3f46` border, `#a1a1aa` inner dashed)
    - 苍翠竹青 (`#15803d` border, `#4ade80` inner dashed)
    - 经典藏青 (`#0071e3` border, `#60a5fa` inner dashed)
  - Practice Modes:
    - 描红临摹 (Tracing with 25% opacity font)
    - 隔行临摹 (Alternating text line and blank practice line)
    - 纯空白习字帖 (Blank worksheet grids)
  - Layout Grid Dimensions:
    - Columns: 10 ~ 14 cols per line
    - Rows: 10 ~ 16 rows per A4 page
- **Right Panel (Live A4 Preview Canvas)**:
  - Realistic A4 aspect ratio (210mm × 297mm) preview with soft drop shadow.
  - Multi-page pagination support if text exceeds one page.
  - Page header: Centered title & author with decorative calligraphy seals.
  - Precise vector SVG rendering for grid cells.
- **A4 Print Engine (`@media print`)**:
  - Page size: `@page { size: A4 portrait; margin: 12mm; }`
  - Zero header/sidebar interference during browser print (`window.print()`).
  - Crisp vector lines suitable for high-DPI laser & inkjet printing.
