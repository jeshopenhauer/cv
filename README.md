# CV - Jesús Moral Aranda

Portfolio and CV website for Jesús Moral Aranda.

## 📋 How to Compile the LaTeX CV

Navigate to the cv folder and run:

```bash
cd /home/almo/Desktop/cv
pdflatex -interaction=nonstopmode cv_master.tex
```

This will generate `cv_master.pdf` containing the compiled CV.

To clean up temporary files:
```bash
rm -f *.aux *.log *.out
```

## 🔄 How to Push Changes to GitHub

1. **Copy the compiled PDF to the repository:**
```bash
cp /home/almo/Desktop/cv/cv_master.pdf /home/almo/Desktop/cv_repo/cv.pdf
```

2. **Navigate to the repository folder:**
```bash
cd /home/almo/Desktop/cv_repo
```

3. **Stage all changes:**
```bash
git add -A
```

4. **Commit with a meaningful message:**
```bash
git commit -m "Your commit message here"
```

5. **Push to GitHub using your personal access token:**
```bash
git push https://<YOUR_TOKEN>@github.com/jeshopenhauer/cv.git main
```

Replace `<YOUR_TOKEN>` with your GitHub personal access token.

### Full Push Command (One-liner):
```bash
cp /home/almo/Desktop/cv/cv_master.pdf /home/almo/Desktop/cv_repo/cv.pdf && cd /home/almo/Desktop/cv_repo && git add -A && git commit -m "Update CV" && git push https://<YOUR_TOKEN>@github.com/jeshopenhauer/cv.git main
```

## 📁 Project Structure

- **cv_master.tex** - LaTeX source file for the CV (in `/home/almo/Desktop/cv/`)
- **cv.pdf** - Compiled PDF version of the CV
- **tfg_jesus_moral_aranda.pdf** - Bachelor's thesis (Quantitative Finance)
- **index.html** - Personal portfolio website
- **Images** - Screenshots and project images

## 📝 Files Included

- `cv.pdf` - Main curriculum vitae
- `tfg_jesus_moral_aranda.pdf` - Bachelor's thesis on "Análisis Estocástico del Arbitraje Financiero"
- `index.html` - Interactive portfolio webpage
- Various project screenshots and documentation

## 🔗 Links

- **Portfolio Website:** https://jeshopenhauer.github.io/cv/
- **CV Video Summary:** https://youtu.be/DRCMUZXvOmQ
- **GitHub Profile:** https://github.com/jeshopenhauer

## ⚙️ Quick Reference

| Task | Command |
|------|---------|
| Compile CV | `pdflatex -interaction=nonstopmode cv_master.tex` |
| Clean temp files | `rm -f *.aux *.log *.out` |
| Stage changes | `git add -A` |
| Commit changes | `git commit -m "message"` |
| Push to GitHub | `git push https://<TOKEN>@github.com/jeshopenhauer/cv.git main` |

---

**Last updated:** July 21, 2026
