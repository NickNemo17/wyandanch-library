import { writeFileSync } from 'fs';
import sharp from 'sharp';

// Resize logo to 120px and get base64
const logoBuffer = await sharp('public/logo.png')
  .resize(120, 120)
  .png()
  .toBuffer();
const logoBase64 = logoBuffer.toString('base64');

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="transparent"/>
      <stop offset="50%" stop-color="rgba(255,255,255,0.4)"/>
      <stop offset="100%" stop-color="transparent"/>
    </linearGradient>
    <linearGradient id="bodyGrad" x1="0" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="50%" stop-color="#141414"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Top glow -->
  <rect x="240" y="0" width="720" height="2" fill="url(#glow)"/>

  <!-- Terminal window -->
  <rect x="200" y="80" width="800" height="470" rx="16" fill="#0a0a0a" stroke="#262626" stroke-width="1"/>

  <!-- Title bar -->
  <rect x="200" y="80" width="800" height="44" rx="16" fill="#141414"/>
  <rect x="200" y="108" width="800" height="16" fill="#141414"/>
  <line x1="200" y1="124" x2="1000" y2="124" stroke="#262626" stroke-width="1"/>

  <!-- Dots -->
  <circle cx="224" cy="102" r="6" fill="#666"/>
  <circle cx="246" cy="102" r="6" fill="#888"/>
  <circle cx="268" cy="102" r="6" fill="#aaa"/>

  <!-- Title bar text -->
  <text x="600" y="107" text-anchor="middle" font-family="monospace" font-size="13" fill="#555" letter-spacing="1">wyandanchlibrary.com</text>

  <!-- Terminal body bg -->
  <rect x="201" y="124" width="798" height="425" fill="url(#bodyGrad)"/>

  <!-- Logo -->
  <image x="540" y="148" width="120" height="120" href="data:image/png;base64,${logoBase64}" />

  <!-- Title -->
  <text x="600" y="310" text-anchor="middle" font-family="sans-serif" font-size="42" font-weight="700" fill="#fafafa" letter-spacing="-1">Wyandanch Library</text>

  <!-- Subtitle -->
  <text x="600" y="345" text-anchor="middle" font-family="monospace" font-size="13" fill="#888" letter-spacing="4">OPEN SOURCE FINANCE EDUCATION</text>

  <!-- Tagline -->
  <text x="565" y="400" text-anchor="middle" font-family="monospace" font-size="18" fill="#d4d4d4">From Menger to machine learning._</text>
  <text x="370" y="400" text-anchor="middle" font-family="monospace" font-size="18" fill="#ffffff" font-weight="700">&gt;</text>

  <!-- Stats -->
  <text x="600" y="460" text-anchor="middle" font-family="monospace" font-size="12" fill="#555" letter-spacing="1">25 READINGS  |  8 LEVELS  |  4 TRACKS  |  FREE &amp; OPEN SOURCE</text>

  <!-- Brought to you -->
  <text x="600" y="510" text-anchor="middle" font-family="monospace" font-size="11" fill="#444" letter-spacing="1">WYANDANCH CAPITAL  &amp;  WYANDANCH CONSULTING</text>
</svg>`;

// Write SVG
writeFileSync('public/og.svg', svg);

// Convert to PNG
await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .png()
  .toFile('public/og.png');

console.log('Generated public/og.png (1200x630) with logo');
