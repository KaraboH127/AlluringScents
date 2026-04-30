import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

const fail = (message) => {
  console.error(`ERROR: ${message}`);
  process.exit(1);
};

if (!fs.existsSync(distDir)) {
  fail('dist directory is missing. Run "npm run build" first.');
}

if (!fs.existsSync(indexPath)) {
  fail('dist/index.html is missing. Build output is incomplete.');
}

const html = fs.readFileSync(indexPath, 'utf8');

const collectAttrValues = (tag, attr) => {
  const regex = new RegExp(`<${tag}[^>]*\\s${attr}=["']([^"']+)["'][^>]*>`, 'gi');
  return [...html.matchAll(regex)].map((match) => match[1]);
};

const rawRefs = [
  ...collectAttrValues('script', 'src'),
  ...collectAttrValues('link', 'href')
];

const isAssetRef = (ref) => {
  const normalized = ref.replace(/^\.\//, '/');
  return normalized.startsWith('/assets/') || normalized.startsWith('assets/');
};

const assetRefs = rawRefs.filter(isAssetRef);

if (!assetRefs.length) {
  fail('No JS/CSS assets found in dist/index.html.');
}

console.log('Asset references found in dist/index.html:');
assetRefs.forEach((ref) => console.log(`- ${ref}`));

const normalizeForDist = (ref) => ref.replace(/^\.\//, '').replace(/^\//, '');
const normalizedRefs = assetRefs.map(normalizeForDist);

const missingRefs = normalizedRefs.filter((ref) => !fs.existsSync(path.join(distDir, ref)));
if (missingRefs.length) {
  missingRefs.forEach((ref) => console.error(`Missing bundle file: dist/${ref}`));
  fail('One or more referenced assets are missing from dist.');
}

const hasReactRoot = html.includes('<div id="root"></div>');
if (!hasReactRoot) {
  fail('React root container (#root) not found in dist/index.html.');
}

const hasJsBundle = normalizedRefs.some((ref) => ref.endsWith('.js'));
if (!hasJsBundle) {
  fail('No JavaScript bundle detected. React cannot mount without JS.');
}

console.log('JS bundle detected and files exist. React mount prerequisites look valid.');
console.log('Netlify build sanity check passed.');
