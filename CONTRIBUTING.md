# Contributing to PIIXEN LIVE

First off, **thank you** for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to PIIXEN LIVE. These are mostly guidelines, not rules — use your best judgment and feel free to propose changes to this document in a pull request.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Adding Channels](#adding-channels)
  - [Code Contributions](#code-contributions)
- [Development Setup](#development-setup)
- [Style Guide](#style-guide)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

This project is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

---

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:
- Check existing [Issues](https://github.com/ARIK-999/piixen-live/issues) to see if it's already reported.
- Make sure you're running the latest version.

When reporting, please include:
- **Browser and OS** (e.g., Chrome 120 on Windows 11)
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots** if applicable

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md).

### Suggesting Features

Feature suggestions are welcome! Please use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md) and include:
- A clear **title**
- **Motivation** — why is this useful?
- A **description** of the proposed behavior
- Any **mockups or examples** if applicable

### Adding Channels

To add a new live channel:

1. Edit `js/channels.js`
2. Add a new entry to the `CHANNELS` array following this schema:

```javascript
{
  id: <next_available_id>,       // Unique integer (increment from last)
  name: "Channel Name",          // Display name
  category: "entertainment",     // news|sports|entertainment|music|kids|movies|religious
  icon: "📺",                   // Emoji fallback
  logo: "https://...",           // Logo URL (optional but recommended)
  stream: "https://youtube.com/embed/ID?autoplay=1", // Embed URL
  quality: "HD",                 // "HD" or "SD"
  language: "English"            // Primary language
}
```

**Important:** Only add channels with publicly available, legally embeddable streams.

### Code Contributions

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes following the [Style Guide](#style-guide)
4. Test across Chrome, Firefox, Safari, and mobile
5. Commit using the [conventional commit format](#commit-messages)
6. Push your branch and open a Pull Request

---

## Development Setup

```bash
# Clone your fork
git clone https://github.com/ARIK-999/piixen-live.git
cd piixen-live

# No install step required! Start a local server:
python3 -m http.server 8080
# Then open: http://localhost:8080
```

---

## Style Guide

### HTML
- Use semantic HTML5 elements (`<section>`, `<nav>`, `<header>`, `<footer>`, `<main>`)
- Always add `aria-label` to interactive elements without visible text labels
- Use `loading="lazy"` on all images

### CSS
- All new values **must** use existing CSS custom properties from `:root`
- Never hardcode colors — use `var(--accent)`, `var(--text-primary)`, etc.
- Follow the mobile-first approach: write base styles, then `@media (min-width: ...)` overrides
- Use `var(--transition)` for all transitions for consistency

### JavaScript
- Use `'use strict';` at the top of every JS file
- Use `const` for values that don't change, `let` otherwise; never `var`
- Add JSDoc comments to all exported/public functions
- Use `addEventListener` — never inline `onclick=""` attributes in HTML (except legacy template strings)
- Debounce all input-triggered operations

---

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <short description>

[optional body]
[optional footer]
```

**Types:**

| Type | Use for |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting, missing semicolons, etc. (no logic change) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `chore` | Maintenance (deps, CI, etc.) |

**Examples:**
```
feat(channels): add 5 new Bengali entertainment channels
fix(player): resolve iframe not unloading on close in Safari
docs(readme): update deployment instructions for Vercel
style(css): fix inconsistent spacing in features grid
```

---

## Pull Request Process

1. Ensure your PR **passes** any automated CI checks
2. Update `CHANGELOG.md` under `[Unreleased]` with your changes
3. Update `README.md` if you've changed public-facing behavior
4. Request a review from a maintainer
5. PRs need **1 approval** before merging

---

Thank you for helping make PIIXEN LIVE better for everyone! 🚀
