import type { Metadata } from 'next';
import { levels } from '@/lib/curriculum';
import { LevelCard } from '@/components/LevelCard';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Curriculum — Wyandanch Library',
  description: '37 readings across 8 progressive levels. From economic foundations through investing philosophy, valuation, quantitative methods, and advanced topics in market microstructure and machine learning.',
  openGraph: {
    title: 'Curriculum — Wyandanch Library',
    description: '37 readings across 8 progressive levels in investing and quantitative finance.',
    url: 'https://wyandanchlibrary.com/curriculum',
    siteName: 'Wyandanch Library',
  },
};

export default function CurriculumPage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Curriculum</h1>
        <p className="page-subtitle">
          8 levels of progressive education, from economic foundations to advanced quantitative methods.
        </p>
      </div>

      <div className="section-container">
        {levels.map((level, i) => (
          <ScrollReveal key={level.number} delay={i * 0.05}>
            <LevelCard level={level} />
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
