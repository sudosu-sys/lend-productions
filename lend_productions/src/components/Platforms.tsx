"use client";

import { InstagramLogo, TiktokLogo, FacebookLogo } from "@phosphor-icons/react";

const platforms = [
  {
    name: "Instagram",
    description: "Visual storytelling, aesthetic reels, and highly engaged community building tailored for visual-first audiences.",
    icon: InstagramLogo,
  },
  {
    name: "TikTok",
    description: "Trend-driven, short-form video content designed to maximize organic reach and viral momentum.",
    icon: TiktokLogo,
  },
  {
    name: "Facebook",
    description: "Highly targeted advertising, broad demographic penetration, and strategic community group management.",
    icon: FacebookLogo,
  },
];

export default function Platforms() {
  return (
    <section className="section platforms-section" id="platforms">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              WHERE WE THRIVE
            </div>
            <h2>
              Dominate your
              <br />
              <span>digital spaces.</span>
            </h2>
          </div>
          <p>
            We craft platform-native content designed specifically for the algorithms and audiences of today's most powerful social networks.
          </p>
        </div>

        <div className="platforms-grid">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <article className="platform-card" key={platform.name}>
                <div className="platform-icon-wrapper">
                  <Icon size={30} weight="regular" />
                </div>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}