import { readingQueue } from '@/lib/curriculum';
import { ReadingQueueCard } from '@/components/ReadingQueueCard';
import { Panel } from '@/components/Panel';
import { PanelHeader } from '@/components/PanelHeader';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function ReadingQueuePage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Reading Queue</h1>
        <p className="page-subtitle">
          On deck: books and papers we plan to add to the curriculum.
        </p>
      </div>

      <div className="section-container">
        <ScrollReveal>
          <Panel>
            <PanelHeader title="Coming Soon" description="Future additions to the library" />
            <div className="reading-queue-grid">
              {readingQueue.map((item, i) => (
                <ReadingQueueCard key={item.title} title={item.title} author={item.author} index={i} />
              ))}
            </div>
          </Panel>
        </ScrollReveal>
      </div>
    </>
  );
}
