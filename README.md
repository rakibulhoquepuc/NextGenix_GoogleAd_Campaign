# NexGenix_BusinessPortfolio

A clean, responsive landing page for a social media/marketing agency.  
Includes an eye‑catchy **Navbar**, **Hero** (with YouTube embed), **Services**, **Pricing**, **Free Session** lead form, and **Footer**—all styled with Tailwind CSS.

> Designed to be easy to customize: replace images, tweak copy, and adjust arrays (services/pricing) without changing the layout.

---

## ✨ Features

- Sticky, glassy **Navbar** with gradient brand text, animated link underlines, mobile menu, and gradient CTA.
- **Hero** section with dotted-wave background, right‑side glow, and gradient heading.
- **Services** grid with gradient borders, glossy images, clamped titles/descriptions (uniform card heights).
- **Pricing** cards with curved arcs, ribbon accent for the popular plan, and consistent feature lists.
- **Free Session** form: dark gradient card, centered inputs, gradient heading + underline, and a vivid “Back to Homepage” pill.
- **Footer** with newsletter pill, big brand headline, quick links, and social icons.
- Fully responsive (mobile‑first) and accessible (semantic headings, focus styles, larger tap targets).

---

## 🧰 Tech Stack

- **React 18** (Vite recommended)
- **Tailwind CSS 3** (+ autoprefixer/postcss)
- No external UI libraries required

---

## 🚀 Getting Started

> Requires **Node.js 18+** and **npm** or **yarn**.

### 1) Install
```bash
# if this is a Vite project
npm install
# or
yarn
```

### 2) Run the dev server
```bash
npm run dev
# or
yarn dev
```

### 3) Build for production
```bash
npm run build
npm run preview   # optional: serve build locally
```

> If you created the app with Create React App, use the CRA scripts instead (`npm start`, `npm run build`).

---

## 🗂️ Project Structure (minimal)

```
src/
  assets/
    logo.jpg            # your logo
    ...                 # any images you add
  App.jsx               # all sections (Nav, Hero, Services, Pricing, FreeSession, Footer)
  index.css             # Tailwind base/utilities
  main.jsx              # React entry
tailwind.config.js
postcss.config.js
index.html
```

---

## 🔧 Customization Guide

Most customizations are a single line change.

### Logo
```jsx
// App.jsx (top)
import myLogo from "./assets/logo.jpg"; // replace with your file in src/assets
```

### Hero — YouTube Video
```jsx
const YOUTUBE_ID = "JBraSNVrueA"; // <- put your own video ID
// Example: https://youtu.be/<ID>
```

### Gradient Headings
- The gradient text utility is reused across sections:
```html
<span class="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">...</span>
```
- Underlines use a matching gradient bar right under the heading.

### Services Cards
- Edit the array inside `ServicesSection()`:
```jsx
const services = [{ title, img, desc }, ...]
```
- Titles/descriptions are **clamped** so all cards remain the same height.
  - Change line clamps via `WebkitLineClamp` if you want more/less text.

### Pricing Plans
- Edit the array inside `PricingSection()`:
```jsx
const plans = [{ name, price, currency, period, features: [...] }, ...]
```
- The middle plan can be styled as “Most Popular” by adding a ribbon or scaling (already included in one alternative variant).

### Free Session Form
- Hook the form to your backend/Formspree/etc. in `onSubmit`.
- Inputs are pre‑styled. Add validation as needed.

### Colors
- Change gradients by editing the `from`, `via`, and `to` Tailwind classes.
- Update global background in `<body>` or the root wrapper.

---

## 🧪 Lint/Format (optional)

If you add ESLint/Prettier:
```bash
npm run lint
npm run format
```

---

## 🌐 Deployment

### Vercel / Netlify (recommended)
1. Push this repo to GitHub.
2. Import the repo in Vercel/Netlify.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

### GitHub Pages (static)
- Build locally: `npm run build` → upload the `dist` folder to any static host, or use a GH Action to publish `dist` to `gh-pages`.

---

---


## 📝 License

© 2025 RAKIBUL HOQUE

Feel free to use, modify, and distribute with attribution.
