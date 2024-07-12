import React, { useState } from 'react';
// import Step from './Step';
import ChooseTemplate from './ChooseTemplate.jsx';
import EnterInformation from './EnterInformation';
import SelectContent from './SelectContent';
import FinalizeDetails from './FinalizeDetails';
import './Secondpage.css';

const Secondpage = () => {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    { number: "01", title: "Choose your template.", component: <ChooseTemplate /> },
    { number: "02", title: "Enter your information.", component: <EnterInformation /> },
    { number: "03", title: "Select your content.", component: <SelectContent /> },
    { number: "04", title: "Finalize the details.", component: <FinalizeDetails /> },
  ];

  return (
    <div className="how-it-works">
      <h1>How our resume builder works</h1>
      <p>Qui earum placeat vel odit ipsa et deleniti expedita? Non porro rerum non fugiat deleniti et dicta autem id quam voluptatem et Quis eius. At vero distinctio ut sapiente explicabo.</p>
      <div className="step-tabs">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`step-tab ${activeStep === index ? 'active' : ''}`}
            onClick={() => setActiveStep(index)}
          >
            {step.number} {step.title}
          </button>
        ))}
      </div>
      <div className="step-content">
        {steps[activeStep].component}
      </div>
    </div>
  );
};

export default Secondpage;
