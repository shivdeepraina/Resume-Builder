import React from 'react';
import Navbar from './navbar/Navbar';
import FirstPage from './firstpage/Firstpage';
import Secondpage from './secondpage/Secondpage';
import Footer from './footer/footer';
import './app.css';
import ThirdPage from './thirdpage/Thirdpage';
import Fourthpage from './fourthpage.jsx/Fourthpage';
import Fifthpage from './fifthpage/Fifthpage';
import Sixthpage from './sixthpage/Sixthpage';
import Seventhpage from './seventhpage/Seventhpage';


function App() {
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
      <Footer />

    </div>
  );
}

export default App;

