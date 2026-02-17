import { writeFileSync } from 'fs';

const base = 'https://wyandanchlibrary.com';
const today = new Date().toISOString().split('T')[0];

const articles = [
  'menger-principles-of-economics', 'stigler-theory-of-price', 'business-history-of-finance',
  'buffett-shareholder-letters', 'fisher-common-stocks', 'marks-oaktree-memos',
  'livermore-reminiscences', 'druckenmiller-principles', 'graham-value-investing',
  'engines-that-move-markets', 'lynch-one-up-on-wall-street', 'schwager-market-wizards',
  'tudor-jones-principles', 'taleb-incerto', 'keynes-general-theory', 'hayek-prices-and-production',
  'soros-reflexivity', 'behavioral-finance', 'damodaran-little-book-valuation',
  'growth-investing-principles', 'technical-analysis', 'quant-foundations',
  'econometrics-and-fx', 'garch-101', 'portfolio-construction',
  'theory-to-application', 'systematic-indices', 'gappy-lecture-1-alpha-research',
  'gappy-lecture-2-factor-models', 'gappy-lecture-3-factor-evaluation',
  'physical-financial-commodities', 'model-implementation', 'derivative-portfolio-management',
  'fixed-income-fundamentals', 'market-microstructure-trading', 'stochastic-volatility-models',
  'differential-machine-learning', 'quasi-random-number-generation',
];

const tracks = ['fundamental', 'quantitative', 'practitioner', 'macro'];

const pages = [
  { url: '/', priority: '1.0', freq: 'weekly' },
  { url: '/curriculum', priority: '0.9', freq: 'weekly' },
  { url: '/reading-queue', priority: '0.5', freq: 'monthly' },
  ...tracks.map(t => ({ url: `/track/${t}`, priority: '0.8', freq: 'weekly' })),
  ...articles.map(a => ({ url: `/read/${a}`, priority: '0.7', freq: 'monthly' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${base}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync('public/sitemap.xml', xml);
console.log(`Generated sitemap.xml with ${pages.length} URLs`);
