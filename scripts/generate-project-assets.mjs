#!/usr/bin/env node

/**
 * Generate image derivatives and project-specific social previews.
 *
 * Run from the repository root with:
 *   node scripts/generate-project-assets.mjs
 *
 * The source screenshots remain the lossless/authoring assets. Derivatives are
 * written to public/projects/optimized and are safe to reference from Astro
 * or a plain <picture> element. The OG cards intentionally use a common SVG
 * shell so every project has the same visual footprint when shared.
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const PROJECT_DIR = path.join(ROOT, "public", "projects");
const OPTIMIZED_DIR = path.join(PROJECT_DIR, "optimized");
const OG_DIR = path.join(ROOT, "public", "og", "projects");

const WIDTH_LIMIT = 1440;
const HEIGHT_LIMIT = 900;
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const projects = [
  {
    slug: "todrawn",
    name: "todrawn.com",
    description: "Hand-drawn video creation and collaborative boards.",
    source: "todrawn.jpg",
  },
  {
    slug: "llama-talks",
    name: "LlamaTalks",
    description: "Local RAG chatbot with document-grounded streaming answers.",
    rag: true,
  },
  {
    slug: "gamelog",
    name: "Gamelog",
    description: "Kanban game backlog tracking with social features.",
    source: "gamelog.jpg",
  },
  {
    slug: "map-generator",
    name: "MapGenerator",
    description: "Seed-based fantasy maps with streamed terrain.",
    source: "mapgenerator.png",
  },
  {
    slug: "cibaria",
    name: "Cibaria",
    description: "Recipe management with search, sharing and nutrition data.",
    source: "cibaria.png",
  },
  {
    slug: "sosniak-portfolio",
    name: "SosniakPortfolio",
    description: "Fast portfolio for an IVD sales and operations leader.",
    source: "sosniak-portfolio.png",
  },
  {
    slug: "strefa-sa",
    name: "StrefaSA",
    description: "Marketing site and in-game store for an MTA:SA server.",
    source: "strefa-sa.png",
  },
];

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const wrap = (value, maxChars) => {
  const words = value.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (line && next.length > maxChars) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
};

const textLines = (lines, { x, y, lineHeight, className, fill, size, weight = 400 }) =>
  lines
    .map(
      (line, index) =>
        `<text x="${x}" y="${y + index * lineHeight}" class="${className}" fill="${fill}" font-size="${size}px" font-weight="${weight}">${escapeXml(line)}</text>`,
    )
    .join("");

const projectPanel = () => `
  <rect x="538" y="78" width="594" height="466" rx="8" fill="#0b1220" stroke="#263449" stroke-width="2"/>
  <rect x="552" y="92" width="566" height="438" rx="4" fill="#111a2b" stroke="#162338"/>
  <circle cx="570" cy="110" r="4" fill="#ef4444"/>
  <circle cx="586" cy="110" r="4" fill="#eab308"/>
  <circle cx="602" cy="110" r="4" fill="#22c55e"/>
`;

const ragDiagram = () => `
  <svg xmlns="http://www.w3.org/2000/svg" width="562" height="390" viewBox="0 0 562 390">
    <defs>
      <linearGradient id="rag-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#111c30"/>
        <stop offset="1" stop-color="#0b1322"/>
      </linearGradient>
      <marker id="rag-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="#22c55e"/>
      </marker>
    </defs>
    <rect width="562" height="390" rx="4" fill="url(#rag-bg)"/>
    <path d="M0 64H562M0 128H562M0 192H562M0 256H562M0 320H562M64 0V390M128 0V390M192 0V390M256 0V390M320 0V390M384 0V390M448 0V390M512 0V390" stroke="#1d2a3d" stroke-opacity=".45"/>
    <text x="24" y="30" fill="#6ee7b7" font-family="monospace" font-size="12" letter-spacing="2">RAG PIPELINE / LOCAL MODEL</text>
    <g font-family="monospace">
      <rect x="24" y="84" width="130" height="62" rx="5" fill="#17243a" stroke="#3b82f6"/>
      <text x="40" y="110" fill="#93c5fd" font-size="12">DOCUMENTS</text>
      <text x="40" y="130" fill="#cbd5e1" font-size="11">Tika + chunking</text>
      <rect x="215" y="84" width="130" height="62" rx="5" fill="#17243a" stroke="#a78bfa"/>
      <text x="231" y="110" fill="#c4b5fd" font-size="12">EMBEDDINGS</text>
      <text x="231" y="130" fill="#cbd5e1" font-size="11">semantic index</text>
      <rect x="408" y="84" width="130" height="62" rx="5" fill="#17243a" stroke="#22c55e"/>
      <text x="424" y="110" fill="#86efac" font-size="12">RETRIEVAL</text>
      <text x="424" y="130" fill="#cbd5e1" font-size="11">relevant context</text>
      <path d="M154 115H209M345 115H402" stroke="#22c55e" stroke-width="2" marker-end="url(#rag-arrow)"/>
      <rect x="122" y="239" width="130" height="62" rx="5" fill="#17243a" stroke="#f59e0b"/>
      <text x="138" y="265" fill="#fcd34d" font-size="12">CHAT HISTORY</text>
      <text x="138" y="285" fill="#cbd5e1" font-size="11">PostgreSQL</text>
      <rect x="310" y="239" width="130" height="62" rx="5" fill="#17243a" stroke="#22c55e"/>
      <text x="326" y="265" fill="#86efac" font-size="12">OLLAMA</text>
      <text x="326" y="285" fill="#cbd5e1" font-size="11">stream over SSE</text>
      <path d="M473 146V190H375V233" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#rag-arrow)"/>
      <path d="M187 239V190H275V152" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#rag-arrow)"/>
      <rect x="187" y="337" width="188" height="32" rx="4" fill="#123323" stroke="#22c55e"/>
      <text x="212" y="358" fill="#bbf7d0" font-size="12">GROUNDED ANSWER</text>
      <path d="M375 301V321H281V331" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#rag-arrow)"/>
    </g>
  </svg>
`;

const cardSvg = ({ name, description, rag }) => {
  const titleLines = wrap(name, 21);
  const descriptionLines = wrap(description, 37);
  const titleStart = titleLines.length > 1 ? 183 : 195;
  const descriptionStart = titleStart + titleLines.length * 67 + 48;
  const longestTitle = Math.max(...titleLines.map((line) => line.length));
  // Keep long product names inside the text column before the screenshot panel.
  const titleSize = Math.min(56, Math.max(38, Math.floor(450 / (longestTitle * 0.62))));

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#1b2a3d" stroke-width="1"/>
      <circle cx="2" cy="2" r="1.2" fill="#22c55e" fill-opacity=".3"/>
    </pattern>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0f1a"/>
      <stop offset="1" stop-color="#0e1728"/>
    </linearGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="12" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <style>
      .mono { font-family: 'JetBrains Mono', 'DejaVu Sans Mono', monospace; }
    </style>
  </defs>
  <rect width="1200" height="630" fill="url(#fade)"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity=".62"/>
  <rect x="0" y="0" width="1200" height="6" fill="#22c55e"/>
  <rect x="35" y="92" width="4" height="390" rx="2" fill="#22c55e" filter="url(#glow)"/>
  <text x="70" y="76" class="mono" fill="#6ee7b7" font-size="14" letter-spacing="3">PROJECT / CASE STUDY</text>
  <text x="1060" y="76" class="mono" fill="#64748b" font-size="15" text-anchor="end">brbn.pl</text>
  <text x="70" y="${titleStart}" class="mono" fill="#f8fafc" font-size="${titleSize}px" font-weight="700">${titleLines.map((line, index) => `<tspan x="70" dy="${index ? 64 : 0}">${escapeXml(line)}</tspan>`).join("")}</text>
  ${textLines(descriptionLines, { x: 70, y: descriptionStart, lineHeight: 30, className: "mono", fill: "#94a3b8", size: 19 })}
  <text x="70" y="548" class="mono" fill="#64748b" font-size="13" letter-spacing="1.4">JAKUB KUŹNICKI  /  JAVA · BACKEND · RAG</text>
  ${projectPanel()}
  ${rag ? `<g transform="translate(554 126)">${ragDiagram()}</g>` : ""}
</svg>
`;
};

const readImageBuffer = async (project) => {
  if (project.rag) return Buffer.from(ragDiagram());
  return sharp(path.join(PROJECT_DIR, project.source))
    .resize({ width: 562, height: 390, fit: "cover", position: "attention", withoutEnlargement: true })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toBuffer();
};

const writeOptimizedVariants = async (project) => {
  if (project.rag) return [];
  const input = path.join(PROJECT_DIR, project.source);
  const base = sharp(input).resize({
    width: WIDTH_LIMIT,
    height: HEIGHT_LIMIT,
    fit: "inside",
    withoutEnlargement: true,
  });
  const [webp, avif] = await Promise.all([
    base.clone().webp({ quality: 78, effort: 6, smartSubsample: true }).toFile(path.join(OPTIMIZED_DIR, `${project.slug}.webp`)),
    base.clone().avif({ quality: 52, effort: 7, chromaSubsampling: "4:2:0" }).toFile(path.join(OPTIMIZED_DIR, `${project.slug}.avif`)),
  ]);
  return [webp, avif].map(({ format, size, width, height }) => ({ format, size, width, height }));
};

const writeOgCard = async (project) => {
  const shell = Buffer.from(cardSvg(project));
  const overlay = await readImageBuffer(project);
  const composite = project.rag
    ? [{ input: overlay, left: 554, top: 126 }]
    : [
        { input: overlay, left: 554, top: 126 },
        { input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="566" height="438"><rect x="0.5" y="0.5" width="565" height="437" rx="4" fill="none" stroke="#334155" stroke-width="2"/></svg>`), left: 552, top: 92 },
      ];
  const destination = path.join(OG_DIR, `${project.slug}.png`);
  const info = await sharp(shell).composite(composite).png({
    compressionLevel: 9,
    adaptiveFiltering: true,
    palette: true,
    quality: 92,
    effort: 10,
  }).toFile(destination);
  return { format: info.format, size: info.size, width: info.width, height: info.height };
};

const main = async () => {
  await Promise.all([fs.mkdir(OPTIMIZED_DIR, { recursive: true }), fs.mkdir(OG_DIR, { recursive: true })]);

  const results = [];
  for (const project of projects) {
    const variants = await writeOptimizedVariants(project);
    const og = await writeOgCard(project);
    results.push({ slug: project.slug, variants, og });
  }

  console.log("Generated project assets:");
  for (const result of results) {
    const variantSummary = result.variants.length
      ? result.variants.map((item) => `${item.format} ${item.width}x${item.height} ${item.size} B`).join(", ")
      : "RAG SVG visual (no source screenshot)";
    console.log(`- ${result.slug}: ${variantSummary}; OG ${result.og.width}x${result.og.height} ${result.og.size} B`);
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
