# SH Hair Studio Demo Website

A responsive five-page demo website for SH Hair Studio (Unisex Salon), Vijay Nagar, Indore. Built with HTML, CSS, and JavaScript, served locally with Vite.

## Run in VS Code

1. Install [Node.js](https://nodejs.org/) (LTS).
2. Open this folder in VS Code.
3. Open **Terminal → New Terminal** and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for hosting

```bash
npm run build
npm run preview
```

The production-ready website is generated in `dist/`.

## Pages

- `index.html` — Home
- `services.html` — Services
- `gallery.html` — Gallery and Google Maps media link
- `about.html` — Studio overview
- `contact.html` — Contact details and map

## GitHub / Git remote

Create an empty repository on GitHub, then from this folder run:

```bash
git init
git add .
git commit -m "Add SH Hair Studio demo website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your repository URL. Do not commit passwords, API keys, or private credentials.

## Notes

- Salon phone, address, hours, rating, and review count are based on the supplied details / Maps listing.
- Gallery images are sample images for the demo; use salon-approved original images before publishing.
- Fonts and sample photos load from external Google Fonts and Unsplash URLs, so internet access is needed to see those assets.
- Owner name and service prices were not provided.
"# sh-salon" 
