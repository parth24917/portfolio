import React from 'react'
import styles from "../About/About.module.css"
import miguel from "../../assets/neon.png"



const About = () => {
  return (
    <section>
      <div className={styles.outer} id='about'>
        <div className={styles.topBlur}>
          
        </div>

      <div className={styles.container}>
      <h1 className={styles.heading}>A Bit</h1> 
        <h1 className={styles.red}>About me</h1> 
        <p className={styles.description}>Hey, I’m Parth! I’m a software developer with a passion for building
           responsive, secure web applications using the MERN stack—MongoDB, Express.js, React, and Node.js—as well 
           as writing clean, efficient code in C++. I love solving complex problems and turning ideas into reality 
           through code. Always eager to grow and collaborate, I’m constantly honing my skills and looking for new 
           opportunities to learn. Let’s connect and create something awesome together!</p>
      </div>
      
      <div className={styles.imgz}>
      <img src={miguel} className={styles.image}></img>

      </div>
     
      </div>
      
        
    </section>
  )
}

export default About