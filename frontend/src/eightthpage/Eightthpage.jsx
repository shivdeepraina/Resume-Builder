// src/components/FAQPage.jsx
import React from 'react';
import FAQItem from './FAQItem';
import "./Eightthpage.css";

const Eightthpage = () => {
  const faqs = [
    { question: "How can I use Resume.io for free?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How can I customize my resume?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo impedit totam eum corrupti Quis et incidunt fuga." },
    { question: "Can I download my resume to Word or PDF?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How do I cancel, downgrade or delete my account?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];

  return (
    <div className="faq-page">
      <h2>Lorem ipsum dolor sit amet. Ad tempora quas nam</h2>
      <p>accusamus maiores qui unde deleniti? Eum alias placeat sed beatae eius.</p>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Eightthpage;
