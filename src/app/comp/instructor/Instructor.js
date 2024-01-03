// components/ResponsiveContainer.js

import React from 'react';
import styles from './Instructor.module.css';
import courseData from "../json/data.json";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Instructor = () => {
    const instrut = courseData.about_instructor.html_content;  
 
  return (
    <div id='instructor' className={styles.container}>
       
        
      <div className={styles.section}>
         <h1>About the Instructor</h1>
        <img src="https://pbs.twimg.com/profile_images/1650049387224080384/WAVo3FHK_400x400.jpg" className={styles.circleImage} />
        <p dangerouslySetInnerHTML={{ __html: instrut }} />
      </div>
      <div className={styles.section}>
      <p dangerouslySetInnerHTML={{ __html: instrut }} />
         
        </div>

        <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
    </footer>
      
    </div>
  );
};

export default Instructor;
