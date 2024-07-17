import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Resume Mitra</div>
      <ul className="navbar-links">
        {/* <li><Link to="/resume-templates">Resume Templates</Link></li> */}
        {/* <li><Link to="/cover-letter">Cover Letter</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/blog">Blog</Link></li> */}
        {/* <li><Link to="/about-us">About Us</Link></li> */}
        {/* <li><Link to="/faq">FAQ</Link></li> */}
        <li><Link  to="/contactus">Contact Us</Link></li>
      </ul>
      <div className="navbar-auth">
      <Link to="/login" className='a login'>Log In</Link>
      <Link to="/signup" className='a signup'>Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
