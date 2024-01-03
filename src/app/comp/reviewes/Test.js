// Testimonial.js
import React, { useState } from 'react';
import styles from './Testimonial.module.css'; // Import the CSS file
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Test = ({ testimonialData }) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? testimonialData.length - 1 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === testimonialData.length - 1 ? 0 : (prev) => prev + 1);
    };

    return (
        <div  id="reviews" className={styles.slider}>
            <div className={styles.container} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {testimonialData && testimonialData.map((item, index) => (
                    <div key={index} className={styles.data}>
                        {/* <img src={item.img} alt="Reviewer" /> */}
                        <p  className={styles.text}>{item.text}</p><br></br>
                        <img src= {item.img}/>
                        <h5>{item.reviewer_name}</h5>
                        <h5>{item.reviewer_designation}</h5>
                    </div>
                ))}
            </div>

            <div className={styles.icons}>
                <div className={styles.icon} onClick={prevSlide}>
                    <FaAngleLeft size={50} />
                </div>
                <div className={styles.icon} onClick={nextSlide}>
                    <FaAngleRight size={50} />
                </div>
            </div>
        </div>
    );
}

export default Test;
