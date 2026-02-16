'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Level } from '@/lib/curriculum';

interface LevelCardProps {
  level: Level;
  delay?: number;
}

export function LevelCard({ level, delay = 0 }: LevelCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="level-card"
      style={{ animationDelay: `${delay}s` }}
    >
      <button className="level-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="level-card-number">
          <span className="level-card-number-text">{String(level.number).padStart(2, '0')}</span>
        </div>
        <div className="level-card-info">
          <div className="level-card-title">{level.title}</div>
          <div className="level-card-desc">{level.description}</div>
        </div>
        <div className="level-card-meta">
          <span className="level-card-count">{level.items.length} {level.items.length === 1 ? 'item' : 'items'}</span>
          <span className="level-card-toggle">{expanded ? '\u2212' : '+'}</span>
        </div>
      </button>

      {expanded && (
        <div className="level-card-items">
          {level.items.map((item) => (
            <Link key={item.slug} href={`/read/${item.slug}`} className="level-card-item">
              <span className="level-card-item-prompt">&gt;</span>
              <div className="level-card-item-info">
                <span className="level-card-item-title">{item.title}</span>
                <span className="level-card-item-author">{item.author}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
