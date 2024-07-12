
import React from 'react';
import './Step.css';

const Step = ({ number, title, description, image }) => {
  return (
    <div className="step">
      <div className="step-content">
        <h2>{number}. {title}</h2>
        <p>{description}</p>
        {image && <img src={image} alt={title} className="step-image" />}
      </div>
    </div>
  );
};

export default Step;
