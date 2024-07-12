import React from 'react';
import Navbar from './navbar/Navbar';
import FirstPage from './firstpage/Firstpage';
import Secondpage from './secondpage/Secondpage';
import './app.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstPage />
      <Secondpage/>
    </div>
  );
}

export default App;

