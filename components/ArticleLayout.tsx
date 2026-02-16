import Link from 'next/link';
import { Breadcrumb } from './Breadcrumb';
import type { CurriculumItem } from '@/lib/curriculum';

interface ArticleLayoutProps {
  item: CurriculumItem;
  prev: CurriculumItem | null;
  next: CurriculumItem | null;
  children: React.ReactNode;
}

export function ArticleLayout({ item, prev, next, children }: ArticleLayoutProps) {
  return (
    <div className="article-layout">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Curriculum', href: '/curriculum' },
          { label: `Level ${item.level}` },
          { label: item.title },
        ]}
      />

      <header className="article-header">
        <div className="article-level-badge">Level {item.level}</div>
        <h1 className="article-title">{item.title}</h1>
        <div className="article-author">{item.author}</div>
        <p className="article-description">{item.description}</p>

        {item.keyConcepts.length > 0 && (
          <div className="article-concepts">
            <div className="article-concepts-label">Key Concepts</div>
            <div className="article-concepts-list">
              {item.keyConcepts.map((concept) => (
                <span key={concept} className="tag">{concept}</span>
              ))}
            </div>
          </div>
        )}

        <div className="article-tracks">
          {item.tracks.map((t) => (
            <Link key={t} href={`/track/${t}`} className="article-track-link">
              {t}
            </Link>
          ))}
        </div>
      </header>

      <div className="article-content">
        {children}
      </div>

      <nav className="article-nav">
        {prev ? (
          <Link href={`/read/${prev.slug}`} className="article-nav-link article-nav-prev">
            <span className="article-nav-label">Previous</span>
            <span className="article-nav-title">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/read/${next.slug}`} className="article-nav-link article-nav-next">
            <span className="article-nav-label">Next</span>
            <span className="article-nav-title">{next.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
