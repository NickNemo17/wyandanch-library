interface ReadingQueueCardProps {
  title: string;
  author: string;
  index: number;
}

export function ReadingQueueCard({ title, author, index }: ReadingQueueCardProps) {
  return (
    <div className="reading-queue-card">
      <div className="reading-queue-card-index">{String(index + 1).padStart(2, '0')}</div>
      <div className="reading-queue-card-info">
        <div className="reading-queue-card-title">{title}</div>
        <div className="reading-queue-card-author">{author}</div>
      </div>
      <div className="reading-queue-card-badge">Coming Soon</div>
    </div>
  );
}
