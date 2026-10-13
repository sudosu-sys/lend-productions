"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="wordmark" aria-label="Lend Productions home">
              <Image 
                src="/footer_logo.png" 
                alt="Lend Productions Logo" 
                width={150} 
                height={40} 
                className="footer-logo"
              />
            </Link>

            <p>
              Creative production and strategic thinking
              for brands with somewhere to go.
            </p>
          </div>

          <div className="footer-column">
            <h3>EXPLORE</h3>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>GET IN TOUCH</h3>
            <a href="mailto:hello@lendproductions.com">
              Email us <ArrowUpRight size={15} />
            </a>
            <a href="#contact">Start a project</a>
            <span>Instagram · TikTok</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Lend Productions.
            All rights reserved.
          </span>
          <span>MADE WITH INTENTION.</span>
        </div>
      </div>
    </footer>
  );
}