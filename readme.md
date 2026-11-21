# Portfolio & CV Web App

A React + Vite + TypeScript portfolio application hosted on GitHub Pages at **`https://holipin.github.io/CV/`**.

## Local Development

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Start the local development server:**
   ```bash
   bun run dev
   ```

3. **Preview in browser:**
   Open [http://localhost:3000/CV/](http://localhost:3000/CV/) while the dev server is running.

## Automated Deployment (CI/CD)

This repository is configured with **GitHub Actions** (`.github/workflows/deploy.yml`) to automatically build and publish updates to **GitHub Pages**:

* **Triggers:** Committing and pushing changes from **Visual Studio** (or any Git client) to either the **`Feature`** or **`main`** branch automatically triggers the `Deploy Vite App to GitHub Pages` workflow.
* **Pipeline:** GitHub Actions installs dependencies with Bun, builds the production bundle (`bun run build`), and deploys the `./dist` output directly to `https://holipin.github.io/CV/`.
* **Syncing with Google AI Studio:** After pushing changes from Visual Studio, use **Pull Changes** inside AI Studio's **Settings > GitHub** menu to keep both environments synchronized.