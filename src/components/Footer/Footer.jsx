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
  <FaWhatsapp className={styles.icon} />
  <FaGithub className={styles.icon} />
  <FaLinkedin className={styles.icon} />
  <IoIosMail className={styles.icon} />
</div>
       
    
    </div>
  )
}

export default Footer