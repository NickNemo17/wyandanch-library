interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
}

export function TerminalWindow({ title = 'library.wyandanch.edu', children }: TerminalWindowProps) {
  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <div className="terminal-dot terminal-dot-r" />
        <div className="terminal-dot terminal-dot-y" />
        <div className="terminal-dot terminal-dot-g" />
        <span className="terminal-titlebar-text">{title}</span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
}
