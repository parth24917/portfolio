import React from "react";
import styles from "./Skills.module.css";
import web from "../../assets/web.png"
const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "React Native",
    ],
  },
  {
    number: "02",
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "JWT",
      "Python",
    ],
  },
  {
    number: "03",
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Azure",
      "Figma",
      "Postman",
    ],
  },
  {
    number: "04",
    title: "Core Knowledge",
    skills: [
      "Data Structures",
      "OOPS",
      "DBMS",
      "API Integration",
      "Responsive Design",
      "UI/UX",
      "Problem Solving",
      "C++"
    ],
  },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.projectHeader}>
        <img src={web} className={styles.img} />
        <div className={styles.text}>
          <h1 className={styles.h1}>My Skills</h1>
        </div>
      </div>

      <div className={styles.skillsContainer}>
        {skillGroups.map((group) => (
          <div className={styles.skillGroup} key={group.number}>
            <div className={styles.groupHeader}>
              <span className={styles.groupNumber}>{group.number}</span>

              <h3 className={styles.groupTitle}>
                {group.title}
              </h3>
            </div>

            <div className={styles.skillList}>
              {group.skills.map((skill) => (
                <div className={styles.skill} key={skill}>
                  <span>{skill}</span>
                  <span className={styles.arrow}>↗</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;