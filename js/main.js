/**
 * PIIXEN LIVE — Main Application Logic
 * @version 1.0.0
 * @license MIT
 */

'use strict';

// ── State ─────────────────────────────────────────────────────────────────
let currentCategory = 'all';
let currentQuery    = '';

// ── DOM References ────────────────────────────────────────────────────────
const channelsGrid   = document.getElementById('channelsGrid');
const sportsGrid     = document.getElementById('sportsGrid');
const categoryTabs   = document.getElementById('categoryTabs');
const searchResults  = document.getElementById('searchResults');
const searchResultsText = document.getElementById('searchResultsText');
const noResults      = document.getElementById('noResults');
const noResultsQuery = document.getElementById('noResultsQuery');
const navbar         = document.getElementById('navbar');
const scrollTopBtn   = document.getElementById('scrollTop');
const navHamburger   = document.getElementById('navHamburger');
const navLinks       = document.getElementById('navLinks');

// ── Channel Rendering ─────────────────────────────────────────────────────

/**
 * Creates a channel card DOM element
 * @param {Object} ch - Channel object from channels.js
 * @returns {HTMLElement}
 */
function createChannelCard(ch) {
  const card = document.createElement('div');
  card.className = 'channel-card';
  card.setAttribute('data-id', ch.id);
  card.setAttribute('data-category', ch.category);
  card.setAttribute('aria-label', `Watch ${ch.name} live`);
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');

  card.innerHTML = `
    <div class="channel-logo">
      ${ch.logo
        ? `<img src="${ch.logo}" alt="${ch.name} logo" loading="lazy" onerror="this.style.display='none';this.parentNode.innerHTML='${ch.icon}'">`
        : ch.icon}
    </div>
    <div class="channel-info">
      <div class="channel-name" title="${ch.name}">${ch.name}</div>
      <div class="channel-cat">${ch.category}</div>
      <div class="channel-live-badge">
        <span class="live-dot"></span> LIVE
      </div>
    </div>
    <div class="channel-play-overlay">
      <i class="fa-solid fa-circle-play"></i>
    </div>
  `;

  card.addEventListener('click', () => openPlayer(ch));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openPlayer(ch);
    }
  });

  return card;
}

/**
 * Renders the channels grid based on current category & search query
 */
function renderChannels() {
  const query = currentQuery.toLowerCase().trim();
  const cat   = currentCategory;

  let filtered = CHANNELS.filter(ch => {
    const matchCat   = cat === 'all' || ch.category === cat;
    const matchQuery = !query ||
      ch.name.toLowerCase().includes(query) ||
      ch.category.toLowerCase().includes(query) ||
      (ch.language && ch.language.toLowerCase().includes(query));
    return matchCat && matchQuery;
  });

  // Clear grid
  channelsGrid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.style.display    = 'block';
    searchResults.style.display = 'none';
    noResultsQuery.textContent  = query || cat;
    return;
  }

  noResults.style.display = 'none';

  if (query) {
    searchResults.style.display = 'flex';
    searchResultsText.textContent =
      `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${query}"`;
  } else {
    searchResults.style.display = 'none';
  }

  const fragment = document.createDocumentFragment();
  filtered.forEach(ch => fragment.appendChild(createChannelCard(ch)));
  channelsGrid.appendChild(fragment);
}

// ── Sports Grid ───────────────────────────────────────────────────────────

function renderSports() {
  const fragment = document.createDocumentFragment();
  SPORTS.forEach(sp => {
    const card = document.createElement('div');
    card.className = 'sport-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Browse ${sp.name} channels`);
    card.innerHTML = `
      <div class="sport-icon">${sp.icon}</div>
      <div class="sport-info">
        <div class="sport-name">${sp.name}</div>
        <div class="sport-count">${sp.count}</div>
      </div>
      <i class="fa-solid fa-chevron-right" style="color:var(--text-muted);font-size:0.85rem;margin-left:auto"></i>
    `;
    card.addEventListener('click', () => {
      document.getElementById('channels').scrollIntoView({ behavior: 'smooth' });
      setCategory('sports');
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        document.getElementById('channels').scrollIntoView({ behavior: 'smooth' });
        setCategory('sports');
      }
    });
    fragment.appendChild(card);
  });
  sportsGrid.appendChild(fragment);
}

// ── Category Tabs ─────────────────────────────────────────────────────────

/**
 * Sets the active category
 * @param {string} cat
 */
function setCategory(cat) {
  currentCategory = cat;

  // Update tab active state
  const tabs = categoryTabs.querySelectorAll('.cat-tab');
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-cat') === cat);
  });

  renderChannels();
}

// Expose globally for footer links
window.filterCategory = setCategory;

categoryTabs.addEventListener('click', (e) => {
  const tab = e.target.closest('.cat-tab');
  if (!tab) return;
  const cat = tab.getAttribute('data-cat');
  setCategory(cat);
});

// ── Search (expose clear globally) ───────────────────────────────────────

window.clearSearch = function () {
  document.getElementById('searchInput').value = '';
  currentQuery = '';
  const clearBtn = document.getElementById('searchClear');
  const clearBar = document.getElementById('clearSearch');
  if (clearBtn) clearBtn.classList.remove('visible');
  if (clearBar) clearBar.style.display = 'none';
  renderChannels();
};

document.getElementById('clearSearch')?.addEventListener('click', window.clearSearch);

// ── Navbar Scroll ─────────────────────────────────────────────────────────

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 50;
  navbar.classList.toggle('scrolled', scrolled);
  scrollTopBtn.classList.toggle('visible', scrolled);
}, { passive: true });

// ── Scroll To Top ─────────────────────────────────────────────────────────

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Mobile Nav ────────────────────────────────────────────────────────────

navHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Active Nav Link ───────────────────────────────────────────────────────

const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

// ── Init ──────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderChannels();
  renderSports();
});

// Fallback if DOMContentLoaded already fired
if (document.readyState !== 'loading') {
  renderChannels();
  renderSports();
}
