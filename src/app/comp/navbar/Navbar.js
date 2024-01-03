// components/Navbar.js
import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
        <Link to="about" smooth={true} duration={500} className={styles.navLink}>
        ABOUT
      </Link>
        </li>
        <li className={styles.navItem}>
        <Link to="instructor" smooth={true} duration={500} className={styles.navLink}>
            ISTRUCTOR 
          </Link>
        </li>
        <Link to="reviews" smooth={true} duration={500} className={styles.navLink}>
            REVIEWS
          
        </Link>
      </ul>
    </nav>
     
    
  );
};

export default Navbar;
