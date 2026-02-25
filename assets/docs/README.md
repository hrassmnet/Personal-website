# Jack Bates Personal Website (GitHub Pages)

A bright, minimal, AI-lab-futuristic static site for: https://hrassmnet.github.io/Personal-website/

## 1) Tech choice (simplest)

**Chosen:** Plain **HTML + CSS + JavaScript** (no framework/build step).

Why this is best for your case:
- Zero dependencies, very fast loading, easy to edit on Windows.
- Native fit for GitHub Pages (just push files).
- Great for a clean professional site with straightforward sections.

---

## 2) File/folder scaffold

```text
Personal-website/
├─ index.html
├─ README.md
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  └─ main.js
│  ├─ img/
│  │  └─ og-cover.svg
│  └─ docs/
│     ├─ 8000.pdf
│     ├─ jackbatescv.pdf
│     ├─ Copy of ISO_IEC 25642.pptx
│     ├─ AssignmentSDG11.docx
│     ├─ SQL-3NF-Design.pdf
│     ├─ Hackathon Group K Presentation.pptx
│     ├─ main_analysis.pdf
│     ├─ Group5_AIHIRING.docx
│     ├─ CPM.docx
│     ├─ MS3107CAReport.docx
│     └─ ISO-IEC-38500-IT-Governance.pdf
└─ essay/
   └─ the-case-for-trying.html
```

> Note: DOCX/PPTX links download/open with Office apps but usually do not render in-browser on GitHub Pages. Exporting them to **PDF** is recommended for your “View” links.

---

## 3) Asset checklist to add/replace

### Already referenced in code
- `assets/docs/jackbatescv.pdf`
- `assets/docs/8000.pdf`
- `assets/docs/Copy of ISO_IEC 25642.pptx`
- `assets/docs/AssignmentSDG11.docx`
- `assets/docs/SQL-3NF-Design.pdf` *(placeholder: add your real file or rename in HTML)*
- `assets/docs/Hackathon Group K Presentation.pptx`
- `assets/docs/main_analysis.pdf`
- `assets/docs/Group5_AIHIRING.docx`
- `assets/docs/CPM.docx`
- `assets/docs/MS3107CAReport.docx`
- `assets/docs/ISO-IEC-38500-IT-Governance.pdf` *(placeholder: add your real file or rename in HTML)*

### Recommended upgrades
- Convert all DOCX/PPTX files to PDF and update links in `index.html` for cleaner browser viewing.

---

## 4) Exact Windows commands to publish

Use **Git Bash** or PowerShell inside your project folder.

### If repo already exists locally (current case)
```bash
git add .
git commit -m "Build bright minimalist GitHub Pages personal site scaffold"
git push origin main
```

Then enable Pages in GitHub:
1. Open repo: `https://github.com/hrassmnet/Personal-website`
2. **Settings → Pages**
3. **Source:** Deploy from branch
4. **Branch:** `main` / root
5. Save

Your URL: **https://hrassmnet.github.io/Personal-website/**

### From scratch (new machine)
```bash
git clone https://github.com/hrassmnet/Personal-website.git
cd Personal-website
# copy files into folder
git add .
git commit -m "Initial personal website"
git push origin main
```

---

## 5) How to add/replace project links later

1. Export your DOCX/PPTX to PDF.
2. Put PDFs in `assets/docs/`.
3. Open `index.html`.
4. Find the project card and replace only the `href` value.

Example:
```html
<a href="assets/docs/Group5_AIHIRING.pdf" target="_blank" rel="noopener">View</a>
```

Use `%20` for spaces in links if needed (or rename files with hyphens to keep links clean).

---

## SEO included

The site includes:
- `<title>` and meta description
- OpenGraph tags (`og:title`, `og:description`, `og:url`, `og:image`)

Edit these in `index.html` if needed.


## Quick insert/update projects (no chat file upload needed)

If your chat uploader only accepts image file types, that is fine — you do **not** need to upload project docs here.

Use this workflow instead:
1. Put your project PDFs directly in `assets/docs/` locally.
2. Open `assets/js/projects.js`.
3. For each project, edit:
   - `title`
   - `problem`
   - `did`
   - `tools`
   - `learned`
   - `links` (the PDF path)
4. Save, then commit and push.

Example link entry:
```js
links: [{ label: 'View', href: 'assets/docs/my-project.pdf' }]
```
