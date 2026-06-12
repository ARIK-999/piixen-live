/**
 * PIIXEN LIVE — Channel Data
 * @version 1.0.0
 * @license MIT
 *
 * Channel object shape:
 * {
 *   id:       {number}  - unique identifier
 *   name:     {string}  - display name
 *   category: {string}  - news | sports | entertainment | music | kids | movies | religious
 *   icon:     {string}  - emoji fallback icon
 *   logo:     {string}  - logo URL (optional)
 *   stream:   {string}  - embed / stream URL
 *   quality:  {string}  - "HD" | "SD"
 *   language: {string}  - primary language
 * }
 */

const CHANNELS = [
  // ── NEWS ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Al Jazeera English",
    category: "news",
    icon: "📡",
    stream: "https://www.youtube.com/embed/F4XS9VDiHCA?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 2,
    name: "BBC World News",
    category: "news",
    icon: "🌐",
    stream: "https://www.youtube.com/embed/w_Ma8oQLmSM?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 3,
    name: "CNN International",
    category: "news",
    icon: "🗞️",
    stream: "https://www.youtube.com/embed/fMqL3bFLFiE?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 4,
    name: "DW News",
    category: "news",
    icon: "📰",
    stream: "https://www.youtube.com/embed/i69I4wr3eiE?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 5,
    name: "France 24",
    category: "news",
    icon: "🇫🇷",
    stream: "https://www.youtube.com/embed/h3MuIUNCCLI?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 6,
    name: "RT News",
    category: "news",
    icon: "📺",
    stream: "https://www.youtube.com/embed/IVcBOzmhVxM?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 7,
    name: "CGTN",
    category: "news",
    icon: "🌏",
    stream: "https://www.youtube.com/embed/86YLFOog4GM?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 8,
    name: "Euronews",
    category: "news",
    icon: "🇪🇺",
    stream: "https://www.youtube.com/embed/IZVnpXdlTUc?autoplay=1",
    quality: "HD",
    language: "English"
  },

  // ── SPORTS ────────────────────────────────────────────────────────────────
  {
    id: 9,
    name: "ESPN Sports",
    category: "sports",
    icon: "🏆",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 10,
    name: "Sky Sports",
    category: "sports",
    icon: "⚽",
    stream: "https://www.youtube.com/embed/d25zBJfFrNs?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 11,
    name: "beIN Sports",
    category: "sports",
    icon: "🎯",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 12,
    name: "Fox Sports",
    category: "sports",
    icon: "🦊",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 13,
    name: "Gazi TV (Sports)",
    category: "sports",
    icon: "🏏",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 14,
    name: "T Sports BD",
    category: "sports",
    icon: "🏟️",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Bengali"
  },

  // ── ENTERTAINMENT ─────────────────────────────────────────────────────────
  {
    id: 15,
    name: "Star Jalsha",
    category: "entertainment",
    icon: "⭐",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Bengali"
  },
  {
    id: 16,
    name: "Colors TV",
    category: "entertainment",
    icon: "🎨",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Hindi"
  },
  {
    id: 17,
    name: "Zee TV",
    category: "entertainment",
    icon: "🎭",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Hindi"
  },
  {
    id: 18,
    name: "Sony Entertainment",
    category: "entertainment",
    icon: "📻",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Hindi"
  },
  {
    id: 19,
    name: "Channel i",
    category: "entertainment",
    icon: "ℹ️",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 20,
    name: "NTV Bangladesh",
    category: "entertainment",
    icon: "🇧🇩",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 21,
    name: "RTV Bangladesh",
    category: "entertainment",
    icon: "📡",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 22,
    name: "ATN Bangla",
    category: "entertainment",
    icon: "🎬",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 23,
    name: "Desh TV",
    category: "entertainment",
    icon: "🌿",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 24,
    name: "Boishakhi TV",
    category: "entertainment",
    icon: "🌸",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },

  // ── MUSIC ─────────────────────────────────────────────────────────────────
  {
    id: 25,
    name: "MTV Hits",
    category: "music",
    icon: "🎵",
    stream: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 26,
    name: "Lofi Hip Hop",
    category: "music",
    icon: "🎧",
    stream: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 27,
    name: "Jazz 24/7",
    category: "music",
    icon: "🎷",
    stream: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 28,
    name: "Classical FM",
    category: "music",
    icon: "🎻",
    stream: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 29,
    name: "G-Bangla Music",
    category: "music",
    icon: "🎤",
    stream: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 30,
    name: "Sangeet Bangla",
    category: "music",
    icon: "🎼",
    stream: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },

  // ── KIDS ──────────────────────────────────────────────────────────────────
  {
    id: 31,
    name: "Cartoon Network",
    category: "kids",
    icon: "🦸",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 32,
    name: "Nickelodeon",
    category: "kids",
    icon: "🎪",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 33,
    name: "Disney Channel",
    category: "kids",
    icon: "🏰",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 34,
    name: "Baby TV",
    category: "kids",
    icon: "👶",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 35,
    name: "Pogo TV",
    category: "kids",
    icon: "🎠",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Hindi"
  },

  // ── MOVIES ────────────────────────────────────────────────────────────────
  {
    id: 36,
    name: "Star Movies",
    category: "movies",
    icon: "🎬",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 37,
    name: "HBO Cinema",
    category: "movies",
    icon: "🎥",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 38,
    name: "Sony Max",
    category: "movies",
    icon: "🎞️",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Hindi"
  },
  {
    id: 39,
    name: "Zee Cinema",
    category: "movies",
    icon: "🌟",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Hindi"
  },
  {
    id: 40,
    name: "Bengali Cinema",
    category: "movies",
    icon: "🎦",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 41,
    name: "Eid Special Movies",
    category: "movies",
    icon: "🌙",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },

  // ── RELIGIOUS ─────────────────────────────────────────────────────────────
  {
    id: 42,
    name: "Peace TV",
    category: "religious",
    icon: "☮️",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 43,
    name: "Madani Channel",
    category: "religious",
    icon: "🕌",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Urdu"
  },
  {
    id: 44,
    name: "Huda TV",
    category: "religious",
    icon: "📖",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 45,
    name: "Al-Quran Channel",
    category: "religious",
    icon: "🤲",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Arabic"
  },
  {
    id: 46,
    name: "Islamic TV",
    category: "religious",
    icon: "🌙",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 47,
    name: "Aastha TV",
    category: "religious",
    icon: "🙏",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "Hindi"
  },

  // ── MORE ENTERTAINMENT ────────────────────────────────────────────────────
  {
    id: 48,
    name: "National Geographic",
    category: "entertainment",
    icon: "🌍",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 49,
    name: "Discovery Channel",
    category: "entertainment",
    icon: "🔭",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 50,
    name: "Animal Planet",
    category: "entertainment",
    icon: "🐘",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 51,
    name: "History Channel",
    category: "entertainment",
    icon: "🏛️",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "HD",
    language: "English"
  },
  {
    id: 52,
    name: "BTV Bangladesh",
    category: "news",
    icon: "📺",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 53,
    name: "Somoy TV",
    category: "news",
    icon: "⏰",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  },
  {
    id: 54,
    name: "Ekattor TV",
    category: "news",
    icon: "🔴",
    stream: "https://www.youtube.com/embed/PLsEBDzpdzCg?autoplay=1",
    quality: "SD",
    language: "Bengali"
  }
];

// Sports categories data
const SPORTS = [
  { id: 1, name: "Football / Soccer", icon: "⚽", count: "8 Channels", category: "sports" },
  { id: 2, name: "Cricket",           icon: "🏏", count: "6 Channels", category: "sports" },
  { id: 3, name: "Basketball",        icon: "🏀", count: "4 Channels", category: "sports" },
  { id: 4, name: "Tennis",            icon: "🎾", count: "3 Channels", category: "sports" },
  { id: 5, name: "Formula 1",         icon: "🏎️", count: "2 Channels", category: "sports" },
  { id: 6, name: "Boxing & MMA",      icon: "🥊", count: "3 Channels", category: "sports" },
  { id: 7, name: "Golf",              icon: "⛳", count: "2 Channels", category: "sports" },
  { id: 8, name: "Rugby",             icon: "🏉", count: "2 Channels", category: "sports" }
];
