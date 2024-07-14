// src/components/SliderSection.jsx
import React from 'react';
import Slider from 'react-slick';
import ResumeSlide from './ResumeSlide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderSection.css';

const Fourthpage = () => {
  const slides = [
    {
      imageUrl: 'https://via.placeholder.com/300x400.png?text=Resume+1',
      title: 'Education',
      description: '570,000+ users chose this template',
    },
    {
      imageUrl: 'https://via.placeholder.com/300x400.png?text=Resume+2',
      title: 'Skill',
      description: '570,000+ users chose this template',
    },
    {
      imageUrl: 'https://via.placeholder.com/300x400.png?text=Resume+3',
      title: 'Experience',
      description: '570,000+ users chose this template',
    },
    {
      imageUrl: 'https://via.placeholder.com/300x400.png?text=Resume+4',
      title: 'Project',
      description: '570,000+ users chose this template',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h1>Every detail on your resume, built to perfection</h1>
        <p>Lorem ipsum dolor sit amet. Ad tempora quas nam perferendis reprehenderit sed accusamus maiores qui unde deleniti? Eum alias placeat sed beatae eius.</p>
      </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <ResumeSlide
            key={index}
            imageUrl={slide.imageUrl}
            title={slide.title}
            description={slide.description}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Fourthpage;
