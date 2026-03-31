# Shaivam Philosophy Website

A static website about Shaivam philosophy built with pure **HTML, CSS, Vanilla JavaScript, and Bootstrap 5**, served through a React shell. All website pages live in `frontend/public/shaivam/`.

---

## Project Structure

```
/app
├── frontend/
│   ├── public/
│   │   └── shaivam/          ← All website pages live here
│   │       ├── index.html    ← Homepage
│   │       ├── about.html
│   │       ├── videos.html
│   │       ├── blog.html
│   │       ├── post1.html
│   │       ├── post2.html
│   │       ├── post3.html
│   │       ├── contact.html
│   │       ├── style.css
│   │       ├── script.js
│   │       ├── sitemap.xml
│   │       ├── robots.txt
│   │       └── images/       ← All 16 locally-stored images
│   └── src/
│       └── App.js            ← React entry (redirects to /shaivam/index.html)
```

---

## Local Development

### Prerequisites
- Node.js 18+
- Yarn

### Run locally

```bash
cd frontend
yarn install
yarn start
```

The app opens at `http://localhost:3000` and immediately redirects to `/shaivam/index.html`.

---

## Build for Production

Before deploying to any platform, build the React app. This copies everything in `public/` (including the entire `shaivam/` folder) into `build/`.

```bash
cd frontend
yarn install
yarn build
```

The production-ready files will be in `frontend/build/`.

---

## Deploy to Google Firebase Hosting

### Step 1 — Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Step 2 — Log in to Firebase

```bash
firebase login
```

### Step 3 — Create a Firebase project

Go to [console.firebase.google.com](https://console.firebase.google.com), create a new project (e.g., `shaivam-info`), and note the **Project ID**.

### Step 4 — Create `firebase.json` in the repo root

Create a file at `/app/firebase.json`:

```json
{
  "hosting": {
    "public": "frontend/build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|png|webp|svg)",
        "headers": [
          { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
        ]
      },
      {
        "source": "**/*.@(css|js)",
        "headers": [
          { "key": "Cache-Control", "value": "public, max-age=86400" }
        ]
      }
    ]
  }
}
```

### Step 5 — Create `.firebaserc` in the repo root

Create a file at `/app/.firebaserc` (replace `YOUR_PROJECT_ID` with your actual Firebase project ID):

```json
{
  "projects": {
    "default": "YOUR_PROJECT_ID"
  }
}
```

### Step 6 — Build and deploy

```bash
# From repo root
cd frontend && yarn build && cd ..
firebase deploy --only hosting
```

Firebase will output a live URL like:
`https://YOUR_PROJECT_ID.web.app`

### Step 7 — Connect custom domain (`shaivam.info`)

1. In the Firebase Console → **Hosting** → **Add custom domain**
2. Enter `shaivam.info`
3. Add the DNS records Firebase provides to your domain registrar
4. Firebase provisions an SSL certificate automatically

---

## Deploy to Vercel

You can deploy via the **Vercel Dashboard (recommended)** or the **CLI**.

---

### Option A — Vercel Dashboard (Git-connected, recommended)

1. Push your code to a GitHub/GitLab/Bitbucket repository

2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo

3. In the project configuration, set:

   | Setting | Value |
   |---|---|
   | **Framework Preset** | `Create React App` |
   | **Root Directory** | `frontend` |
   | **Build Command** | `yarn build` |
   | **Output Directory** | `build` |

4. Click **Deploy**

Vercel automatically deploys on every push to the main branch.

---

### Option B — Vercel CLI

#### Install the CLI

```bash
npm install -g vercel
```

#### Create `vercel.json` in the repo root

Create a file at `/app/vercel.json`:

```json
{
  "buildCommand": "cd frontend && yarn install && yarn build",
  "outputDirectory": "frontend/build",
  "framework": null,
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/shaivam/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

#### Deploy

```bash
# From repo root
vercel --prod
```

Follow the prompts (link to your Vercel account/team, set project name, etc.).

#### Connect custom domain (`shaivam.info`)

```bash
vercel domains add shaivam.info
```

Then add the DNS records shown in your terminal (or in the Vercel dashboard) to your domain registrar. Vercel handles SSL automatically.

---

## Post-Deployment Checklist

After deploying to either platform, complete these steps:

- [ ] Update `google-site-verification` meta tag in `index.html` with your actual Google Search Console verification code
- [ ] Submit `https://shaivam.info/sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
- [ ] Verify OG/Twitter social previews at [opengraph.xyz](https://www.opengraph.xyz) using your live URL
- [ ] Test all 8 pages load correctly
- [ ] Confirm all images load from `/shaivam/images/` (no broken image icons)

---

## Quick Reference

| Platform | Free tier | Custom domain SSL | Auto-deploy from Git | CDN |
|---|---|---|---|---|
| **Firebase Hosting** | Yes (10 GB/mo bandwidth) | Yes (automatic) | Yes (via Firebase + GitHub Actions) | Yes (Google CDN) |
| **Vercel** | Yes (100 GB/mo bandwidth) | Yes (automatic) | Yes (on every push) | Yes (Vercel Edge Network) |
