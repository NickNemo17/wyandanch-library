import Link from 'next/link';
import { tracks } from '@/lib/curriculum';

export function TrackPicker() {
  return (
    <div className="track-picker">
      {tracks.map((track) => (
        <Link key={track.slug} href={`/track/${track.slug}`} className="track-card">
          <div className="track-card-icon">{track.icon}</div>
          <div className="track-card-title">{track.title}</div>
          <div className="track-card-subtitle">{track.subtitle}</div>
        </Link>
      ))}
    </div>
  );
}
