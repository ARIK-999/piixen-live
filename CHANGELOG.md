# Changelog

All notable changes to **PIIXEN LIVE** will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

> Changes staged for the next release go here.

---

## [1.0.0] — 2024-12-01

### Added
- 🎉 Initial public release of PIIXEN LIVE
- 50+ live TV channels across 7 categories (News, Sports, Entertainment, Music, Kids, Movies, Religious)
- HD video player modal with fullscreen support and loading state
- Real-time channel search with 220ms debounce
- Category filter tabs (All, News, Sports, Entertainment, Music, Kids, Movies, Religious)
- Dark and light theme with OS-preference detection and `localStorage` persistence
- Sports category section with 8 sport types
- Fully responsive layout for desktop, tablet, and mobile
- Keyboard navigation support (Enter/Space to open channels, Escape to close player)
- Ctrl/Cmd+K keyboard shortcut to focus search
- Active navigation link tracking using IntersectionObserver
- Mobile hamburger navigation menu
- Scroll-to-top button with smooth animation
- Open Graph and Twitter Card meta tags for social sharing
- MIT License
- Professional GitHub repository documentation (README, CONTRIBUTING, CHANGELOG, SECURITY, CODE_OF_CONDUCT)
- GitHub Actions CI workflow
- Issue templates (bug report, feature request)
- Netlify deployment configuration

### Technical
- Zero external JavaScript dependencies (pure vanilla JS ES6+)
- CSS custom properties for full theming support
- Semantic HTML5 with ARIA accessibility attributes
- Modular JavaScript architecture (channels.js, main.js, player.js, search.js, theme.js)
- CSS animations: live dot pulse, modal slide-up, channel card hover
- IntersectionObserver for performance-efficient scroll handling

---

## Link References

[Unreleased]: https://github.com/ARIK-999/piixen-live/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/ARIK-999/piixen-live/releases/tag/v1.0.0
