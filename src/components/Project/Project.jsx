import styles from "../Project/Project.module.css";
import React from 'react'
import Card from "../Card/Card"
import web from "../../assets/web.png"
import spiderman from "../../assets/spiderman.png"
import CarouselComponent from "../Carousel/Carousel";

const Project = () => {
  return (
    <div className={styles.container}>
      
        <img src={web} className={styles.img}/>
        <div className={styles.text}>
        <h1 className={styles.h1}>My Projects</h1>
       
        </div>
        <div className={styles.sample}>
          <CarouselComponent/>
        </div>
        

    </div>
  )
}

export default Project