// components/ResponsiveImage.js

import React from 'react';
import styles from './Header.module.css';
import CourseBox from '../coursebox/CourseBox';

const Header = ({instructorName,courseTitle}) => {
  return (
    
    <div className={styles.imageContainer}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH2qogRgQYyi9yej9oMjLGm1RKDKn9tRVfZ67m0zCowAzXL4c5"
        alt="Your Image Alt Text"
        className={styles.responsiveImage}
      />
      
      
      <div className={styles.overlay}>
        <h3>{instructorName}</h3>
        <p>{courseTitle}</p>
      </div>

      <CourseBox/>
      
    </div>
    
  );
};

export default Header;
