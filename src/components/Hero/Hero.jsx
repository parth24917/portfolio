import React from "react";
import styles from "./Hero.module.css";

import web from "../../assets/web.png";
import spider from "../../assets/spider.png";
import miguel from "../../assets/neon.png";
import cv from "../../assets/cv.pdf"
import Button from "../Button/Button";


const handleProjects = () => {
  document.getElementById("projects")?.scrollIntoView({
    behavior: "smooth",
  });
};

const handleCV = () => {
  window.open(cv, "_blank");
};
const Hero = () => {
  return (
    <>
      {/* Background Images */}
      <img src={web} className={styles.leftImage} alt="" />
      <img src={spider} className={styles.rightImage} alt="" />

      {/* HERO */}
      <section id="hero" className={styles.hero}>
        <div className={styles.above}>
          <p className={styles.text}>Hi, I am</p>

          <p className={styles.title}>Parth Kumar</p>

          <p className={styles.para}>
            Problem Solver | Software Engineer | Innovator
          </p>
          <div className={styles.buttons}>
            <Button
              title="View Projects"
              type="blue"
              onClick={handleProjects}
            />

            <Button
              title="Download CV"
              type="red"
              onClick={handleCV}
            />
        </div>
      </div>
      <div className={styles.outer} id="about">
        <div className={styles.topBlur}></div>

        <div className={styles.container}>
          <h1 className={styles.heading}>A Bit</h1>

          <h1 className={styles.red}>About me</h1>

          <p className={styles.description}>
            Hey, I’m Parth! I’m a software engineer with 1+ year of experience building responsive, scalable web applications using React, Next.js, TypeScript, and the MERN stack. I enjoy solving real-world problems, building clean and reusable components, and turning ideas into functional products. Always eager to grow and explore new technologies, I’m constantly improving my skills and looking for opportunities to learn, collaborate, and build something awesome together!

          </p>
        </div>

        <div className={styles.imgz}>
          <img src={miguel} className={styles.image} alt="" />
        </div>
      </div>
    </section >

  
    </>
  );
};

export default Hero;