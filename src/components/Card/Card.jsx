import React from 'react';
import styles from "../../components/Card/Card.module.css"

const Card = ({ image, heading, description, 
  demoLink, sourceLink, showImage,
  titleFont,
  descriptionFont,
  demoBtText, 
  sourceBtText,
  height,
  width,
  }) => {
  return (
   
  <div className={styles.card} style={{ height, width }}>
      {showImage && image && <img src={image} alt={heading} />}
      <h2 className={styles.cardheading} style={{ fontFamily: titleFont} }>{heading}</h2>
      <p className={styles.cardtext} style={{ fontFamily: descriptionFont }}>{description}</p>
      <div className={styles.cardbuttons}>
        <button className={styles.cardbutton}><a href={demoLink} target="_blank" rel="noopener noreferrer" 
        className={styles.text}>{demoBtText}</a></button>
        <button className={styles.cardbutton}><a href={sourceLink} target="_blank" rel="noopener noreferrer" 
        className={styles.text}>{sourceBtText}</a></button>
      </div>
    </div>
    
  
  );
};

export default Card;