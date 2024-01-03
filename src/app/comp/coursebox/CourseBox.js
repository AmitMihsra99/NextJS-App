"use client";

import Popup from './Popup';
import React, { useState } from 'react';

import styles from './CourseBox.module.css';

const CourseBox = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className={styles.course}>
      <h3 className={styles.h3}>Course Fees</h3>
      <h2 className={styles.h2}>₹ 5,000</h2>
      <div className={styles.included}>
        <p className={styles.smallhead}>What's included:<br></br></p>
        </div>
        <div className={styles.icons}>
         <h5 >▶ 5 on-demand videos</h5>
         <h5>▶ 2 Evestream sessions</h5>
         <h5 >🗨️ Live DSA sessions with Nityanand Charan Das</h5>
          <h5>🗨️ An active whatsapp community</h5>  
      
        </div>
      
      <button onClick={openPopup} className={styles.btn}>Register today</button>
      {popupVisible && <Popup onClose={closePopup} />}
      </div>
  );
};

export default CourseBox;