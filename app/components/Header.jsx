'use client';

import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#team', label: 'Team' },
  { href: '#register', label: 'Register' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header modern-navbar">
      <div className="container nav-flex">
        <div className="logo">
          <a href="#">
            <img src="/logo.png" alt="Lead & Lead Logo" height="48" />
          </a>
        </div>
        <nav className={`nav-menu${menuOpen ? ' open' : ''}`}>
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(m => !m)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

