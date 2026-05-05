# 📚 Project Dashboard Table of Contents

> Auto-curated project index from local `README.md` files in this repository.

## Table of Contents

1. [Portfolio Root Project](#1-portfolio-root-project)
2. [Documentation Project](#2-documentation-project)
3. [Plugin Dashboard JSON (LaTeX-formatted fields)](#plugin-dashboard-json-latex-formatted-fields)

---

## 1) Portfolio Root Project

- **Project Name:** `xerohour.github.io`
- **Folder Name:** `.` (repository root)
- **README Source:** `README.md`

### Overview

This project is a Matrix-themed personal portfolio on GitHub Pages featuring AI/ML-focused branding, animated UI effects, anti-scraping contact protection, and highlighted project showcases.

### Key Highlights

- Matrix-inspired visual identity with digital rain and glitch effects.
- AI/ML positioning (autonomous agents, genome analysis, neural networks).
- Responsive web design and encrypted contact presentation.
- Featured modules for Promethease Offline, AI Agents, Genome Tools, and Perchance generators.

---

## 2) Documentation Project

- **Project Name:** `docs`
- **Folder Name:** `docs`
- **README Source:** `docs/README.md`

### Overview

A concise docs entry that introduces the site as a system-operator portfolio and links to the deployed GitHub Pages site.

### Key Highlights

- Lightweight introduction page.
- Reinforces Matrix theme and AI/ML profile.
- Includes direct link to the live website.

---

## Plugin Dashboard JSON (LaTeX-formatted fields)

```json
{
  "dashboard_title": "\\textbf{Xerohour Project Plugin Dashboard}",
  "generated_from": "\\texttt{README.md} + \\texttt{docs/README.md}",
  "style": {
    "table_theme": "\\textcolor{green}{Matrix}",
    "accent": "\\texttt{#00ff41}",
    "layout": "\\mathrm{detailed}"
  },
  "projects": [
    {
      "project_name": "\\textbf{xerohour.github.io}",
      "folder_name": "\\texttt{.}",
      "readme_file": "\\texttt{README.md}",
      "summary": "\\parbox{0.78\\linewidth}{Matrix-themed GitHub Pages portfolio with animated effects, anti-scraping contact security, and AI/ML project showcases.}",
      "keywords": [
        "\\textit{AI/ML}",
        "\\textit{Genome Analysis}",
        "\\textit{Autonomous Agents}",
        "\\textit{Perchance}"
      ]
    },
    {
      "project_name": "\\textbf{docs}",
      "folder_name": "\\texttt{docs}",
      "readme_file": "\\texttt{docs/README.md}",
      "summary": "\\parbox{0.78\\linewidth}{Minimal documentation hub describing the operator portfolio and linking to the deployed site.}",
      "keywords": [
        "\\textit{Docs}",
        "\\textit{Portfolio}",
        "\\textit{GitHub Pages}"
      ]
    }
  ]
}
```

---

## Markdown Table (Plugin Dashboard View)

| # | Project Name | Folder | README | Detail Level | Core Description |
|---:|---|---|---|---|---|
| 1 | **xerohour.github.io** | `.` | `README.md` | High | Matrix-themed portfolio with AI/ML identity, effects, and project showcases. |
| 2 | **docs** | `docs` | `docs/README.md` | Medium | Compact docs landing page linking to live portfolio site. |

---

## Suggested GitHub Profile Placement

- Add this file as a featured index from your profile/root README.
- Keep the JSON block for tool/plugin ingestion and the markdown table for human readability.
- Update this dashboard whenever new project folders gain their own `README.md`.
