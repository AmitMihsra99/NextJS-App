"use client";

import Header from './comp/header/Header'
import jsonData from './comp/json/data.json';
import Navbar from './comp/navbar/Navbar';
import About from './comp/about/About';
import Instructor from './comp/instructor/Instructor';
import Testimonial from './comp/reviewes/Testimonial';
import Test from './comp/reviewes/Test';

// home function
export default function Home() {
 
  const {instructor,course}=jsonData;
   const {name:instructorName}=instructor;
   const {title:courseTitle}=course;

  return (
    <div>
    
        <Header instructorName={instructorName} courseTitle={courseTitle}/>
        <Navbar/>
        <About/>
        <Instructor/>
        <Test testimonialData={jsonData.testimonial}/>
    </div>
  )
}