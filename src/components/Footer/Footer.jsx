import React from 'react'
import styles from "../Footer/Footer.module.css"
import spider from "../../assets/rect.png"
import ContactForm from '../Form/Form'
import web from "../../assets/web.png"
import mask from "../../assets/mask.png"
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
function Footer() {
  return (
    <div className={styles.container} id='footer'>
      
      <img src={web} className={styles.web}></img>
      
      <ContactForm className={styles.form}></ContactForm>
      <img src = {mask} className={styles.mask}></img>
        <div  className={styles.img}>
          <img src={spider} className={styles.nimg}></img>
        </div>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.p}>Get in touch</p>
        <div className={styles.socialIcons}>
 <a href="https://wa.me/+917838501035" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={styles.icon} />
        </a>
        <a href="http://github.com/parth24917" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href="http://linkedin.com/in/parth-kr" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${parthk240203@gmail.com}" target="_blank" rel="noopener noreferrer">
          <IoIosMail className={styles.icon} />
          </a>
</div>
       
    
    </div>
  )
}

export default Footer
