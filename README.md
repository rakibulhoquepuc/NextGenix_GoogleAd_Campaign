# NexGenix — Google Ads Landing (React + Vite + Tailwind)

A clean, minimal, and **eye‑catchy** landing page focused on Google Ads. Built with **React + Vite + Tailwind CSS** and organized as simple, reusable sections so you can iterate fast.

## ✨ Highlights
- **Glassy Navbar** with desktop + mobile menu.
- **Hero** with gradient heading, dotted waves, and a framed YouTube embed (autoplay muted).
- **Process** (3‑step) with gradient section heading.
- **Advanced Targeting** section (minimal & polished) with two features and an illustration.
- **Expert Features** (3 cards) with image + text.
- **Free Website Audit** form card with back‑to‑home pill.
- **Footer** with newsletter, quick links, and socials.
- Fully responsive. Accessible HTML where it matters. Easy to customize.

---

## 🧱 Tech Stack
- **React 18**
- **Vite 5**
- **Tailwind CSS 3**

---

## 📁 Project Structure (suggested)
```
src/
  assets/
    logo.jpg              # your logo (replace as you like)
  App.jsx                 # all sections in one file for quick iteration
  main.jsx
index.html
tailwind.config.js
postcss.config.js
vite.config.js
package.json
```

> Prefer splitting sections? Move each into `src/sections/<Name>.jsx` and import them in `App.jsx`.

---

## ⚙️ Setup

**Requirements**
- Node.js **18 or 20**
- pnpm / npm / yarn (choose one)

**Install & Run**
```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# local preview of the build
npm run preview
```

### Avoid the Vercel “vite build exited with 126” error
Use the direct Node entry in your `package.json` build script to bypass execute‑bit issues in CI:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "node ./node_modules/vite/bin/vite.js build",
    "preview": "vite preview --strictPort"
  },
  "engines": { "node": ">=18 <21" }
}
```

**Vercel project settings**
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** 18 or 20
- (Optional) **Clear build cache** on redeploys if you change the build script.

---

## 🎨 Tailwind setup

`tailwind.config.js`
```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

`src/main.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // <- contains Tailwind directives
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

`src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧩 Customize

**Logo**
```jsx
import logoImg from "./assets/logo.jpg";
<img src={logoImg} alt="Logo" className="w-10 h-10 object-contain" />
```

**Hero Video**
```jsx
const YOUTUBE_ID = "JBraSNVrueA";               // change to your video id
const params = "?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1";
const videoLink = `https://www.youtube.com/embed/${YOUTUBE_ID}${params}`;
```

**Gradient Headings**
Use the same gradient everywhere for consistency:
```jsx
<span className="bg-gradient-to-r from-[#7C3AED] via-[#9F67F4] to-[#EC4899] bg-clip-text text-transparent">
  Gradient Text
</span>
```

**Images**
Replace placeholder `img` URLs with your assets in `src/assets/`, e.g.:
```jsx
import heroImg from "./assets/hero.jpg";
<img src={heroImg} alt="Hero" />
```

---

## 🧪 Linting (optional)
If you want ESlint:
```bash
npm i -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

---

## 📦 License
MIT © Your Name
