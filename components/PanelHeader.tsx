import { BlinkingCursor } from './BlinkingCursor';

interface PanelHeaderProps {
  title: string;
  description?: string;
}

export function PanelHeader({ title, description }: PanelHeaderProps) {
  return (
    <div className="panel-header">
      <span className="prompt">&gt;</span>
      <span className="section-name">{title}</span>
      <BlinkingCursor />
      {description && <span className="panel-desc">{description}</span>}
    </div>
  );
}
