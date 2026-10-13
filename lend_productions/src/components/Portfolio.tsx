
"use client";

import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  {
    title: "Product & Brand",
    category: "PHOTOGRAPHY",
    image: "/images/portfolio/Golden Hour Wedding Photography.png",
  },
  {
    title: "The Moving Image",
    category: "VIDEO PRODUCTION",
    image: "/images/portfolio/Recording Studio Smartphone Setup.png",
  },
  {
    title: "Culture in Focus",
    category: "CREATIVE DIRECTION",
    image: "/images/portfolio/Photographer Walking Through Sunlit Park.png",
  },
  {
    title: "Editorial Look",
    category: "ART DIRECTION",
    image: "/images/portfolio/Behind-the-Scenes Studio Shoot.png",
  },
];

export default function Portfolio() {
  return (
    <section className="section portfolio-section" id="work">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              SELECTED VISUALS
            </div>

            <h2>
              Work that speaks
              <br />
              <span>for itself.</span>
            </h2>
          </div>

          <p>
            Every frame, every detail, every campaign has a purpose.
            Here&apos;s a glimpse of the creative direction we love.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article
              className="portfolio-card"
              key={project.title}
            >
              <div
                className="portfolio-image"
                style={{ backgroundImage: `url("${project.image}")` }}
                role="img"
                aria-label={`Editorial visual for ${project.title}`}
              />

              <div className="portfolio-overlay">
                <div>
                  <span className="portfolio-category">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                </div>

                <span className="portfolio-index">
                  0{index + 1}
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
