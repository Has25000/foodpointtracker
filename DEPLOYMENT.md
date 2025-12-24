# Deployment Guide

This project is deployed to GitHub Pages using the gh-pages branch.

## Live Site

**URL:** https://has25000.github.io/foodpointtracker/

## How to Deploy

1. Make sure you're on the `main` branch with your changes
2. Build the project:
   ```bash
   npm run build
   ```
3. Switch to gh-pages branch:
   ```bash
   git checkout gh-pages
   ```
4. Remove old files (keep .git folder):
   ```bash
   rm -rf assets index.html
   ```
5. Copy built files:
   ```bash
   cp -r dist/* .
   rm -rf dist node_modules
   ```
6. Commit and push:
   ```bash
   git add -A
   git commit -m "Deploy updated site"
   git push origin gh-pages
   ```
7. Switch back to main:
   ```bash
   git checkout main
   ```

## GitHub Pages Setup (One-Time)

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **(root)**
4. Click Save

## Configuration

The Vite config (`vite.config.ts`) has the base path set for GitHub Pages:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/foodpointtracker/',
  build: {
    outDir: 'dist',
  },
})
```

## Troubleshooting

- **404 errors:** Make sure the `base` in `vite.config.ts` matches your repository name
- **Not updating:** Clear your browser cache or wait a few minutes for CDN propagation
- **Build fails:** Run `npm install` first to ensure dependencies are installed
