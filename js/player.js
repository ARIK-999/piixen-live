/**
 * PIIXEN LIVE — Player Module
 * @version 1.0.0
 * @license MIT
 */

'use strict';

const playerOverlay  = document.getElementById('playerOverlay');
const playerModal    = document.getElementById('playerModal');
const playerIframe   = document.getElementById('playerIframe');
const playerLoader   = document.getElementById('playerLoader');
const playerClose    = document.getElementById('playerClose');
const playerChannelName = document.getElementById('playerChannelName');
const playerLogo     = document.getElementById('playerLogo');
const playerFullscreen = document.getElementById('playerFullscreen');

let isPlayerOpen = false;

/**
 * Opens the player modal and loads a channel stream
 * @param {Object} channel - channel data object
 */
function openPlayer(channel) {
  playerChannelName.textContent = channel.name;

  // Set logo
  playerLogo.innerHTML = channel.logo
    ? `<img src="${channel.logo}" alt="${channel.name}" onerror="this.style.display='none';this.parentNode.innerHTML='${channel.icon}'">`
    : channel.icon;

  // Show loader, clear previous iframe
  playerLoader.style.display = 'flex';
  playerIframe.src = '';

  // Open overlay
  playerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  isPlayerOpen = true;

  // Small delay to show the loader animation
  setTimeout(() => {
    playerIframe.src = channel.stream;
    playerIframe.onload = () => {
      playerLoader.style.display = 'none';
    };
    // Fallback: hide loader after 4s regardless
    setTimeout(() => { playerLoader.style.display = 'none'; }, 4000);
  }, 300);

  // Analytics hook (add your own tracking here)
  // trackEvent('channel_open', { id: channel.id, name: channel.name });
}

/**
 * Closes the player modal and stops the stream
 */
function closePlayer() {
  playerOverlay.classList.remove('open');
  document.body.style.overflow = '';
  isPlayerOpen = false;

  // Stop stream by clearing src
  setTimeout(() => {
    playerIframe.src = '';
    playerLoader.style.display = 'flex';
  }, 250);
}

// Close button
playerClose.addEventListener('click', closePlayer);

// Click outside to close
playerOverlay.addEventListener('click', (e) => {
  if (e.target === playerOverlay) closePlayer();
});

// Escape key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isPlayerOpen) closePlayer();
});

// Fullscreen
playerFullscreen.addEventListener('click', () => {
  const el = playerModal;
  if (!document.fullscreenElement) {
    el.requestFullscreen?.() ||
    el.webkitRequestFullscreen?.() ||
    el.mozRequestFullScreen?.();
    playerFullscreen.innerHTML = '<i class="fa-solid fa-compress"></i> Exit Fullscreen';
  } else {
    document.exitFullscreen?.() ||
    document.webkitExitFullscreen?.() ||
    document.mozCancelFullScreen?.();
    playerFullscreen.innerHTML = '<i class="fa-solid fa-expand"></i> Fullscreen';
  }
});

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    playerFullscreen.innerHTML = '<i class="fa-solid fa-expand"></i> Fullscreen';
  }
});
