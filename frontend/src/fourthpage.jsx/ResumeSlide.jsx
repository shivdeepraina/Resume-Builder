import React from 'react';

const ResumeSlide = ({ imageUrl, title, description }) => {
  return (
    <div className="resume-slide">
      <img src={imageUrl} alt={title} className="resume-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ResumeSlide;
