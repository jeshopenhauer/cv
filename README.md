# CV - Jesús Moral Aranda

Portfolio and CV website for Jesús Moral Aranda.
cd /home/almo/Desktop/cv/cv_pdf && pdflatex -interaction=nonstopmode cv.tex && cp cv.pdf ../web/cv.pdf && echo "✅ Done"
## 📋 Project Structure (Reorganized)

```
cv/
├── cv_pdf/                  # LaTeX source (SINGLE SOURCE OF TRUTH)
│   ├── cv.tex              # Edit this to update CV content
│   ├── cv.pdf              # Compiled PDF from LaTeX
│   └── profile_photo.jpg
│
├── web/                     # Website (clean separation)
│   ├── index.html          # Clean HTML structure
│   ├── styles.css          # All styling (~550 lines)
│   ├── script.js           # Form submission handler
│   ├── cv.pdf              # Copy from cv_pdf/
│   └── [images]            # Images for the website
│
├── .gitignore              # Ignore compiled files & OS junk
└── README.md               # This file
```

## 🚀 Quick Start (First Time)

1. **Copy images and PDF to web directory:**
```bash
cd /home/almo/Desktop/cv

# Copy compiled PDF
cp cv_pdf/cv.pdf web/cv.pdf

# Copy all images (one command)
cp qr.png terminal.png a.png b.png dibujo-1.png ecust.png eo.png \
   inspector.png inspector2.png pg.png purchasing_manager_web.png \
   us.png valeo.png "FOTO CARNET.jpg" web/
```

2. **View locally:**
```bash
# Open in browser
open web/index.html

# Or use a local server
cd web
python3 -m http.server 8000
# Visit: http://localhost:8000
```

## 📝 Updating the CV

### Edit Content
1. Update `cv_pdf/cv.tex` with new text/experience
2. Compile to PDF:
```bash
cd cv_pdf
pdflatex -interaction=nonstopmode cv.tex
```
3. Copy new PDF to web:
```bash
cp cv.pdf ../web/cv.pdf
```

### Edit Website Design
- **CSS**: Edit `web/styles.css`
- **JavaScript**: Edit `web/script.js`
- **HTML content**: Edit `web/index.html`

## 📤 Push to GitHub

```bash
# From project root
git add .
git commit -m "Update CV: [your message]"
git push origin main
```

## 🛠️ Maintenance Commands

| Task | Command |
|------|---------|
| Compile CV (from cv_pdf/) | `pdflatex -interaction=nonstopmode cv.tex` |
| Update web PDF | `cp cv_pdf/cv.pdf web/cv.pdf` |
| Clean LaTeX temp files | `cd cv_pdf && rm -f *.aux *.log *.out` |
| View website locally | `cd web && python3 -m http.server 8000` |
| Git commit + push | `git add . && git commit -m "msg" && git push` |

## 🌐 GitHub Pages Setup (Optional)

To host on GitHub Pages:

1. Go to repository Settings → Pages
2. Select branch: `main`
3. Select folder: `/web` (or `/root`)
4. Your site will be at: `https://jeshopenhauer.github.io/cv/`

## 📋 Key Principles

✓ **LaTeX is the source**: `cv_pdf/cv.tex` is updated first  
✓ **Web is presentation**: HTML/CSS/JS are separate for easy styling updates  
✓ **Clean git history**: Generated files (`.aux`, `.log`, `.pdf`) are ignored  
✓ **Scalable structure**: Easy to add new sections or redesign  
✓ **Portable**: No inline styles or scripts to maintain

## 🔗 Links

- **Portfolio**: https://jeshopenhauer.github.io/cv/
- **CV Video**: https://youtu.be/LlHxzisz39U?si=ySiazCgYDGOsmxNk
- **GitHub**: https://github.com/jeshopenhauer

---

**Structure reorganized:** July 25, 2026
