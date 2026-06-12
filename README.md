<div align="center">

<img src="https://img.shields.io/badge/PIIXEN-LIVE-6C63FF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0yMSAzSDNjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMThjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNkgzVjVoMTh2MTR6bS04LTJsNS01LTUtNS0xLjQgMS40IDMuNiAzLjYtMy42IDMuNkwxMyAxN3oiLz48L3N2Zz4=" alt="PIIXEN LIVE" />

# PIIXEN LIVE 📺

### Modern Live TV & Sports Streaming Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-6C63FF?style=flat-square&logo=netlify)](https://piixenlivee.netlify.app/)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat-square&logo=netlify)](https://netlify.com)
[![Channels](https://img.shields.io/badge/Channels-50%2B-FF4B6E?style=flat-square)](https://piixenlivee.netlify.app/#channels)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

> **Watch 50+ live TV channels, HD sports, news, and entertainment — free on any device.**

[🔴 Watch Live](https://piixenlivee.netlify.app/) · [🐛 Report Bug](https://github.com/ARIK-999/piixen-live/issues/new?template=bug_report.md) · [✨ Request Feature](https://github.com/ARIK-999/piixen-live/issues/new?template=feature_request.md)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 📺 **50+ Live Channels** | News, sports, entertainment, music, kids, movies & religious |
| 🔴 **HD Streaming** | Crystal-clear high-definition streams with adaptive quality |
| 📱 **Fully Responsive** | Desktop, tablet, and mobile — pixel-perfect on every screen |
| 🌙 **Dark & Light Mode** | Instant theme switching with OS-preference detection |
| 🔍 **Smart Search** | Real-time channel search with debounced input |
| 🏷️ **Category Filters** | Browse by News, Sports, Entertainment, Music, Kids, Movies, Religious |
| ⚡ **Lightning Fast** | No frameworks, no build step — pure vanilla JS for maximum speed |
| ♿ **Accessible** | Keyboard navigation, ARIA labels, reduced-motion support |
| 🌍 **Multilingual** | English, Bengali, Hindi, Arabic, Urdu channels |
| 🔑 **Ctrl+K Search** | Power-user keyboard shortcut to focus search instantly |

---

## 🖥️ Preview

```
┌─────────────────────────────────────────────────────────┐
│  🟣 PIIXEN LIVE              🔍 Search  🌙  ☰          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   🔴 LIVE NOW                      ┌──────────────┐    │
│   Watch Live TV                    │   📺         │    │
│   Anywhere, Anytime                │  ● LIVE      │    │
│                                    └──────────────┘    │
│   50+ Channels · HD · 24/7                             │
│   [▶ Start Watching] [⚽ Live Sports]                   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [All] [News] [Sports] [Entertainment] [Music] [Kids]   │
├─────────────────────────────────────────────────────────┤
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐         │
│  │ 📡   │ │ 🌐   │ │ 📺   │ │ ⭐   │ │ 🎵   │         │
│  │ Al   │ │ BBC  │ │ CNN  │ │ Star │ │ MTV  │         │
│  │ Jazz │ │ World│ │ Int. │ │ Jals.│ │ Hits │         │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘         │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Option 1 — Open Directly
No installation needed. Just open `index.html` in any modern browser:

```bash
# Clone the repo
git clone https://github.com/ARIK-999/piixen-live.git

# Navigate to the project
cd piixen-live

# Open in browser (macOS)
open index.html

# Open in browser (Linux)
xdg-open index.html

# Open in browser (Windows)
start index.html
```

### Option 2 — Local Dev Server
For a better local experience with live reload:

```bash
# Using Python (built-in)
python3 -m http.server 8080

# Using Node.js (npx)
npx serve .

# Using VS Code
# Install "Live Server" extension → Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8080`

---

## 📁 Project Structure

```
piixen-live/
├── 📄 index.html              # Main HTML entry point
├── 📂 css/
│   └── styles.css             # All styles (variables, components, responsive)
├── 📂 js/
│   ├── channels.js            # Channel & sports data (50+ entries)
│   ├── main.js                # App logic, rendering, category filtering
│   ├── player.js              # Modal video player with fullscreen support
│   ├── search.js              # Real-time search with debounce
│   └── theme.js               # Dark/light mode with localStorage persistence
├── 📂 assets/
│   └── icons/                 # Favicon and PWA icons
├── 📂 .github/
│   ├── workflows/ci.yml       # GitHub Actions CI
│   ├── ISSUE_TEMPLATE/        # Bug report & feature request templates
│   └── PULL_REQUEST_TEMPLATE.md
├── 📄 netlify.toml            # Netlify deployment config
├── 📄 package.json            # Project metadata
├── 📄 .gitignore
├── 📄 LICENSE                 # MIT License
├── 📄 CONTRIBUTING.md
├── 📄 CHANGELOG.md
├── 📄 CODE_OF_CONDUCT.md
└── 📄 SECURITY.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic markup, accessibility, SEO meta tags |
| **CSS3** | Custom properties, Grid, Flexbox, animations, responsive design |
| **Vanilla JavaScript (ES6+)** | DOM manipulation, event handling, state management |
| **Font Awesome 6** | Icon system |
| **Google Fonts** | Inter + Space Grotesk typefaces |
| **Netlify** | Hosting, CDN, continuous deployment |

> **Zero dependencies.** No React, no Vue, no bundler — just fast, clean native web tech.

---

## ➕ Adding a New Channel

Edit `js/channels.js` and add a new object to the `CHANNELS` array:

```javascript
{
  id: 55,                            // Unique integer ID
  name: "My Channel",                // Display name
  category: "entertainment",         // news|sports|entertainment|music|kids|movies|religious
  icon: "📺",                       // Emoji fallback when logo isn't available
  logo: "https://example.com/logo.png", // Optional logo URL
  stream: "https://youtube.com/embed/VIDEO_ID?autoplay=1", // Embed URL
  quality: "HD",                     // "HD" or "SD"
  language: "English"                // Primary language
}
```

---

## 🚢 Deployment

### Deploy to Netlify (Recommended)

1. Fork this repo
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Select your fork → Branch: `main`
4. Build command: *(leave empty)*
5. Publish directory: `.` (root)
6. Click **Deploy**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ARIK-999/piixen-live)

### Deploy to GitHub Pages

```bash
# In your repo settings, go to Pages → Source → main branch → / (root) → Save
# Your site will be at: https://ARIK-999.github.io/piixen-live/
```

### Deploy to Vercel

```bash
npx vercel --prod
```

---

## 🤝 Contributing

Contributions are what make the open source community amazing. Any contributions you make are **greatly appreciated**.

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

**Quick steps:**
1. Fork the repo
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a full version history.

---

## ⚠️ Legal Disclaimer

PIIXEN LIVE is an open-source web project that embeds publicly available live streams via iframe. **We do not host, store, or distribute any media content.** All stream URLs are publicly accessible on the web. This platform is intended for educational and demonstration purposes only.

If you are a content owner and believe your content is being linked inappropriately, please [open an issue](https://github.com/ARIK-999/piixen-live/issues) and it will be removed promptly.

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

---

## 🙋 Author

**PIIXEN LIVE** — Built with ❤️

[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=flat-square&logo=github)](https://github.com/ARIK-999)
[![Live Site](https://img.shields.io/badge/Live-piixenlivee.netlify.app-6C63FF?style=flat-square&logo=netlify)](https://piixenlivee.netlify.app/)

---

<div align="center">
  <sub>⭐ Star this repo if you found it useful!</sub>
</div>
