import React, { useState } from "react";
import styles from "./ProjectStack.module.css";

import tour from "../../assets/tourism.png"
import sport from "../../assets/sport.png";
import shop from "../../assets/shop.png";
import newr from "../../assets/new.png";
import movie from "../../assets/movie.png";
import prepwise from "../../assets/prepwise.png"
import Button from "../Button/Button";
const projects = [
  {
    image: prepwise,
    number: "01",
    heading: "Prepwise",
    description:
      "Built a Next.js AI interview platform with mock interview workflows, AI chat, Firebase authentication, Firestore synchronization, and Vapi/Gemini integration for voice-based simulations and real-time AI feedback.",
    technologies: ["Nextjs", "Firebase", "VapiAI", "GeminiAI"],
    demoLink: "https://perpwize.vercel.app/",
    sourceLink: "https://github.com/parth24917/travel-react",
  },
  {
    image: tour,
    number: "02",
    heading: "TRVL",
    description:
      "Developed a full-stack MERN tourism website for browsing travel packages and submitting inquiries stored in MongoDB. Built a responsive React frontend with Node.js/Express backend and integrated a TravBud AI agent using Vapi and Gemini AI to generate personalized travel itineraries.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    demoLink: "https://travel-react-alpha.vercel.app/",
    sourceLink: "https://github.com/parth24917/travel-react",
  },

  {
    image: movie,
    number: "03",
    heading: "Movie Browser",
    description:
      "Built a responsive Movie Browser application using ReactJS with dynamic data from a third-party API, custom hooks for managing favorites, real-time search, and interactive movie detail pages.",
    technologies: ["React", "React Router", "REST API", "JavaScript"],
    demoLink: "https://movie-browser-alpha.vercel.app/",
    sourceLink: "https://github.com/parth24917/movie-browser",
  },

];

const ProjectStack = () => {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectContainer}>
        {/* LEFT PROJECT LIST */}
        <div className={styles.projectList}>
          {projects.map((item, index) => (
            <button
              key={item.number}
              className={`${styles.projectItem} ${activeProject === index ? styles.active : ""
                }`}
              onClick={() => setActiveProject(index)}
            >
              <span className={styles.projectNumber}>{item.number}</span>

              <span className={styles.projectName}>{item.heading}</span>

              <span className={styles.arrow}>
                {activeProject === index ? "↗" : "→"}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT PROJECT PREVIEW */}
        <div className={styles.preview}>
          <div className={styles.projectInfo}>
            <div className={styles.projectTitleRow}>
              <h3>{project.heading}</h3>

              <span className={styles.projectIndex}>
                {project.number} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.technologies}>
              {project.technologies.map((technology) => (
                <span key={technology} className={styles.technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className={styles.projectButtons}>
              <Button
                title="Live Demo ↗"
                type="red"
                onClick={() => window.open(project.demoLink, "_blank")}
              />

              <Button
                title="View Source "
                type="blue"
                onClick={() => window.open(project.sourceLink, "_blank")}
              />
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img
              key={project.image}
              src={project.image}
              alt={project.heading}
              className={styles.projectImage}
            />
          </div>


        </div>
      </div>
    </section>
  );
};

export default ProjectStack;