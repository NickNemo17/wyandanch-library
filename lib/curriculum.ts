export interface CurriculumItem {
  slug: string;
  title: string;
  author: string;
  level: number;
  tracks: TrackSlug[];
  topics: TopicSlug[];
  description: string;
  keyConcepts: string[];
}

export type TrackSlug = 'fundamental' | 'quantitative' | 'practitioner' | 'macro';
export type TopicSlug =
  | 'the-canon'
  | 'quantitative-methods'
  | 'factor-models'
  | 'markets-and-execution'
  | 'economics-and-macro';

export interface Level {
  number: number;
  title: string;
  description: string;
  items: CurriculumItem[];
}

export interface Track {
  slug: TrackSlug;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface Topic {
  slug: TopicSlug;
  title: string;
  description: string;
}

export const tracks: Track[] = [
  {
    slug: 'fundamental',
    title: 'The Fundamental Investor',
    subtitle: 'Value, quality, and business analysis',
    description:
      'A path through the economic foundations, investing philosophy, and valuation frameworks that define fundamental equity analysis. Start with Menger and Stigler, absorb the wisdom of Buffett, Fisher, and Marks, then apply Damodaran\'s valuation toolkit.',
    icon: 'I',
  },
  {
    slug: 'quantitative',
    title: 'The Quantitative Investor',
    subtitle: 'Models, factors, and systematic strategies',
    description:
      'From econometric foundations through factor models and systematic index construction to advanced stochastic volatility and machine learning. Build the mathematical toolkit for rigorous, data-driven investing.',
    icon: 'II',
  },
  {
    slug: 'practitioner',
    title: 'The Market Practitioner',
    subtitle: 'Execution, instruments, and microstructure',
    description:
      'Learn how markets actually work: commodities, derivatives, portfolio management, and the microstructure of trading. Theory meets practice in the mechanics of price discovery and execution.',
    icon: 'III',
  },
  {
    slug: 'macro',
    title: 'The Macro Thinker',
    subtitle: 'Economics, monetary theory, and cycles',
    description:
      'Keynes vs. Hayek, monetary theory, business cycles, and the economic foundations that shape every asset class. Understand the macro forces that move markets before you trade them.',
    icon: 'IV',
  },
];

export const topics: Topic[] = [
  {
    slug: 'the-canon',
    title: 'The Canon',
    description: 'Essential texts every investor should read',
  },
  {
    slug: 'quantitative-methods',
    title: 'Quantitative Methods',
    description: 'Econometrics, statistics, and computational techniques',
  },
  {
    slug: 'factor-models',
    title: 'Factor Models & Portfolio Construction',
    description: 'Alpha research, factor evaluation, and systematic strategies',
  },
  {
    slug: 'markets-and-execution',
    title: 'Markets & Execution',
    description: 'Microstructure, trading, derivatives, and commodities',
  },
  {
    slug: 'economics-and-macro',
    title: 'Economics & Macro',
    description: 'Economic theory, monetary policy, and business cycles',
  },
];

export const allItems: CurriculumItem[] = [
  // Level 1 — Economic Foundations
  {
    slug: 'menger-principles-of-economics',
    title: 'Principles of Economics',
    author: 'Carl Menger (1871)',
    level: 1,
    tracks: ['fundamental', 'macro'],
    topics: ['the-canon', 'economics-and-macro'],
    description:
      'The founding text of the Austrian School. Menger builds economic theory from first principles: subjective value, marginal utility, and the origin of money.',
    keyConcepts: ['Subjective value theory', 'Marginal utility', 'Origin of money', 'Goods of higher and lower order'],
  },
  {
    slug: 'stigler-theory-of-price',
    title: 'The Theory of Price',
    author: 'George Stigler',
    level: 1,
    tracks: ['fundamental', 'quantitative'],
    topics: ['the-canon', 'economics-and-macro'],
    description:
      'A rigorous treatment of price theory — supply, demand, costs, and market structure — from one of the Chicago School\'s finest minds.',
    keyConcepts: ['Price theory', 'Supply and demand', 'Cost curves', 'Market structure', 'Perfect competition'],
  },
  {
    slug: 'business-history-of-finance',
    title: 'A Business History of Finance',
    author: 'Randall Morck',
    level: 1,
    tracks: ['fundamental', 'macro'],
    topics: ['the-canon'],
    description:
      'How financial institutions evolved to serve (and sometimes exploit) the real economy. Essential context for understanding modern markets.',
    keyConcepts: ['Financial history', 'Corporate governance', 'Capital markets evolution', 'Agency problems'],
  },
  // Level 2 — Investing Philosophy
  {
    slug: 'buffett-shareholder-letters',
    title: 'Berkshire Hathaway Shareholder Letters',
    author: 'Warren Buffett',
    level: 2,
    tracks: ['fundamental'],
    topics: ['the-canon'],
    description:
      'Decades of accumulated wisdom on capital allocation, business quality, and long-term thinking from the greatest investor of the modern era.',
    keyConcepts: ['Capital allocation', 'Moats', 'Owner earnings', 'Circle of competence', 'Mr. Market'],
  },
  {
    slug: 'fisher-common-stocks',
    title: 'Common Stocks and Uncommon Profits',
    author: 'Philip Fisher',
    level: 2,
    tracks: ['fundamental'],
    topics: ['the-canon'],
    description:
      'Fisher\'s scuttlebutt method and his 15 points for evaluating growth companies. The other half of Buffett\'s intellectual DNA.',
    keyConcepts: ['Scuttlebutt method', '15 points to look for', 'Growth investing', 'Management quality'],
  },
  {
    slug: 'marks-oaktree-memos',
    title: 'Oaktree Capital Memos',
    author: 'Howard Marks',
    level: 2,
    tracks: ['fundamental', 'macro'],
    topics: ['the-canon'],
    description:
      'Howard Marks on risk, cycles, and second-level thinking. Essential reading for understanding market psychology and contrarian investing.',
    keyConcepts: ['Second-level thinking', 'Risk assessment', 'Market cycles', 'Contrarian investing', 'The pendulum'],
  },
  {
    slug: 'livermore-reminiscences',
    title: 'Reminiscences of a Stock Operator',
    author: 'Edwin Lefevre',
    level: 2,
    tracks: ['fundamental', 'practitioner'],
    topics: ['the-canon', 'markets-and-execution'],
    description:
      'The thinly veiled biography of Jesse Livermore. Timeless lessons on speculation, crowd psychology, and the art of tape reading.',
    keyConcepts: ['Speculation psychology', 'Tape reading', 'Position sizing', 'Market timing', 'Crowd behavior'],
  },
  {
    slug: 'druckenmiller-principles',
    title: 'Druckenmiller: Principles from Practice',
    author: 'Stanley Druckenmiller (via Schwager, interviews)',
    level: 2,
    tracks: ['macro', 'practitioner'],
    topics: ['the-canon', 'economics-and-macro', 'markets-and-execution'],
    description:
      'The greatest macro trader of his generation never wrote a book. Synthesized from three decades of interviews, conference talks, and Schwager\'s New Market Wizards: concentration, liquidity, fat pitches, and radical flexibility.',
    keyConcepts: ['Concentration over diversification', 'Liquidity as primary driver', 'Fat pitch sizing', 'Top-down macro framework', 'Intellectual flexibility'],
  },
  {
    slug: 'graham-value-investing',
    title: 'Security Analysis & The Intelligent Investor',
    author: 'Benjamin Graham',
    level: 2,
    tracks: ['fundamental'],
    topics: ['the-canon'],
    description:
      'The father of value investing. Graham\'s framework for margin of safety, intrinsic value, Mr. Market, and the distinction between investment and speculation.',
    keyConcepts: ['Margin of safety', 'Intrinsic value', 'Mr. Market', 'Investment vs. speculation', 'Net-net investing'],
  },
  {
    slug: 'taleb-incerto',
    title: 'Incerto: Fooled by Randomness, Black Swan, Antifragile',
    author: 'Nassim Nicholas Taleb',
    level: 2,
    tracks: ['fundamental', 'quantitative'],
    topics: ['the-canon', 'quantitative-methods'],
    description:
      'Taleb\'s philosophical and mathematical framework for navigating uncertainty, fat tails, and the limits of prediction. Why most risk models are wrong and what to do about it.',
    keyConcepts: ['Fat tails', 'Black swans', 'Antifragility', 'Narrative fallacy', 'Skin in the game', 'Ludic fallacy'],
  },
  // Level 3 — Macro & Monetary Theory
  {
    slug: 'keynes-general-theory',
    title: 'The General Theory of Employment, Interest, and Money',
    author: 'John Maynard Keynes',
    level: 3,
    tracks: ['macro'],
    topics: ['the-canon', 'economics-and-macro'],
    description:
      'The book that reshaped economics. Keynes on aggregate demand, liquidity preference, the multiplier, and why markets don\'t always self-correct.',
    keyConcepts: ['Aggregate demand', 'Liquidity preference', 'The multiplier', 'Animal spirits', 'Paradox of thrift'],
  },
  {
    slug: 'hayek-prices-and-production',
    title: 'Prices and Production',
    author: 'Friedrich Hayek',
    level: 3,
    tracks: ['macro'],
    topics: ['the-canon', 'economics-and-macro'],
    description:
      'Hayek\'s counter to Keynes: how credit expansion distorts the structure of production and inevitably leads to bust. The Austrian business cycle theory.',
    keyConcepts: ['Austrian business cycle theory', 'Structure of production', 'Credit expansion', 'Malinvestment', 'Natural rate of interest'],
  },
  {
    slug: 'soros-reflexivity',
    title: 'The Alchemy of Finance & Reflexivity',
    author: 'George Soros',
    level: 3,
    tracks: ['macro', 'practitioner'],
    topics: ['the-canon', 'economics-and-macro'],
    description:
      'Soros\' theory of reflexivity: feedback loops between market prices and fundamentals that create boom-bust cycles. The philosophical foundation behind the Quantum Fund.',
    keyConcepts: ['Reflexivity', 'Boom-bust cycles', 'Fallibility', 'Two-way feedback', 'Real-time experiment'],
  },
  {
    slug: 'behavioral-finance',
    title: 'Behavioral Finance: Kahneman, Tversky & Beyond',
    author: 'Kahneman, Tversky, Thaler',
    level: 3,
    tracks: ['fundamental', 'quantitative', 'macro'],
    topics: ['the-canon', 'economics-and-macro'],
    description:
      'The psychological foundations of market behavior. Prospect theory, loss aversion, anchoring, overconfidence, and the systematic biases that create mispricings.',
    keyConcepts: ['Prospect theory', 'Loss aversion', 'Anchoring', 'Overconfidence', 'Disposition effect', 'Herd behavior'],
  },
  // Level 4 — Valuation
  {
    slug: 'damodaran-little-book-valuation',
    title: 'The Little Book of Valuation',
    author: 'Aswath Damodaran',
    level: 4,
    tracks: ['fundamental', 'quantitative'],
    topics: ['the-canon'],
    description:
      'Damodaran distills valuation into its essentials: intrinsic value, relative value, and the stories that connect numbers to narratives.',
    keyConcepts: ['Intrinsic valuation', 'Relative valuation', 'DCF models', 'Cost of capital', 'Narrative and numbers'],
  },
  // Level 5 — Quantitative Foundations
  {
    slug: 'quant-foundations',
    title: 'Quantitative Foundations',
    author: 'Boyko',
    level: 5,
    tracks: ['quantitative'],
    topics: ['quantitative-methods'],
    description:
      'The mathematical and statistical foundations for quantitative finance: linear algebra, probability, optimization, and their applications to portfolio theory.',
    keyConcepts: ['Linear algebra for finance', 'Probability theory', 'Optimization', 'Portfolio theory foundations'],
  },
  {
    slug: 'econometrics-and-fx',
    title: 'Econometrics & FX',
    author: 'Various',
    level: 5,
    tracks: ['quantitative', 'macro'],
    topics: ['quantitative-methods', 'economics-and-macro'],
    description:
      'Applied econometrics with a focus on foreign exchange markets. Regression, time series, and the empirical tools for macro-financial research.',
    keyConcepts: ['Time series analysis', 'Regression methods', 'FX market dynamics', 'Interest rate parity', 'Carry trade'],
  },
  {
    slug: 'garch-101',
    title: 'GARCH 101',
    author: 'Various',
    level: 5,
    tracks: ['quantitative'],
    topics: ['quantitative-methods'],
    description:
      'An introduction to GARCH models for volatility estimation and forecasting. Understanding how volatility clusters and why it matters for risk management.',
    keyConcepts: ['Volatility clustering', 'ARCH/GARCH models', 'Conditional variance', 'Volatility forecasting'],
  },
  {
    slug: 'portfolio-construction',
    title: 'Portfolio Construction',
    author: 'Markowitz, Black-Litterman, Various',
    level: 6,
    tracks: ['quantitative', 'fundamental'],
    topics: ['factor-models', 'quantitative-methods'],
    description:
      'From Markowitz\'s efficient frontier through Black-Litterman, risk parity, and Kelly criterion at the portfolio level. How to turn signals and convictions into actual allocations.',
    keyConcepts: ['Efficient frontier', 'Mean-variance optimization', 'Black-Litterman', 'Risk parity', 'Position sizing', 'Rebalancing'],
  },
  // Level 6 — Strategy & Implementation
  {
    slug: 'theory-to-application',
    title: 'From Theory to Application',
    author: 'Various',
    level: 6,
    tracks: ['quantitative', 'practitioner'],
    topics: ['factor-models'],
    description:
      'Bridging the gap between academic finance theory and practical portfolio construction. How to turn research insights into implementable strategies.',
    keyConcepts: ['Strategy implementation', 'Transaction costs', 'Backtesting', 'Out-of-sample testing'],
  },
  {
    slug: 'systematic-indices',
    title: 'Systematic Indices',
    author: 'Various',
    level: 6,
    tracks: ['quantitative'],
    topics: ['factor-models'],
    description:
      'The design and construction of systematic, rules-based indices. Factor tilts, rebalancing mechanics, and the rise of smart beta.',
    keyConcepts: ['Index construction', 'Factor tilts', 'Rebalancing rules', 'Smart beta', 'Benchmark design'],
  },
  {
    slug: 'gappy-lecture-1-alpha-research',
    title: 'Gappy Lecture 1: Alpha Research',
    author: 'Gappy',
    level: 6,
    tracks: ['quantitative'],
    topics: ['factor-models'],
    description:
      'The first in a three-part series on systematic investing. How to generate, test, and validate alpha signals from quantitative research.',
    keyConcepts: ['Alpha signal generation', 'Signal testing', 'Information coefficient', 'Signal decay'],
  },
  {
    slug: 'gappy-lecture-2-factor-models',
    title: 'Gappy Lecture 2: Factor Models',
    author: 'Gappy',
    level: 6,
    tracks: ['quantitative'],
    topics: ['factor-models'],
    description:
      'Factor models for explaining and predicting returns. From Fama-French to modern multi-factor frameworks.',
    keyConcepts: ['Fama-French factors', 'Factor construction', 'Factor exposure', 'Risk decomposition'],
  },
  {
    slug: 'gappy-lecture-3-factor-evaluation',
    title: 'Gappy Lecture 3: Factor Evaluation',
    author: 'Gappy',
    level: 6,
    tracks: ['quantitative'],
    topics: ['factor-models'],
    description:
      'How to evaluate whether a factor is real, robust, and investable. Statistical tests, economic rationale, and implementation considerations.',
    keyConcepts: ['Factor robustness', 'Statistical significance', 'Economic rationale', 'Factor crowding'],
  },
  // Level 7 — Markets & Instruments
  {
    slug: 'physical-financial-commodities',
    title: 'Physical & Financial Commodities',
    author: 'Various',
    level: 7,
    tracks: ['practitioner', 'macro'],
    topics: ['markets-and-execution'],
    description:
      'The intersection of physical commodity markets and financial derivatives. Supply chains, storage, term structure, and the financialization of commodities.',
    keyConcepts: ['Commodity markets', 'Term structure', 'Contango and backwardation', 'Storage costs', 'Financialization'],
  },
  {
    slug: 'model-implementation',
    title: 'Model Implementation',
    author: 'Various',
    level: 7,
    tracks: ['quantitative', 'practitioner'],
    topics: ['quantitative-methods', 'markets-and-execution'],
    description:
      'Taking quantitative models from prototype to production. Software engineering practices, numerical methods, and the engineering of trading systems.',
    keyConcepts: ['Production systems', 'Numerical methods', 'Software engineering for finance', 'Model validation'],
  },
  {
    slug: 'derivative-portfolio-management',
    title: 'Derivative Portfolio Management',
    author: 'Various',
    level: 7,
    tracks: ['practitioner', 'quantitative'],
    topics: ['markets-and-execution'],
    description:
      'Managing a portfolio of derivative instruments. Greeks, hedging strategies, and the practical challenges of options book management.',
    keyConcepts: ['Greeks management', 'Delta hedging', 'Gamma trading', 'Vol surface', 'Portfolio Greeks'],
  },
  {
    slug: 'fixed-income-fundamentals',
    title: 'Fixed Income Fundamentals',
    author: 'Various',
    level: 7,
    tracks: ['practitioner', 'quantitative', 'macro'],
    topics: ['markets-and-execution', 'quantitative-methods'],
    description:
      'Bonds, yield curves, duration, convexity, and rate trading. The largest asset class in the world, and the one most finance curricula cover worst.',
    keyConcepts: ['Yield curves', 'Duration and convexity', 'Term structure models', 'Rate trading', 'Credit spreads', 'Curve construction'],
  },
  // Level 8 — Advanced Topics
  {
    slug: 'market-microstructure-trading',
    title: 'Market Microstructure & Trading',
    author: 'Various',
    level: 8,
    tracks: ['practitioner', 'quantitative'],
    topics: ['markets-and-execution'],
    description:
      'How orders become trades: market microstructure, order book dynamics, information asymmetry, and the economics of market making.',
    keyConcepts: ['Order book dynamics', 'Information asymmetry', 'Market making', 'Price discovery', 'Transaction costs'],
  },
  {
    slug: 'stochastic-volatility-models',
    title: 'Stochastic Volatility Models',
    author: 'Various',
    level: 8,
    tracks: ['quantitative'],
    topics: ['quantitative-methods'],
    description:
      'Beyond Black-Scholes: models where volatility itself is a random process. Heston, SABR, and the calibration challenges of modern derivatives pricing.',
    keyConcepts: ['Heston model', 'SABR model', 'Vol of vol', 'Calibration', 'Implied vs. realized volatility'],
  },
  {
    slug: 'differential-machine-learning',
    title: 'Differential Machine Learning',
    author: 'Various',
    level: 8,
    tracks: ['quantitative'],
    topics: ['quantitative-methods'],
    description:
      'Using automatic differentiation and neural networks to price and hedge derivatives. A modern approach combining ML with quantitative finance.',
    keyConcepts: ['Automatic differentiation', 'Neural network pricing', 'Differential regularization', 'Hedging with ML'],
  },
  {
    slug: 'quasi-random-number-generation',
    title: 'Quasi-Random Number Generation',
    author: 'Various',
    level: 8,
    tracks: ['quantitative'],
    topics: ['quantitative-methods'],
    description:
      'Low-discrepancy sequences for Monte Carlo simulation. Sobol, Halton, and why quasi-random beats pseudo-random for high-dimensional integration.',
    keyConcepts: ['Sobol sequences', 'Halton sequences', 'Low-discrepancy', 'Monte Carlo convergence', 'Quasi-Monte Carlo'],
  },
];

export const levels: Level[] = [
  {
    number: 1,
    title: 'Economic Foundations',
    description: 'First principles: value, price, and the history of finance',
    items: allItems.filter((i) => i.level === 1),
  },
  {
    number: 2,
    title: 'Investing Philosophy',
    description: 'The wisdom of Buffett, Fisher, Marks, Livermore, and Druckenmiller',
    items: allItems.filter((i) => i.level === 2),
  },
  {
    number: 3,
    title: 'Macro & Monetary Theory',
    description: 'Keynes, Hayek, Soros, and the psychology of markets',
    items: allItems.filter((i) => i.level === 3),
  },
  {
    number: 4,
    title: 'Valuation',
    description: 'Intrinsic value, relative value, and Damodaran\'s toolkit',
    items: allItems.filter((i) => i.level === 4),
  },
  {
    number: 5,
    title: 'Quantitative Foundations',
    description: 'Math, statistics, and econometrics for finance',
    items: allItems.filter((i) => i.level === 5),
  },
  {
    number: 6,
    title: 'Strategy & Implementation',
    description: 'From alpha research to systematic portfolio construction',
    items: allItems.filter((i) => i.level === 6),
  },
  {
    number: 7,
    title: 'Markets & Instruments',
    description: 'Commodities, derivatives, and production-grade systems',
    items: allItems.filter((i) => i.level === 7),
  },
  {
    number: 8,
    title: 'Advanced Topics',
    description: 'Microstructure, stochastic vol, and machine learning',
    items: allItems.filter((i) => i.level === 8),
  },
];

export const readingQueue = [
  { title: 'Security Analysis', author: 'Benjamin Graham & David Dodd' },
  { title: 'The Intelligent Investor', author: 'Benjamin Graham' },
  { title: 'Margin of Safety', author: 'Seth Klarman' },
  { title: 'You Can Be a Stock Market Genius', author: 'Joel Greenblatt' },
  { title: 'The Alchemy of Finance', author: 'George Soros' },
  { title: 'Fooled by Randomness', author: 'Nassim Nicholas Taleb' },
  { title: 'When Genius Failed', author: 'Roger Lowenstein' },
  { title: 'The Man Who Solved the Market', author: 'Gregory Zuckerman' },
];

export function getItemBySlug(slug: string): CurriculumItem | undefined {
  return allItems.find((item) => item.slug === slug);
}

export function getItemsByTrack(trackSlug: TrackSlug): CurriculumItem[] {
  return allItems.filter((item) => item.tracks.includes(trackSlug));
}

export function getItemsByTopic(topicSlug: TopicSlug): CurriculumItem[] {
  return allItems.filter((item) => item.topics.includes(topicSlug));
}

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getAdjacentItems(slug: string): { prev: CurriculumItem | null; next: CurriculumItem | null } {
  const idx = allItems.findIndex((i) => i.slug === slug);
  return {
    prev: idx > 0 ? allItems[idx - 1] : null,
    next: idx < allItems.length - 1 ? allItems[idx + 1] : null,
  };
}
