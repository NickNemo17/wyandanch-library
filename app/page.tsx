import Link from 'next/link';
import Image from 'next/image';
import { TerminalWindow } from '@/components/TerminalWindow';
import { ScanLine } from '@/components/ScanLine';
import { BlinkingCursor } from '@/components/BlinkingCursor';
import { TrackPicker } from '@/components/TrackPicker';
import { TopicBrowser } from '@/components/TopicBrowser';
import { Panel } from '@/components/Panel';
import { PanelHeader } from '@/components/PanelHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { allItems, levels } from '@/lib/curriculum';

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-terminal">
          <TerminalWindow>
            <ScanLine />
            <div className="hero-content">
              <div className="hero-fade hero-fade-1">
                <Image
                  src="/logo.png"
                  alt="Wyandanch"
                  width={80}
                  height={80}
                  className="hero-logo"
                />
                <h1 className="hero-title">Wyandanch Library</h1>
                <p className="hero-subtitle">Open Source Finance Education</p>
              </div>
              <div className="hero-fade hero-fade-2">
                <p className="hero-tagline">
                  <span className="prompt">&gt;</span> From Menger to machine learning.
                  <BlinkingCursor />
                </p>
              </div>
              <div className="hero-fade hero-fade-3">
                <p className="hero-desc">
                  A free, structured curriculum for learning investing and quantitative
                  finance from first principles. {allItems.length} readings across {levels.length} progressive levels.
                </p>
              </div>
              <div className="hero-fade hero-fade-4">
                <div className="hero-ctas">
                  <Link href="/curriculum" className="btn-primary">
                    <span className="prompt">&gt;</span> Start the Curriculum
                  </Link>
                  <Link href="/track/fundamental" className="btn-secondary">
                    Browse by Track
                  </Link>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      <section className="section-container">
        <ScrollReveal>
          <Panel glow>
            <PanelHeader title="Choose Your Track" description="Four paths through the curriculum" />
            <TrackPicker />
          </Panel>
        </ScrollReveal>
      </section>

      <section className="section-container">
        <ScrollReveal delay={0.1}>
          <Panel>
            <PanelHeader title="Browse by Topic" description="Explore by subject area" />
            <TopicBrowser />
          </Panel>
        </ScrollReveal>
      </section>
    </>
  );
}
