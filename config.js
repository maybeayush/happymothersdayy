/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Prachi",
  photo: "./img/IMG-20260424-WA0048.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
  {
    type: "greeting",
    title: "Dear Prachi",
    subtitle: "Happy Mother's Day to the future mother of my dreams ❤️",
  },
  {
    type: "countdown",
    from: 3,
    goText: "💐",
  },
  {
    type: "announcement",
    text: "Today is all about celebrating you 🌸",
  },
  {
    type: "chatbox",
    message:
      "Happy Mother's Day, my love. Even though you're my cute little baby, you still care for me with the warmth, love, and comfort of a mother. Thank you for being my safe place ❤️",
    buttonText: "Open",
  },
  {
    type: "ideas",
    lines: [
      "I wanted to wish you something simple.",
      "But simple words never feel enough for you.",
      "Because your love feels like <strong>home</strong>.",
      "Your care feels like peace.",
      "And your smile feels like my whole world <span>❤️</span>",
    ],
    bigLetters: "LOVE",
  },
  {
    type: "quote",
    text: "Some people give love, some people give peace. You somehow give both.",
    author: "For Prachi ❤️",
  },
  {
    type: "stars",
    count: 40,
  },
  {
    type: "balloons",
    count: 25,
  },
  {
    type: "profile",
    wishTitle: "Happy Mother's Day 💐",
    wishText:
      "To the girl who loves me like a child and protects me like home.",
  },
  {
    type: "fireworks",
    count: 24,
  },
  {
    type: "confetti",
    count: 12,
  },
  {
    type: "closing",
    text: "I hope this made you smile today ❤️",
    replayText: "Click here if you want to watch it again.",
  },
],
