'use client';

import { useState } from 'react';
import Link from 'next/link';

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <div>
            <div className="navbar-logo-text">Wyandanch Library</div>
            <div className="navbar-logo-sub">Open Source Education</div>
          </div>
        </Link>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '\u2715' : '\u2630'}
        </button>

        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          <li><Link href="/curriculum" onClick={() => setOpen(false)}>Curriculum</Link></li>
          <li><Link href="/track/fundamental" onClick={() => setOpen(false)}>Tracks</Link></li>
          <li><Link href="/reading-queue" onClick={() => setOpen(false)}>Reading Queue</Link></li>
        </ul>
      </div>
    </nav>
  );
}
