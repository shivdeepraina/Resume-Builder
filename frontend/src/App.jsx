import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './contactus/ContactUs';
import Home from './Home';
import LoginPage from './login/LoginPage'
import SignupPage from './signup/SignupPage';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} exact></Route>
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </BrowserRouter>
      
 
  );
}

export default App;

