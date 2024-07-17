import React, { useState } from 'react';
import './FAQItem.css'; // Import the CSS file

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        <h3>{question}</h3>
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;

