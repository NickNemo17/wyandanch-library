import Link from 'next/link';
import { topics, getItemsByTopic } from '@/lib/curriculum';

export function TopicBrowser() {
  return (
    <div className="topic-browser">
      {topics.map((topic) => {
        const items = getItemsByTopic(topic.slug);
        return (
          <div key={topic.slug} className="topic-card">
            <div className="topic-card-title">{topic.title}</div>
            <div className="topic-card-desc">{topic.description}</div>
            <div className="topic-card-items">
              {items.map((item) => (
                <Link key={item.slug} href={`/read/${item.slug}`} className="topic-card-item">
                  <span className="prompt">&gt;</span> {item.title}
                </Link>
              ))}
            </div>
            <div className="topic-card-count">{items.length} {items.length === 1 ? 'text' : 'texts'}</div>
          </div>
        );
      })}
    </div>
  );
}
