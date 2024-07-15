import React from 'react';
import FeatureBox from './FeatureBox';
import './Seventhpage.css';
import icon1 from '../assets/seventhpageicon/icon1.png';
import icon2 from '../assets/seventhpageicon/icon1.png';
import icon3 from '../assets/seventhpageicon/icon1.png';
import icon4 from '../assets/seventhpageicon/icon1.png';
import icon5 from '../assets/seventhpageicon/icon1.png';
import icon6 from '../assets/seventhpageicon/icon1.png';

const Seventhpage = () => {
  const features = [
    {
      icon: icon1,
      title: 'Easy online resume builder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: icon2,
      title: '20+ Best Resume Templates',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: icon3,
      title: 'Resume Check',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: icon4,
      title: 'Follow Tips From Experts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: icon5,
      title: 'It’s Fast and Easy to Use',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: icon6,
      title: 'Flexible Text Editor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    }
  ];

  return (
    <div className="main-page">
      <div className="content">
        <h1>Features designed to help you win your dream job</h1>
        <p>
          Lorem ipsum dolor sit amet. Sit voluptatibus sint et ratione aliquid sit reiciendis consequatur sed recusandae minus et suscipit 
          perferendis ut nobis autem. Sed consequuntur fugit et laborum optio est neque perferendis
        </p>
        <div className="features-container">
          {features.map((feature, index) => (
            <FeatureBox key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
        <button className="resume-builder-button">TRY OUR RESUME BUILDER</button>
      </div>
    </div>
  );
};

export default Seventhpage;
