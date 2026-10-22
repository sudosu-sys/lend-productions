
"use client";

import { Check, ArrowUpRight } from "@phosphor-icons/react";

const packages = [
  {
    name: "Basic",
    description: "Consistent visibility and engagement for growing brands.",
    price: "25,000",
    currency: "ETB",
    period: "Per month",
    featured: false,
    features: [
      "15 posts per month (FB, IG, TikTok)",
      "2 shooting days per month",
      "Active community management & replies",
      "Performance report",
    ],
  },
  {
    name: "Standard",
    description: "Accelerate growth with paid advertising and active management.",
    price: "35,000",
    currency: "ETB",
    period: "Per month",
    featured: false,
    features: [
      "12 posts per month (FB, IG, TikTok)",
      "Paid advertising",
      "2 shooting days per month",
      "Active community management & replies",
      "Performance report",
    ],
  },
  {
    name: "Premium",
    description: "The complete digital and full production service for ambitious brands.",
    price: "45,000",
    currency: "ETB",
    period: "Per month",
    featured: true,
    features: [
      "12 posts per month (FB, IG, TikTok)",
      "Paid advertising",
      "Full production service",
      "Active community management & replies",
      "Performance report",
    ],
  },
];

export default function Packages() {
  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              OUR PACKAGES
            </div>

            <h2>
              The right fit for
              <br />
              <span>your next move.</span>
            </h2>
          </div>

          <p>
            From building your online presence to managing your
            entire digital brand, choose the package that fits
            your ambitions.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <article
              className={`package-card ${
                pkg.featured ? "package-featured" : ""
              }`}
              key={pkg.name}
            >
              {pkg.featured && (
                <span className="package-badge">
                  MOST COMPREHENSIVE
                </span>
              )}

              <div className="package-name">{pkg.name}</div>

              <p className="package-description">
                {pkg.description}
              </p>

              <div className="package-price">
                <span className="package-currency">
                  {pkg.currency}
                </span>{" "}
                {pkg.price}
              </div>

              <div className="package-period">
                {pkg.period}
              </div>

              <a
                className={`button ${
                  pkg.featured ? "button-gold" : "button-dark"
                } package-button`}
                href="#contact"
              >
                Choose {pkg.name}
                <ArrowUpRight size={18} weight="bold" />
              </a>

              <div className="package-divider" />

              <p className="features-label">
                WHAT&apos;S INCLUDED
              </p>

              <ul className="package-features">
                {pkg.features.map((feature) => (
                  <li key={feature}>
                    <Check size={17} weight="bold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="packages-note">
          Looking for something tailored to your business?
          We can create a package around your specific goals.
          <a href="#contact"> Let&apos;s discuss your project.</a>
        </p>
      </div>
    </section>
  );
}
