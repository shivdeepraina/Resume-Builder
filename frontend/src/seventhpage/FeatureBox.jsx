import React from 'react';
import './Seventhpage.css';

const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="feature-box">
      <div className="feature-icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureBox;
