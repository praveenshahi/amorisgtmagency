/**
 * Generates the Amoris social preview cards into /public/images.
 *
 * Run manually (`node scripts/makeSocialCards.js`) whenever the wording changes -
 * this is deliberately not part of the build, so the cards stay byte-stable
 * between deploys instead of being regenerated every time.
 */
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/images');

const PRIMARY = '#f26430';

/** Escapes the five XML entities so copy can contain & and quotes safely. */
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

function card({ width, height, headline, sub }) {
  const pad = Math.round(width * 0.075);
  const titleSize = Math.round(width * 0.062);
  const subSize = Math.round(width * 0.026);
  const markSize = Math.round(width * 0.03);

  const lines = headline.split('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <radialGradient id="glow" cx="28%" cy="34%" r="70%">
      <stop offset="0%" stop-color="#2a0a52"/>
      <stop offset="55%" stop-color="#0d0322"/>
      <stop offset="100%" stop-color="#050109"/>
    </radialGradient>
    <radialGradient id="ember" cx="74%" cy="76%" r="46%">
      <stop offset="0%" stop-color="${PRIMARY}" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="${PRIMARY}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#glow)"/>
  <rect width="${width}" height="${height}" fill="url(#ember)"/>

  <g transform="translate(${pad}, ${pad + markSize * 0.4})">
    <circle cx="${markSize * 0.32}" cy="${-markSize * 0.32}" r="${markSize * 0.3}" fill="${PRIMARY}"/>
    <text x="${markSize}" y="0" font-family="Geist, Inter, Helvetica, Arial, sans-serif" font-size="${markSize}" font-weight="700" fill="#ffffff" letter-spacing="-0.5">Amoris</text>
  </g>

  <g font-family="Geist, Inter, Helvetica, Arial, sans-serif">
    ${lines
      .map(
        (line, i) =>
          `<text x="${pad}" y="${height * 0.53 + i * titleSize * 1.14}" font-size="${titleSize}" font-weight="700" fill="#ffffff" letter-spacing="-2">${esc(line)}</text>`,
      )
      .join('\n    ')}
    <text x="${pad}" y="${height - pad}" font-size="${subSize}" font-weight="500" fill="#ffffff" fill-opacity="0.55">${esc(sub)}</text>
  </g>

  <rect x="0" y="${height - 10}" width="${width}" height="10" fill="${PRIMARY}"/>
</svg>`;
}

const targets = [
  { file: 'og.png', width: 1200, height: 630 },
  { file: 'x.png', width: 1200, height: 630 },
  { file: 'structured-preview.png', width: 1920, height: 1080 },
];

const headline = 'AI GTM systems\nthat actually scale';
const sub = 'LangGraph, Clay and n8n. Self-hosted, and owned by you. — amoris.in';

for (const t of targets) {
  const svg = card({ width: t.width, height: t.height, headline, sub });
  const buf = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  writeFileSync(resolve(out, t.file), buf);
  console.log(`wrote ${t.file} (${t.width}x${t.height}, ${(buf.length / 1024).toFixed(1)}KB)`);
}
