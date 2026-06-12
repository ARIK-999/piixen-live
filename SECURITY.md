# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x.x   | ✅ Active  |

---

## Reporting a Vulnerability

If you discover a security vulnerability in PIIXEN LIVE, please **do not** open a public GitHub issue.

Instead, please report it privately:

1. Email: `security@piixen-live.example.com` *(replace with your actual contact)*
2. Or use [GitHub's private vulnerability reporting](https://github.com/ARIK-999/piixen-live/security/advisories/new)

**Please include:**
- A clear description of the vulnerability
- Steps to reproduce the issue
- The potential impact (e.g., XSS, data exposure)
- Any suggested fix if you have one

We aim to respond within **48 hours** and will keep you updated throughout the remediation process. Responsible disclosure is greatly appreciated and will be acknowledged in the release notes.

---

## Security Considerations

PIIXEN LIVE is a front-end only static web application:

- **No user accounts or authentication** — no passwords or personal data are stored
- **No backend server** — the app runs entirely in the browser
- **Iframe embeds** — streams are loaded in sandboxed iframes
- **localStorage** — only used for theme preference (`piixen-theme`)

If you notice an iframed stream attempting to break out of its sandbox or execute malicious scripts, please report it immediately.
