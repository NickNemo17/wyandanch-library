import { levels } from '@/lib/curriculum';
import { LevelCard } from '@/components/LevelCard';
import { ScrollReveal } from '@/components/ScrollReveal';

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
