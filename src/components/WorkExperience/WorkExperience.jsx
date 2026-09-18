import React from "react";
import styles from "./WorkExperience.module.css";
import web from "../../assets/web.png"
const experiences = [
  {
    number: "01",
    period: "Nov 2025 — Present",
    role: "Associate Software Engineer",
    company: "CrossML Pvt. Ltd.",
    description:
      "Working on frontend development for enterprise applications, building responsive interfaces and reusable components using React.js, Next.js and TypeScript. Integrated REST APIs, implemented complex UI workflows, and collaborated with backend and product teams to deliver production features.",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "REST APIs",
      "Jira",
      "Azure",
    ],
  },
  {
    number: "02",
    period: "Dec 2024 — Feb 2025",
    role: "Software Development Engineer",
    company: "COOX",
    description:
      "Developed and maintained web and mobile applications using React.js and React Native. Implemented responsive UI components, integrated APIs, worked with Redux for state management, and contributed to improving application performance and user experience.",
    technologies: [
      "React.js",
      "React Native",
      "Expo",
      "Redux",
      "REST APIs",
      "JavaScript",
    ],
  },
];

const WorkExperience = () => {
  return (
    <>
     <div className={styles.projectHeader}>
              <img src={web} className={styles.img} />
              <div className={styles.text}>
                <h1 className={styles.h1}>Work Experience</h1>
              </div>
            </div>
    <section className={styles.experienceSection}>
      <div className={styles.timeline}>
        {experiences.map((experience) => (
          <div className={styles.experienceItem} key={experience.number}>
            <div className={styles.timelineLeft}>
              <span className={styles.number}>{experience.number}</span>
              <span className={styles.period}>{experience.period}</span>
            </div>

            <div className={styles.timelineLine}>
              <span className={styles.dot}></span>
            </div>

            <div className={styles.experienceContent}>
              <div className={styles.roleHeader}>
                <div>
                  <p className={styles.role}>{experience.role}</p>
                  <h3 className={styles.company}>{experience.company}</h3>
                </div>

                <span className={styles.arrow}>↗</span>
              </div>

              <p className={styles.description}>
                {experience.description}
              </p>

              <div className={styles.technologies}>
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className={styles.technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default WorkExperience;