import { useState } from 'react';
import './App.css';
import Nevbar  from './Components/Nevbar';
import TextForm from './Components/TextForm';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/About';

function App() {

  const [mode,setMode] = useState('#D4FCFF');

  const toggleModelight = ()=>{
      setMode('#D4FCFF');
      document.body.style.backgroundColor = 'white'
  }
  const toggleModeRed = ()=>{
      setMode('#F42525');
      document.body.style.backgroundColor = '#FF6161'
  }
  const toggleModeGreen = ()=>{
    setMode('#02C629');
    document.body.style.backgroundColor = '#35FF50'
  }
  const toggleModePink = ()=>{
    setMode('#FE27D3');
    document.body.style.backgroundColor = '#FF94EA'
  }
  const toggleModeDark = ()=>{
      setMode('#646565');
      document.body.style.backgroundColor = '#286165'
  }


  return (
    <>
    <Router>
      <Nevbar title="TextUtils" mode={mode} toggleModelight={toggleModelight} toggleModeDark={toggleModeDark} toggleModeRed={toggleModeRed} toggleModeGreen={toggleModeGreen} toggleModePink={toggleModePink}/>
      <div className="container my-3">
         <Routes>
         </Routes>
         <Routes>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode}/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
