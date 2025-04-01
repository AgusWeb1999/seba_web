import React from "react";
import "../css/projects.css";

function Projects() {
  const projects = [
    {
      title: "Bathrooms",
      description:
        "We specialize in modern and elegant bathroom designs that combine functionality and aesthetics.",
      image: "src/images/WhatsApp Image 2025-03-31 at 17.00.10_3a0332df.jpg",
    },
    {
      title: "Kitchen",
      description:
        "Our kitchens are designed to be the heart of your home, blending style and practicality.",
      image: "src/images/WhatsApp Image 2025-03-31 at 17.00.14_8edf9ea6.jpg",
    },
    {
      title: "Other Projects",
      description:
        "Explore our diverse range of projects, from living rooms to outdoor spaces, tailored to your needs.",
      image: "src/images/WhatsApp Image 2025-03-31 at 17.00.13_fbd6c1f3.jpg",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">Our Projects</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-description">{project.description}</p>
              <button className="get-quote-button">Get Quote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;