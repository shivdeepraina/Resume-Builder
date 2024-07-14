import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Zidio</span>dev</h1>
          <p>
            Ut saepe odio qui galisum excepturi id maiores minus rem dolores obcaecati qui accusamus optio id laborum odit.
          </p>
          <div className="socials">
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Job Seekers</h2>
          <div className="underline"></div>
          <ul>
            <li><a href="#">Create a Resume</a></li>
            <li><a href="#">Resume Examples</a></li>
            <li><a href="#">Resume Templates</a></li>
            <li><a href="#">Cover Letter Templates</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h2>Career Resources</h2>
          <div className="underline"></div>
          <ul>
            <li><a href="#">Resume Help</a></li>
            <li><a href="#">Job Interview</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Cover Letter</a></li>
            <li><a href="#">Product Updates</a></li>
            <li><a href="#">Sponsorship Program</a></li>
            <li><a href="#">Media Kit</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h2>Our Company</h2>
          <div className="underline"></div>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h2>Subscribe Our Newsletter</h2>
          <div className="underline"></div>
          <p>Subscribe to our newsletter and drive into the enjoy universe!</p>
          <form>
            <input type="email" name="email" className="text-input" placeholder="Email address..."/>
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; Copyright 2024 - Zidio dev. All Rights Reserved.
        <div className="footer-terms">
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;