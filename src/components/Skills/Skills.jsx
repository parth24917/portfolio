import React, { useState, useEffect } from 'react';
import styles from "../Skills/Skills.module.css";
import css from "../../assets/css.png"
import html from "../../assets/html.png"
import js from "../../assets/js.png"
import mysql from "../../assets/mysql.png"
import react from "../../assets/react.png"
import c from "../../assets/c.svg"
import ex from "../../assets/ex.png"
import mongo from "../../assets/mongodb.png"
import node from "../../assets/node.png"
import powershell from "../../assets/powershell.png"
import linux from "../../assets/linux.png"
const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>My Skills</h1>
      <div className={styles.logos}>
        <div className={styles.logosslide}>
          <img src={css}/>
          <img src={html}/>
          <img src={js}/>
          <img src={mysql}/>
          <img src={react}/>
          <img src={c}/>
          <img src={ex}/>
          <img src={mongo}/>
          <img src={node}/>
          <img src={powershell}/>
          <img src={linux}/>


        </div>
        <div className={styles.logosslide}>
          <img src={css}/>
          <img src={html}/>
          <img src={js}/>
          <img src={mysql}/>
          <img src={react}/>
          <img src={c}/>
          <img src={ex}/>
          <img src={mongo}/>
          <img src={node}/>
          <img src={powershell}/>
          <img src={linux}/>


        </div>

      </div>
      
        </div>
      
    
  );
};

export default Skills;