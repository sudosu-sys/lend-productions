"use client";


import {
  Camera,
  FilmStrip,
  Megaphone,
  ShareNetwork,
  ArrowUpRight,
} from "@phosphor-icons/react";

const services = [
  {
    number: "01",
    title: "Photography",
    description:
      "Professional imagery for products, people, campaigns, and the moments that define your brand.",
    icon: Camera,
    tags: "PRODUCT · BRAND · EDITORIAL",
  },
  {
    number: "02",
    title: "Video Production",
    description:
      "Cinematic video content designed to tell your story and make people stop scrolling.",
    icon: FilmStrip,
    tags: "CAMPAIGNS · REELS · COMMERCIALS",
  },
  {
    number: "03",
    title: "Paid Advertising",
    description:
      "Strategic Instagram and TikTok campaigns built to reach the right audience and drive action.",
    icon: Megaphone,
    tags: "META ADS · TIKTOK ADS",
  },
  {
    number: "04",
    title: "Social Media",
    description:
      "Consistent content, thoughtful planning, and account management that keep your brand moving.",
    icon: ShareNetwork,
    tags: "STRATEGY · CONTENT · MANAGEMENT",
  },
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              WHAT WE DO
            </div>
            <h2>
              Creative services.
              <br />
              <span>Real ambition.</span>
            </h2>
          </div>

          <p>
            Everything your brand needs to show up with
            confidence, communicate clearly, and grow with purpose.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>
                  <Icon size={29} weight="light" />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-card-bottom">
                  <span>{service.tags}</span>
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
