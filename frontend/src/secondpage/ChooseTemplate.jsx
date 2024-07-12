// src/components/ChooseTemplate.js
import React from 'react';

const ChooseTemplate = () => {
  return (
    <div className="step-detail">
      <h2>01. Choose your template.</h2>
      <p>Some description about choosing a template.</p>
      <div className="templates">
        {/* Add your template images here */}
        <img src="template1.png" alt="Template 1" />
        <img src="template2.png" alt="Template 2" />
      </div>
      <button className="cta-button">Build Your Resume</button>
    </div>
  );
};

export default ChooseTemplate;
