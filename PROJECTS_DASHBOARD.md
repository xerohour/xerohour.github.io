# 📚 Project Atlas Dashboard

> A detailed, table-of-contents style inventory of projects in this repository, including folder mapping and README-derived summaries.

## Table of Contents

1. [Overview](#overview)
2. [Plugin Dashboard (Markdown Table)](#plugin-dashboard-markdown-table)
3. [LaTeX-Formatted JSON Payload](#latex-formatted-json-payload)
4. [Project Detail Cards](#project-detail-cards)

---

## Overview

This dashboard scans all project folders in this repository that contain a `README.md` and presents:

- **Project Name** (human-readable)
- **Folder Name** (actual directory)
- **README signal** (description extracted from README context)
- **Dashboard metadata** for plugin-style rendering

Detected project count: **2**.

---

## Plugin Dashboard (Markdown Table)

| # | Project Name | Folder Name | README File | Profile Role | Summary |
|---:|---|---|---|---|---|
| 1 | `<xerohour/>` | `.` (repo root) | `README.md` | Primary GitHub profile showcase | Matrix-themed personal portfolio with AI/ML focus, animated UI, encrypted contact channel, and featured project highlights. |
| 2 | `xerohour.github.io Docs` | `docs` | `docs/README.md` | Documentation landing node | Minimal system-operator docs entry pointing to the live GitHub Pages portfolio. |

---

## LaTeX-Formatted JSON Payload

```json
{
  "dashboard_title": "\\textbf{Project Atlas Dashboard}",
  "repository": "xerohour.github.io",
  "project_count": 2,
  "rendering": {
    "style": "plugin-dashboard",
    "theme": "matrix",
    "table_format": "markdown",
    "math_label": "\\mathcal{P}_{dashboard}"
  },
  "projects": [
    {
      "id": "P_1",
      "project_name": "<xerohour/>",
      "folder_name": ".",
      "readme_path": "README.md",
      "latex_header": "\\textsf{Primary\\ Portfolio}",
      "summary": "Matrix-themed GitHub Pages portfolio for AI/ML identity and featured work.",
      "readme_signals": [
        "Digital rain animation",
        "Glitch effects",
        "Encrypted contact details",
        "AI project showcase"
      ],
      "profile_integration": {
        "visible_on_profile": true,
        "toc_anchor": "#project-detail-cards",
        "badge_formula": "\\mathrm{Status}=\\text{ONLINE}"
      }
    },
    {
      "id": "P_2",
      "project_name": "xerohour.github.io Docs",
      "folder_name": "docs",
      "readme_path": "docs/README.md",
      "latex_header": "\\textsf{Documentation\\ Node}",
      "summary": "Lightweight docs node for portfolio system with direct link to live site.",
      "readme_signals": [
        "System operator portfolio",
        "Matrix theme",
        "Status online",
        "View full site link"
      ],
      "profile_integration": {
        "visible_on_profile": true,
        "toc_anchor": "#project-detail-cards",
        "badge_formula": "\\mathrm{Theme}=\\text{Matrix}"
      }
    }
  ]
}
```

---

## Project Detail Cards

### 1) `<xerohour/>`
- **Folder:** `.`
- **README:** `README.md`
- **Identity:** Primary profile project.
- **Highlights from README:**
  - Matrix-themed visual branding and digital rain aesthetic.
  - Project and contact sections built for public portfolio use.
  - AI/ML, genome analysis, and autonomous-agent positioning.

### 2) `xerohour.github.io Docs`
- **Folder:** `docs`
- **README:** `docs/README.md`
- **Identity:** Supporting documentation node.
- **Highlights from README:**
  - Concise welcome page for portfolio context.
  - Status and theme metadata.
  - Direct pointer to live GitHub Pages deployment.

---

## Profile Integration Note

This file is designed to be linked from your main profile README so visitors can discover a structured project index quickly.
