"use client";

import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" aria-hidden="true" />

      <div className="hero-content container">
        <div className="eyebrow hero-eyebrow">
          <span className="eyebrow-line" />
          INDEPENDENT CREATIVE AGENCY
        </div>

        <h1>
          Make your brand
          <br />
          <span>impossible to ignore.</span>
        </h1>

        <p className="hero-description">
          We create striking visuals, compelling campaigns, and
          social experiences that help ambitious brands stand out.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="button button-gold">
            Let&apos;s work together
            <ArrowUpRight size={19} weight="bold" />
          </a>

          <a href="#work" className="button button-outline">
            Explore our work
          </a>
        </div>

        <div className="hero-bottom">
          <span>STRATEGY. CREATIVITY. IMPACT.</span>
          <a href="#services" className="scroll-link">
            Discover what we do
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
