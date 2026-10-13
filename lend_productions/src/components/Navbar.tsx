
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  List,
  X,
} from "@phosphor-icons/react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link
          href="/"
          className="wordmark"
          aria-label="Lend Productions home"
          onClick={() => setMenuOpen(false)}
        >
          <Image 
            src="/logo.png" 
            alt="Lend Productions Logo" 
            width={150} 
            height={40} 
            priority
          />
        </Link>

        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Start a project
          <ArrowUpRight size={17} weight="bold" />
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <List size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-nav" id="mobile-navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <ArrowUpRight size={17} />
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
