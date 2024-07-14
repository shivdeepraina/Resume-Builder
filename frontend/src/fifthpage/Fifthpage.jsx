
import React from 'react';
import './Fifthpage.css';

const jobTitles = [
  'Accountant', 'Security Guard', 'Mechanical Engineer', 'JAVA Developer', 'Designer',
  'Recruiter', 'Product Manager', 'Dentist', 'Digital Marketing', 'Sales Associate',
  'Management', 'Physician Assistant', 'Front End Developer', 'Nursing', 'Civil Engineer',
  'Office Assistant', 'Photographer', 'Finance'
];

const Fifthpage = () => {
  return (
    <div className="fifthpage">
      <header className="fifthpage-header">
        <h1>Get inspired by resume samples from professional resume experts</h1>
        <p>Search by job title to find resumes from resume experts that can inspire your own resume creation.</p>
      </header>
      <div className="job-titles">
        {jobTitles.map((title, index) => (
          <button key={index} className="job-title-button">{title}</button>
        ))}
      </div>
      <button className="explore-button">Explore All Samples</button>
    </div>
  );
};

export default Fifthpage;
