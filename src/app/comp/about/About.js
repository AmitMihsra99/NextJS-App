// AboutSection.js

import React from "react";
import styles from "./About.module.css";
import courseData from "../json/data.json";
import ReactHtmlParser from "react-html-parser";

const listStyle={
   listStyle:'none',
   padding:'10px',
   border:'1px solid #ccc',
   borderRadius:'5px',
}
const listItemStyle={
   marginBottom:'10',
}

const About = () => {
  const whatToExpectContent = courseData.course.what_to_expect.html_content;
  const keytopies = courseData.course.key_topics.html_content;
  const about= courseData.course.about.html_content;
  return (
    <div id="about" className={styles.aboutsection}>
      <div className={styles.aboutcontent}>
        <h1>About the Course</h1>
        <p dangerouslySetInnerHTML={{ __html: about  }} style={{ padding: 0 }}>
        </p>
        <p dangerouslySetInnerHTML={{ __html: about  }} style={{ padding: 0 }}>
        </p>
        <p dangerouslySetInnerHTML={{ __html: about  }} style={{ padding: 0 }}>
        </p>
      </div>
     
     { /*dangerouslySetInnerHTML={{ __html: whatToExpectContent }}*/}

      <div className={`${styles.section} ${styles["what-to-expect-content"]}`}>
        <h2>What to expect from the course</h2>
        
        <ul className={`${styles.customlisttik}`}>
         <li className={`${styles.customlistitem}`}>Learn to manage your relationships</li>
         <li className={`${styles.customlistitem}`}>Better communication</li>
         <li className={`${styles.customlistitem}`}>Time management</li>
        <li className={`${styles.customlistitem}`}>Forgiveness</li>
        </ul>
        
      </div>




      <div className={styles.keySction}>
        <h2>Key topics covered</h2>
        <p dangerouslySetInnerHTML={{ __html: about  }} style={{ padding: 0 }}>
        </p>
        <div className={`${styles.section} ${styles["Kye-topies"]}`}>
          {/*<ol dangerouslySetInnerHTML={{ __html: keytopies  }} style={{ padding: 0 }}>
  </ol>*/}

        <ul className={`${styles.customlisttik}`}>
        <li className={`${styles.customlistitem}`}><span className={styles.keypoint} >10 written and audio sessions</span> guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</li>
        <li className={`${styles.customlistitem}`}><span className={styles.keypoint}>Intuitive exercises and homework</span> walk you through the energies and values of numbers and number sequences so you can become your own authority.</li>
        <li className={`${styles.customlistitem}`}><span className={styles.keypoint}>Handy reference</span> to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</li>
       <li className={`${styles.customlistitem}`}><span className={styles.keypoint}>Expert techniques</span> for manifestation offer simple ways to use numbers to co-create with the universe.</li>
       </ul>
           
        </div>
       
      </div>
    </div>
  );
};

export default About;
