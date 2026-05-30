# Hello World — Live Date/Time

A minimal static page that displays "Hello, World!" and the current date and time (updates every second).

## Local preview

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel (Dashboard — recommended)

Vercel deploys from Git. Use these steps once your files are on GitHub.

### 1. Put the project on GitHub

**Option A — GitHub website (no CLI):**

1. Open [github.com/new](https://github.com/new) and create a repository (e.g. `sri-playground`).
2. On the new repo page, choose **uploading an existing file**.
3. Upload `index.html`, `style.css`, `app.js`, `package.json`, `.gitignore`, and `README.md`.
4. Commit to `main`.

**Option B — Git in Terminal:**

```bash
cd "/Users/smohan031/Library/CloudStorage/OneDrive-PwC/Documents/Cursor/SriPlayground"
git init
git add index.html style.css app.js package.json .gitignore README.md
git commit -m "Hello World page with live date/time"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sri-playground.git
git push -u origin main
```

### 2. Import into Vercel

1. Open [vercel.com/new](https://vercel.com/new).
2. **Import** your GitHub repository (connect GitHub if prompted).
3. Project settings for this static site:
   - **Framework Preset:** Other
   - **Build Command:** leave empty
   - **Output Directory:** `.` (root)
   - **Install Command:** leave empty (optional)
4. Click **Deploy**.

When the build finishes, Vercel shows a live URL (e.g. `https://sri-playground.vercel.app`).

## Deploy to Vercel (CLI — optional)

```bash
npm i -g vercel
vercel login
cd "/Users/smohan031/Library/CloudStorage/OneDrive-PwC/Documents/Cursor/SriPlayground"
vercel --prod
```

On corporate networks, if you see certificate errors, fix proxy/CA settings or ask IT; avoid disabling TLS verification in production workflows.
