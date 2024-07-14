import React from 'react';
import './Thirdpage.css';

const ThirdPage = () => {
  return (
    <div className="third-page">
      <div className="container">
        <div className="left">
          <h1>Why our resume builder works</h1>
          <p>Qui earum placeat vel odit ipsa et deleniti expedita? Non porro rerum non fugiat deleniti et dicta autem id quam voluptatem et Quis eius. At vero distinctio ut sapiente explicabo.</p>
          <button className="cta-button">TRY OUR RESUME BUILDER</button>
          <img src="illustration.png" alt="Illustration" className="illustration" />
        </div>
        <div className="right">
          <div className="feature">
            <h2>It was designed by career experts.</h2>
            <p>Lorem ipsum dolor sit amet. Vel consequat repellendus non harum provident sed quod deleniti est voluptas odit sit rerum pariatur vel.</p>
          </div>
          <div className="feature">
            <h2>It gets you past the robots.</h2>
            <p>Lorem ipsum dolor sit amet. Vel consequat repellendus non harum provident sed quod deleniti est voluptas odit sit rerum pariatur vel officia reiciendis. Est doloremque iusto qui iste deleniti qui earum perferendis aut omnis mollitia ut eligendi unde et adipisci corporis qui eius dolorem.</p>
          </div>
          <div className="feature">
            <h2>It ensures you look like a professional.</h2>
            <p>Vel consequat repellendus non harum provident sed quod deleniti est voluptas odit sit rerum pariatur vel officia reiciendis. Est doloremque iusto qui iste deleniti qui earum perferendis aut omnis mollitia ut eligendi unde et adipisci.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
