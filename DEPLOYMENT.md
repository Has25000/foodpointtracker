# Deployment Guide

This project is deployed to GitHub Pages automatically using GitHub Actions.

## Live Site

**URL:** https://has25000.github.io/foodpointtracker/

## How It Works

1. When you push to the `main` or `gh-pages` branch, GitHub Actions automatically:
   - Installs dependencies
   - Builds the project
   - Deploys to GitHub Pages

2. The workflow file is located at `.github/workflows/deploy.yml`

## Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# The build output is in the 'build' folder
```

## GitHub Pages Setup (One-Time)

If GitHub Pages isn't configured yet:

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
4. Push to trigger the first deployment

## Configuration

The Vite config (`vite.config.ts`) has the base path set for GitHub Pages:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/foodpointtracker/',
  build: {
    outDir: 'build',
  },
})
```

## Troubleshooting

- **404 errors:** Make sure the `base` in `vite.config.ts` matches your repository name
- **Build fails:** Check the Actions tab on GitHub for error logs
- **Not updating:** Clear your browser cache or wait a few minutes for CDN propagation
