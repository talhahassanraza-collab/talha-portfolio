# Talha Hassan Raza — Portfolio

A responsive static portfolio featuring AI ad creative, visual stories, website visuals and a downloadable CV.

## Local preview

Run `python -m http.server 8765` from this folder and open http://localhost:8765.

## Editing

- `index.html`: page copy, video gallery and contact links.
- `assets/css/custom.css`: current design and responsive styles.
- `assets/js/projects.js`: website projects and screenshot paths.
- `assets/js/services.js`: services.
- `assets/js/resume.js`: experience and education.
- `assets/js/main.js`: navigation, portfolio filters and email enquiry.
- `assets/documents/Talha-Hassan-Raza-CV.pdf`: downloadable CV.

Images are stored locally in WebP format. The contact form prepares an email in the visitor's email application; it does not send messages through a server. Video links open YouTube.

## Deployment

Pushing to `main` runs `.github/workflows/pages.yml` to deploy GitHub Pages.

Live site: https://talhahassanraza-collab.github.io/talha-portfolio/

## Template credit

The starting layout is based on the Drake HTML/CSS portfolio template by IssaKass. The design has been adapted for this portfolio. Unused template demo assets and obsolete Sass sources have been removed; the active stylesheets are in `assets/css/`.
