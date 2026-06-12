/**
 * PIIXEN LIVE — Search Module
 * @version 1.0.0
 * @license MIT
 */

'use strict';

const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');

let searchTimer = null;

searchInput.addEventListener('input', () => {
  const val = searchInput.value.trim();
  searchClear.classList.toggle('visible', val.length > 0);

  // Debounce 220ms
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    currentQuery = val;
    renderChannels();

    // Scroll to channels if there's a query
    if (val.length > 0) {
      const channelsSection = document.getElementById('channelsGrid');
      if (channelsSection) {
        channelsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, 220);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchClear.classList.remove('visible');
  currentQuery = '';
  renderChannels();
  searchInput.focus();
});

// Keyboard shortcut: Ctrl/Cmd + K focuses search
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});
