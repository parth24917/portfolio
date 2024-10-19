import React from 'react'
import styles from "./navbar.module.css"
import About from "../About/About"




const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
        <div className={styles.menu}> 
            <ul className={styles.menuItems}>
                <li><a href="#about">ABOUT ME</a></li>
                <li><a href="/">PORTFOLIO</a></li>
                <li><a href="#footer">CONTACT ME</a></li>
                
            </ul>
        </div>
        
      
    </nav>
  )
}

export default Navbar




