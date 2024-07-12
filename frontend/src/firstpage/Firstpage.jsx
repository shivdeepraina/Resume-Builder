import React from 'react';
import './Firstpage.css';

const FirstPage = () => {
  return (
    <div className="first-page">
      <div className="first-page-content">
        <h1>Online Resume Builder: Make Yours in Minutes!</h1>
        <p>
          Qui earum placeat vel odit ipsa et deleniti expedita? Non porro rerum
          non fugiat deleniti et dicta autem id quam voluptatem et Quis eius.
          At vero distinctio ut sapiente explicabo.
        </p>
        <button className="cta-button">Try Our Resume Builder</button>
        <div className="resume-count">40,568 resumes created today</div>
      </div>
      <div className="resume-examples">
        <img src="example1.png" alt="Example Resume 1" />
        <img src="example2.png" alt="Example Resume 2" />
      </div>
    </div>
  );
};

export default FirstPage;
