import React from 'react';
import './ContactUs.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';
import Ninthpage from '../ninthpage/Ninthpage';

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div className='contact-main'>
        <h1>Contact Us</h1>
      </div>
    <div className="contact-us">
      <div className="contact-details">
        <h2>Contact us</h2>
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <p>Phone</p>
              <p>(123) 987-6543</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p>Address</p>
              <p>123, Lorem Ipsum Street, Ipsum City</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <p>Email</p>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="get-in-touch">
        <h2>Get in Touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <textarea placeholder="Message"></textarea>
          <button type="submit">SEND A MESSAGE</button>
        </form>
      </div>
    </div>
    <Ninthpage/>
    <Footer/>
    </>
  );
};

export default ContactUs;
