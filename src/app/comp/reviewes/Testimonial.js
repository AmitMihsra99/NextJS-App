// TestimonialCarousel.js
"use client";
import React, { useRef, useEffect } from 'react';
import styles from './Testimonial.module.css'; // Import the CSS file

const Testimonial = ({ testimonialData }) => {
  const carouselRef = useRef();

  let currentIndex = 0;

  const updateCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateCarousel();
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonialData.length - 1) {
      currentIndex += 1;
      updateCarousel();
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup or remove any event listeners if needed
    };
  }, [testimonialData]);

  return (
    <div className={styles['testimonial-carousel']}>
      <div className={styles['carousel-container']}>
        <button className={styles['carousel-button']} onClick={handlePrev}>&lt;</button>
        <div className={styles.carousel} ref={carouselRef}>
          {testimonialData && testimonialData.map((item, index) => (
            <div key={index}>
              {/* <img src={item.img} alt="Reviewer" /> */}
              <p>{item.text}</p>
              <p>{item.reviewer_name}</p>
              <p>{item.reviewer_designation}</p>
            </div>
          ))}
        </div>
        <button className={styles['carousel-button']} onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Testimonial;
