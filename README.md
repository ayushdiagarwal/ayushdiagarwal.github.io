````markdown
## 🚀 Deploying to GitHub Pages (via `docs/` folder)

To deploy the latest build of the site to GitHub Pages:

1. Run the deploy script:

   ```bash
   npm run deploy
   ```
````

This will:

- Build the project with Vite (`vite build`)
- Clear the existing contents of the `docs/` folder
- Copy the latest build output (`dist/`) into `docs/`

2. Commit and push the updated `docs/` folder:

   ```bash
   git add docs/
   git commit -m "Update site"
   git push
   ```

Your changes will be live at:
📍 `https://<your-github-username>.github.io`
