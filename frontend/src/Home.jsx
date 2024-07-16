import React from 'react';
import './app.css';
import Navbar from './navbar/Navbar';
import FirstPage from './firstpage/Firstpage';
import Secondpage from './secondpage/Secondpage';
import Footer from './footer/footer';
import ThirdPage from './thirdpage/Thirdpage';
import Fourthpage from './fourthpage.jsx/Fourthpage';
import Fifthpage from './fifthpage/Fifthpage';
import Sixthpage from './sixthpage/Sixthpage';
import Seventhpage from './seventhpage/Seventhpage';
import Eightthpage from './eightthpage/Eightthpage';
import Ninthpage from './ninthpage/Ninthpage';

const Home = () => {
    return (
        <div className="App">
        <Navbar />
        <FirstPage />
        <Secondpage/>
        <ThirdPage/>
        <Fourthpage/>
        <Fifthpage/>
        <Sixthpage/>
        <Seventhpage/>
        <Eightthpage/>
        <Ninthpage/>
        <Footer />
      </div>
    );
}

export default Home;
