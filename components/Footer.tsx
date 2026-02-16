import { BlinkingCursor } from './BlinkingCursor';

export function Footer() {
  return (
    <footer className="footer">
      <span className="prompt">&gt;</span> Wyandanch Library &nbsp;|&nbsp; Open Source Education &nbsp;|&nbsp; {new Date().getFullYear()}
      <BlinkingCursor />
    </footer>
  );
}
