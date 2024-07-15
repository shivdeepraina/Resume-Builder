import React from 'react';
import './Sixthpage.css';
// import resumeImage from '#'; // Replace with the correct path to your image

const Sixthpage = () => {
  return (
    <div className="sixthpage-container">
      <div className="content">
        <h1>Professional resumes for effective job interviews</h1>
        <p>
          Qui earum placeat vel odit ipsa et deleniti expedita? Non porro rerum non fugiat deleniti et dicta
          autem id Quis eius. At vero distinctio ut sapiente explicabo.
        </p>
        <button className="resume-builder-button">TRY OUR RESUME BUILDER</button>
      </div>
      <div className="image-container">
        <img 
        // src={resumeImage} 
        alt="Resume example" />
      </div>
    </div>
  );
};

export default Sixthpage;
