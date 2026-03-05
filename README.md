# Uma Bhargavi — Portfolio Website
## Complete Setup, Hosting & Update Guide

---

## 📁 Your Files

```
portfolio/
├── index.html     ← The website (never need to edit this)
├── style.css      ← All styling (only edit if changing design)
├── app.js         ← Loads data.json and builds the site (don't touch)
├── data.json      ← ✅ YOUR CONTENT FILE — edit this to update everything
├── resume.pdf     ← Add your resume PDF here
└── README.md      ← This guide
```

---

## ✅ Why Option 2 (Static + JSON) is Best for Beginners

| | Option 1: Next.js | Option 2: JSON (This) | Option 3: Notion |
|---|---|---|---|
| Setup difficulty | Hard | **Easy** | Medium |
| Editing content | Code files | **One JSON file** | Notion app |
| Free hosting | Yes | **Yes** | Needs paid plan |
| Works offline | No | **Yes** | No |
| Custom design | Full | **Full** | Limited |

**Verdict:** Edit `data.json` like a form. No coding needed.

---

## 🖊️ HOW TO UPDATE YOUR CONTENT

### Add a New Project
Open `data.json`, find the `"projects"` array, and add a new entry:

```json
{
  "id": 4,
  "title": "Your New Project Title",
  "category": "Financial Analysis",
  "description": "What you did and what you found.",
  "tools": ["Excel", "PowerPoint"],
  "skills": ["Financial Analysis", "Reporting"],
  "image": "",
  "link": "https://yourlink.com"
}
```
👉 Add a comma after the previous project's closing `}` before adding yours.

### Update Your Email / LinkedIn
Find `"contact"` in `data.json`:
```json
"contact": {
  "email": "your.real.email@gmail.com",
  "linkedin": "https://linkedin.com/in/your-actual-profile"
}
```

### Add a New Skill
Find the matching category inside `"skills"` and add to the `"items"` array:
```json
{ "category": "Finance & Accounting", "items": ["...existing...", "Your New Skill"] }
```

### Update Your Photo
1. Save your professional photo as `photo.jpg` in the portfolio folder
2. In `data.json`, find `"hero"` and set:
   ```json
   "photo": "photo.jpg"
   ```

### Add a New Certification
```json
{
  "name": "Your Certification Name",
  "issuer": "Issuing Body",
  "status": "Completed",
  "icon": "fa-award",
  "year": "2025"
}
```

---

## 🌐 HOW TO HOST FOR FREE

### Option A — GitHub Pages (Recommended)

**Step 1: Create a GitHub account**
- Go to https://github.com → Sign Up (free)

**Step 2: Create a repository**
- Click the green "New" button
- Name it: `portfolio` (or `yourusername.github.io` for a custom URL)
- Set it to **Public**
- Click "Create repository"

**Step 3: Upload your files**
- Click "uploading an existing file"
- Drag ALL your portfolio files (`index.html`, `style.css`, `app.js`, `data.json`, `resume.pdf`)
- Scroll down → click "Commit changes"

**Step 4: Enable GitHub Pages**
- Go to your repo → Settings → Pages (left sidebar)
- Under "Source" → select "Deploy from a branch"
- Branch: `main`, folder: `/ (root)`
- Click Save

**Step 5: Your site is live!**
- URL: `https://yourusername.github.io/portfolio`
- Takes 1–3 minutes to go live

**To update later:**
- Edit `data.json` on GitHub directly (click the file → pencil icon → edit → commit)
- Changes go live in ~30 seconds

---

### Option B — Netlify (Even Easier, Drag & Drop)

1. Go to https://netlify.com → Sign up free
2. Click "Add new site" → "Deploy manually"
3. Drag your entire `portfolio/` folder onto the page
4. Done! You'll get a URL like `https://amazing-name-123.netlify.app`

**To update:**
- Drag & drop the folder again — Netlify replaces everything automatically

**Custom domain (optional):**
- Netlify lets you connect a custom domain for free (you buy the domain ~$10/year)

---

## 🔗 CONNECTING TO LINKEDIN

1. Add your LinkedIn URL in `data.json` → `"linkedin": "https://linkedin.com/in/YOUR-ID"`
2. On LinkedIn → Edit Profile → Website → add your portfolio URL
3. On LinkedIn → About section → mention your portfolio link
4. Add portfolio URL to your LinkedIn headline: `CMA | Financial Analyst | umabhargavi.netlify.app`

---

## 📬 SETTING UP THE CONTACT FORM (Free)

1. Go to https://formspree.io → Sign up free
2. Click "New Form" → name it "Portfolio Contact"
3. Copy your form ID (looks like: `xrgjkwqp`)
4. In `data.json`, find `"formspreeId"` and replace:
   ```json
   "formspreeId": "xrgjkwqp"
   ```
5. Free plan: 50 submissions/month (more than enough)

---

## 🔧 ADDING A NEW SECTION LATER

1. Add data to `data.json` (new key like `"testimonials": [...]`)
2. In `index.html`, add the section HTML structure
3. In `app.js`, add a `buildTestimonials()` function
4. In `style.css`, add styles for the new section

Or ask me to help add the section — just paste your updated `data.json` and I'll write the code.

---

## 🖥️ RUNNING LOCALLY (to preview before publishing)

Because the site loads `data.json` via fetch, you need a simple server:

**Option 1 — VS Code (easiest):**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

**Option 2 — Python:**
```bash
cd portfolio
python3 -m http.server 8000
# Open: http://localhost:8000
```

**Option 3 — Node.js:**
```bash
npx serve .
```

---

## 📋 QUICK CONTENT CHECKLIST

Before going live, update these in `data.json`:

- [ ] `hero.email` → your real email
- [ ] `hero.linkedin` → your LinkedIn URL
- [ ] `hero.photo` → add `photo.jpg` and set the path
- [ ] `meta.resumeUrl` → add `resume.pdf` to folder
- [ ] `contact.email` → your real email
- [ ] `contact.linkedin` → your LinkedIn URL
- [ ] `contact.formspreeId` → from formspree.io
- [ ] Projects → add real project details
- [ ] Footer copyright name

---

*Portfolio built with HTML, CSS, and JavaScript. Content managed via data.json.*
