import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Resume Mitra</div>
      <ul className="navbar-links">
        <li><a href="#">Resume Templates</a></li>
        <li><a href="#">Cover Letter</a></li>
        <li><a href="#">Career</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className="navbar-auth">
        <a href="#" className="login">Log In</a>
        <a href="#" className="signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
