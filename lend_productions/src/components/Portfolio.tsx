"use client";


import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  {
    title: "Product & Brand",
    category: "PHOTOGRAPHY",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85",
    className: "portfolio-tall",
  },
  {
    title: "The Moving Image",
    category: "VIDEO PRODUCTION",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=85",
    className: "",
  },
  {
    title: "Culture in Focus",
    category: "CREATIVE DIRECTION",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=85",
    className: "",
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
              className={`portfolio-card ${project.className}`}
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

        <p className="portfolio-disclaimer">
          Visual references shown for the initial design. Replace with
          original Lend Productions projects before presenting this
          section as a client portfolio.
        </p>
      </div>
    </section>
  );
}
