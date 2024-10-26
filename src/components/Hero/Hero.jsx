import React from 'react'
import styles from "../Hero/Hero.module.css"
import spider from "../../assets/tom.png"
import Card from "../Card/Card"
const myEmail = 'parthk240203@gmail.com'
const cardData = [
  {
    
    heading: 'Parth Kumar',
    description: 'Your friendly neighbourhood Full stack web developer',
    demoLink: 'https://drive.google.com/file/d/16ErmcQgGv_ipjyaYW3SgJbQBK9HvY8Ub/view?usp=sharing',
    sourceLink: `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${myEmail}`,

    showImage: true,
  },
  
  // Add more card data objects as needed
];
const Hero = () => {
  return <section id='hero'>
    {/* <div className={styles.topBlur}/>
    <div className={styles.imageContainer}>
    
      <img src={spider} className={styles.spiderImage}></img>
    </div> */}
    
    
    <div className={styles.above}>
      {/* {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          heading={card.heading}
          description={card.description}
          demoLink={card.demoLink}
          sourceLink={card.sourceLink}
          showImage={card.showImage}
          titleFont="'Panchang', sans-serif"
          descriptionFont="'Kalam', sans-serif"
          demoBtText="View CV"
          sourceBtText="Contact Me"
          height={250}
          width={500}
        />
      ))} */}
      <p className={styles.text}>Hi, I am</p>
      <p className={styles.title}>Parth Kumar</p>
      <p className={styles.para}>Problem Solver | Software Engineer | Innovator</p>
    </div>
      
        
     
      
    
  </section>
};

export default Hero