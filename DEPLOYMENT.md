# Deploying Nutriloop Market to GitHub Pages

This app is configured for easy deployment to GitHub Pages using HashRouter.

## Prerequisites
- Node.js installed
- Git installed
- GitHub account

## Deployment Steps

### 1. Install gh-pages package
```bash
npm install --save-dev gh-pages
```

### 2. Add deployment scripts to package.json
Add these scripts to your `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3. Build and Deploy
```bash
npm run deploy
```

### 4. Configure GitHub Pages
1. Go to your repository on GitHub
2. Navigate to Settings → Pages
3. Set Source to `gh-pages` branch
4. Save

Your app will be live at: `https://yourusername.github.io/nutriloop-market/`

## Important Notes

- The app uses **HashRouter** which is compatible with GitHub Pages
- All routes work client-side without server configuration
- The `base` path in `vite.config.ts` is set to `"./"` for relative paths
- Static assets are bundled correctly for production

## Local Testing
```bash
npm run dev
```

## Build for Production
```bash
npm run build
```

## Preview Production Build
```bash
npm run preview
```
