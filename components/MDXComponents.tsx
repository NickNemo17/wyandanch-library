import type { MDXComponents } from 'mdx/types';

function Callout({ children, type = 'note' }: { children: React.ReactNode; type?: 'note' | 'warning' | 'key' }) {
  return <div className={`callout callout-${type}`}>{children}</div>;
}

function KeyConcept({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="key-concept">
      <div className="key-concept-title">{title}</div>
      <div className="key-concept-body">{children}</div>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="mdx-h1" {...props} />,
  h2: (props) => <h2 className="mdx-h2" {...props} />,
  h3: (props) => <h3 className="mdx-h3" {...props} />,
  p: (props) => <p className="mdx-p" {...props} />,
  ul: (props) => <ul className="mdx-ul" {...props} />,
  ol: (props) => <ol className="mdx-ol" {...props} />,
  li: (props) => <li className="mdx-li" {...props} />,
  blockquote: (props) => <blockquote className="mdx-blockquote" {...props} />,
  code: (props) => <code className="mdx-code" {...props} />,
  pre: (props) => <pre className="mdx-pre" {...props} />,
  a: (props) => <a className="mdx-link" target="_blank" rel="noopener noreferrer" {...props} />,
  hr: () => <hr className="mdx-hr" />,
  table: (props) => <div className="mdx-table-wrap"><table className="mdx-table" {...props} /></div>,
  th: (props) => <th className="mdx-th" {...props} />,
  td: (props) => <td className="mdx-td" {...props} />,
  Callout,
  KeyConcept,
};
