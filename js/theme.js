/**
 * PIIXEN LIVE — Theme Module
 * @version 1.0.0
 * @license MIT
 */

'use strict';

const THEME_KEY   = 'piixen-theme';
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');

/**
 * Applies a theme to the document
 * @param {'dark'|'light'} theme
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);

  if (theme === 'light') {
    themeIcon.className = 'fa-solid fa-sun';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  } else {
    themeIcon.className = 'fa-solid fa-moon';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  }
}

/**
 * Returns the current active theme
 * @returns {'dark'|'light'}
 */
function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

// Toggle on button click
themeToggle.addEventListener('click', () => {
  applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
});

// Init: respect saved preference, then system preference
(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
})();

// React to OS-level theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem(THEME_KEY)) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});
