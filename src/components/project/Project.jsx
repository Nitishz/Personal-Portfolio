import React from "react";
import "./project.css";

const data = [
  {
    id: 1,
    title: "Blog App",
    PIC: '/blog.png',
    github: "https://github.com/Nitishz/Django-Blog",
    demo: "https://github.com",
  },
  {
    id: 2,
    title: "News App",
    PIC: '/news-app.png',
    github: "https://github.com/Nitishz/A1-News",
    demo: "https://github.com",
  },
  {
    id: 3,
    title: "Personal Portfolio App",
    PIC: '/portfolio.png',
    github: "https://github.com/Nitishz/Personal-Portfolio",
    demo: "https://github.com",
  },
  {
    id: 4,
    title: "Ecommerce App",
    PIC: '/clotheswear.png',
    github: "https://github.com/Nitishz/E-Commerce-NextJS",
    demo: "https://github.com",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent <strong className="purple">Works</strong></h5>
      <h2>Here are a few project I've worked on.</h2>

      <div className="container portfolio__container">
        {data.map(({ id, title, PIC, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={PIC} alt={title} width={281.85} height={187.99} />
              </div>
              <h3 className="purple">{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
                <a
                  href={demo}
                  style={{"pointer-events": "none"}}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
