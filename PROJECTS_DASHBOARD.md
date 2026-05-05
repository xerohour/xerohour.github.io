# 📚 Project Portfolio Dashboard

> Auto-curated, table-of-contents-style project inventory for `xerohour.github.io`.

## Table of Contents

1. [Overview](#overview)
2. [Project Index](#project-index)
3. [Plugin Dashboard Markdown Table](#plugin-dashboard-markdown-table)
4. [LaTeX Summary Matrix](#latex-summary-matrix)
5. [Structured JSON Payload](#structured-json-payload)
6. [README Insights](#readme-insights)

---

## Overview

This dashboard enumerates all project folders in this repository that include a `README.md`, extracts project naming context, and presents the information in multiple consumable formats:

- Human-friendly markdown table
- Plugin dashboard markdown table (ready to embed)
- LaTeX table for documentation/papers
- Rich JSON payload for automation and integrations

---

## Project Index

| # | Project Name | Folder Name | README Path | Primary Focus | Profile Link |
|---:|---|---|---|---|---|
| 1 | xerohour.github.io | `/` (repository root) | `README.md` | Matrix-themed GitHub Pages portfolio for AI/ML work, projects, and contact gateway | [Open](./README.md) |
| 2 | System Operator Portfolio (Docs Landing) | `docs` | `docs/README.md` | Lightweight docs entrypoint for the hosted portfolio and operator profile | [Open](./docs/README.md) |

---

## Plugin Dashboard Markdown Table

| Plugin Key | Display Name | Source Folder | Type | README Parsed | Summary | Health |
|---|---|---|---|---|---|---|
| `profile-root` | `xerohour.github.io` | `/` | `portfolio-site` | ✅ | Matrix-themed personal GitHub Pages hub with AI/ML focus, featured projects, encrypted contact UX, and rich profile metadata. | 🟢 Stable |
| `docs-landing` | `System Operator Portfolio` | `docs` | `documentation` | ✅ | Minimal documentation landing page describing operator identity, status, and canonical site URL. | 🟢 Stable |

---

## LaTeX Summary Matrix

```latex
\begin{table}[ht]
\centering
\caption{xerohour.github.io Project Inventory}
\begin{tabular}{|c|l|l|l|}
\hline
\textbf{ID} & \textbf{Project Name} & \textbf{Folder} & \textbf{Focus} \\
\hline
1 & xerohour.github.io & / & Matrix-themed GitHub Pages portfolio for AI/ML projects \\
\hline
2 & System Operator Portfolio (Docs Landing) & docs & Documentation landing page for hosted portfolio \\
\hline
\end{tabular}
\end{table}
```

---

## Structured JSON Payload

```json
{
  "dashboard_version": "1.0.0",
  "repository": "xerohour.github.io",
  "generated_for": "github-profile",
  "formats": ["markdown", "latex", "json"],
  "projects": [
    {
      "id": 1,
      "project_name": "xerohour.github.io",
      "folder_name": "/",
      "readme_path": "README.md",
      "readme_title": "<xerohour/>",
      "project_type": "portfolio-site",
      "summary": "Matrix-themed GitHub Pages portfolio featuring AI/ML developer profile, project showcases, anti-scraping contact protection, and themed UI components.",
      "tags": ["github-pages", "portfolio", "matrix-theme", "ai-ml", "frontend"],
      "status": "online"
    },
    {
      "id": 2,
      "project_name": "System Operator Portfolio (Docs Landing)",
      "folder_name": "docs",
      "readme_path": "docs/README.md",
      "readme_title": "Welcome to xerohour.github.io",
      "project_type": "documentation",
      "summary": "Concise docs landing page describing system operator profile with quick link to the live site.",
      "tags": ["docs", "landing-page", "profile"],
      "status": "online"
    }
  ],
  "totals": {
    "project_count": 2,
    "readme_files_parsed": 2,
    "folders_with_readme": ["/", "docs"]
  }
}
```

---

## README Insights

### `README.md` (Root)
- Strong visual branding and themed identity (`Matrix`, `Follow the White Rabbit`).
- Detailed technology profile spanning Python, JavaScript/TypeScript, TensorFlow, and bioinformatics.
- Includes curated project categories and profile widgets (stats, streaks, language usage).

### `docs/README.md`
- Minimal companion page that reinforces portfolio identity and directs users to the hosted site.
- Useful as a lightweight docs entrypoint for quick orientation.

