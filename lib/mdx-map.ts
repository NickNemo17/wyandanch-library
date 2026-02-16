import type { ComponentType } from 'react';

type MDXModule = { default: ComponentType<any> };

const mdxMap: Record<string, () => Promise<MDXModule>> = {
  'menger-principles-of-economics': () => import('@/content/level-1/menger-principles-of-economics.mdx'),
  'stigler-theory-of-price': () => import('@/content/level-1/stigler-theory-of-price.mdx'),
  'business-history-of-finance': () => import('@/content/level-1/business-history-of-finance.mdx'),
  'buffett-shareholder-letters': () => import('@/content/level-2/buffett-shareholder-letters.mdx'),
  'fisher-common-stocks': () => import('@/content/level-2/fisher-common-stocks.mdx'),
  'marks-oaktree-memos': () => import('@/content/level-2/marks-oaktree-memos.mdx'),
  'livermore-reminiscences': () => import('@/content/level-2/livermore-reminiscences.mdx'),
  'druckenmiller-principles': () => import('@/content/level-2/druckenmiller-principles.mdx'),
  'graham-value-investing': () => import('@/content/level-2/graham-value-investing.mdx'),
  'engines-that-move-markets': () => import('@/content/level-2/engines-that-move-markets.mdx'),
  'lynch-one-up-on-wall-street': () => import('@/content/level-2/lynch-one-up-on-wall-street.mdx'),
  'schwager-market-wizards': () => import('@/content/level-2/schwager-market-wizards.mdx'),
  'taleb-incerto': () => import('@/content/level-2/taleb-incerto.mdx'),
  'keynes-general-theory': () => import('@/content/level-3/keynes-general-theory.mdx'),
  'hayek-prices-and-production': () => import('@/content/level-3/hayek-prices-and-production.mdx'),
  'soros-reflexivity': () => import('@/content/level-3/soros-reflexivity.mdx'),
  'behavioral-finance': () => import('@/content/level-3/behavioral-finance.mdx'),
  'damodaran-little-book-valuation': () => import('@/content/level-4/damodaran-little-book-valuation.mdx'),
  'growth-investing-principles': () => import('@/content/level-4/growth-investing-principles.mdx'),
  'technical-analysis': () => import('@/content/level-4/technical-analysis.mdx'),
  'quant-foundations': () => import('@/content/level-5/quant-foundations.mdx'),
  'econometrics-and-fx': () => import('@/content/level-5/econometrics-and-fx.mdx'),
  'garch-101': () => import('@/content/level-5/garch-101.mdx'),
  'portfolio-construction': () => import('@/content/level-6/portfolio-construction.mdx'),
  'theory-to-application': () => import('@/content/level-6/theory-to-application.mdx'),
  'systematic-indices': () => import('@/content/level-6/systematic-indices.mdx'),
  'gappy-lecture-1-alpha-research': () => import('@/content/level-6/gappy-lecture-1-alpha-research.mdx'),
  'gappy-lecture-2-factor-models': () => import('@/content/level-6/gappy-lecture-2-factor-models.mdx'),
  'gappy-lecture-3-factor-evaluation': () => import('@/content/level-6/gappy-lecture-3-factor-evaluation.mdx'),
  'physical-financial-commodities': () => import('@/content/level-7/physical-financial-commodities.mdx'),
  'model-implementation': () => import('@/content/level-7/model-implementation.mdx'),
  'derivative-portfolio-management': () => import('@/content/level-7/derivative-portfolio-management.mdx'),
  'fixed-income-fundamentals': () => import('@/content/level-7/fixed-income-fundamentals.mdx'),
  'market-microstructure-trading': () => import('@/content/level-8/market-microstructure-trading.mdx'),
  'stochastic-volatility-models': () => import('@/content/level-8/stochastic-volatility-models.mdx'),
  'differential-machine-learning': () => import('@/content/level-8/differential-machine-learning.mdx'),
  'quasi-random-number-generation': () => import('@/content/level-8/quasi-random-number-generation.mdx'),
};

export async function loadMDXContent(slug: string): Promise<ComponentType<any> | null> {
  const loader = mdxMap[slug];
  if (!loader) return null;
  try {
    const mod = await loader();
    return mod.default;
  } catch {
    return null;
  }
}
