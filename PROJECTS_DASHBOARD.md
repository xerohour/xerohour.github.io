# 📚 Project Knowledge Graph Dashboard

> A detailed, profile-ready project index built from repository `README.md` files and presented in a plugin-dashboard style.

## Table of Contents

1. [Overview](#overview)
2. [Plugin Dashboard Table](#plugin-dashboard-table)
3. [LaTeX-Ready JSON Payload](#latex-ready-json-payload)
4. [Project Detail Cards](#project-detail-cards)

---

## Overview

This dashboard inventories project spaces in this repository and extracts human-readable summaries from each folder's `README.md`.

- **Repository Profile Name:** `xerohour.github.io`
- **Total Indexed Project Areas:** `2`
- **Data Source:** Local markdown documentation files
- **Rendering Style:** Markdown table + LaTeX-formatted JSON for downstream tooling/plugins

---

## Plugin Dashboard Table

| # | Project Name | Folder Name | README Path | Purpose Snapshot | Profile Tagging |
|---|--------------|-------------|-------------|------------------|-----------------|
| 1 | `xerohour.github.io` | `.` (root) | `README.md` | Matrix-themed personal GitHub Pages portfolio with AI/ML branding, encrypted contact UX, animated digital rain, and showcase sections. | `portfolio`, `github-pages`, `matrix-ui`, `ai-ml` |
| 2 | `System Operator Portfolio` | `docs` | `docs/README.md` | Compact operator profile page describing AI/ML specialization in genome analysis, autonomous agents, and neural interfaces. | `documentation`, `profile`, `bioinformatics`, `agents` |

---

## LaTeX-Ready JSON Payload

```json
{
  "dashboard_title": "\\textbf{Project Knowledge Graph Dashboard}",
  "repository": "xerohour.github.io",
  "generated_from": [
    "README.md",
    "docs/README.md"
  ],
  "rendering": {
    "style": "plugin_dashboard_markdown_table",
    "latex_theme": "\\texttt{Matrix\\_NeoGreen}",
    "notes": "All summaries are derived from README content and normalized for profile display."
  },
  "projects": [
    {
      "id": "P-001",
      "project_name": "xerohour.github.io",
      "folder_name": ".",
      "readme_file": "README.md",
      "summary": "Matrix-themed personal GitHub Pages portfolio featuring animated UI, anti-scraping encrypted contact systems, and AI/ML-oriented project highlights.",
      "focus_areas": ["AI/ML", "Genome Analysis", "Autonomous Agents", "Web Portfolio"],
      "latex_card": "\\begin{bmatrix}\\text{Name}\\\\\\text{Folder}\\\\\\text{Theme}\\end{bmatrix}=\\begin{bmatrix}\\texttt{xerohour.github.io}\\\\\\texttt{.}\\\\\\texttt{Matrix}\\end{bmatrix}"
    },
    {
      "id": "P-002",
      "project_name": "System Operator Portfolio",
      "folder_name": "docs",
      "readme_file": "docs/README.md",
      "summary": "Concise portfolio descriptor centered on AI/ML, genome analytics, autonomous agents, and neural interface themes.",
      "focus_areas": ["Documentation", "AI Identity", "Bioinformatics"],
      "latex_card": "\\begin{bmatrix}\\text{Name}\\\\\\text{Folder}\\\\\\text{Status}\\end{bmatrix}=\\begin{bmatrix}\\texttt{System\\ Operator\\ Portfolio}\\\\\\texttt{docs}\\\\\\texttt{Online}\\end{bmatrix}"
    }
  ],
  "metrics": {
    "total_projects": 2,
    "with_readme": 2,
    "coverage": "100\\%",
    "equation": "\\text{Coverage}=\\frac{2}{2}\\times100\\%=100\\%"
  }
}
```

---

## Project Detail Cards

### 1) `xerohour.github.io` (root)
- **Folder:** `.`
- **README:** `README.md`
- **Mission Profile:** A visually rich, Matrix-inspired developer portfolio with cyberpunk aesthetics and technical storytelling.
- **Notable Themes from README:**
  - AI/ML developer identity and technology stack
  - Project showcase spanning genome analysis, AI agents, and creative generators
  - Contact protection through layered obfuscation
  - GitHub stats-driven profile telemetry

### 2) `System Operator Portfolio` (`docs`)
- **Folder:** `docs`
- **README:** `docs/README.md`
- **Mission Profile:** Minimal, high-signal documentation entry for operator specialization.
- **Notable Themes from README:**
  - Bioinformatics and genome analysis focus
  - Autonomous-agent and neural-interface positioning
  - Matrix-themed identity alignment with main profile

---

### Profile Integration Note

To feature this on your GitHub profile/repository front page, link this file directly from your main `README.md` (added below as **Project Knowledge Graph Dashboard**).
