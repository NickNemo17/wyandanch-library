interface PanelProps {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
  id?: string;
}

export function Panel({ children, glow, className, id }: PanelProps) {
  const classes = ['panel', glow ? 'panel-glow' : '', className].filter(Boolean).join(' ');
  return (
    <div className={classes} id={id}>
      {children}
    </div>
  );
}
