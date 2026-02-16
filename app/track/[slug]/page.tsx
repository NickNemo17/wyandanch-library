import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tracks, getTrackBySlug, getItemsByTrack } from '@/lib/curriculum';
import type { TrackSlug } from '@/lib/curriculum';
import { ScrollReveal } from '@/components/ScrollReveal';

export function generateStaticParams() {
  return tracks.map((track) => ({ slug: track.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const track = getTrackBySlug(params.slug);
  if (!track) return {};
  const title = `${track.title} — Wyandanch Library`;
  const description = track.description;
  return {
    title,
    description,
    openGraph: {
      title: track.title,
      description,
      url: `https://wyandanchlibrary.com/track/${track.slug}`,
      siteName: 'Wyandanch Library',
      type: 'website',
    },
  };
}

export default function TrackPage({ params }: { params: { slug: string } }) {
  const track = getTrackBySlug(params.slug);
  if (!track) return notFound();

  const items = getItemsByTrack(params.slug as TrackSlug);

  return (
    <>
      <div className="page-header">
        <div className="track-detail-header">
          <div className="track-detail-icon">{track.icon}</div>
          <h1 className="track-detail-title">{track.title}</h1>
          <p className="track-detail-subtitle">{track.subtitle}</p>
          <p className="track-detail-desc">{track.description}</p>
        </div>
      </div>

      <div className="section-container">
        <nav className="track-nav">
          {tracks.map((t) => (
            <Link
              key={t.slug}
              href={`/track/${t.slug}`}
              className={`track-nav-link ${t.slug === params.slug ? 'active' : ''}`}
            >
              {t.title}
            </Link>
          ))}
        </nav>

        <div className="track-items-list">
          {items.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.04}>
              <Link href={`/read/${item.slug}`} className="track-item-card">
                <span className="track-item-level">L{item.level}</span>
                <div className="track-item-info">
                  <div className="track-item-title">{item.title}</div>
                  <div className="track-item-author">{item.author}</div>
                  <div className="track-item-desc">{item.description}</div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
