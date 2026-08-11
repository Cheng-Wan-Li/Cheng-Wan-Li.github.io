# Wanli Cheng — Academic Website

A restrained, responsive personal academic website for Wanli Cheng, built with Next-compatible React components and the Vinext toolchain.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages

The repository includes a Pages workflow in `.github/workflows/pages.yml`. After pushing to the `main` branch, enable **GitHub Pages → GitHub Actions** in the repository settings. The workflow validates the application build, then publishes the framework-independent static files in `github-pages/`.

Before publishing to GitHub Pages, add the verified CV PDF and academic profile links. The `app/` directory powers the full preview and Sites deployment; `github-pages/` is the directly deployable static edition.
