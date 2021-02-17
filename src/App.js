import React from 'react';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/results/:userText" element={<Results/>}/>
      </Routes>

    </Router>
  );
}

export default App;
