import React from 'react';
import Page from './pages/Page';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Quiz from './pages/Quiz/Quiz';
import Pathway from './pages/Pathway/Pathway';
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
        <Route path="/" element={
          <Page content={<Home />} />
        } />
        <Route path="/results/:userText" element={
          <Page content={<Results />} />
        } />
        <Route path="/quiz" element={
          <Page content={<Quiz />} />
        } />
        <Route path="/pathway" element={
          <Page content={<Pathway />} />
        } />
      </Routes>
    </Router>
  );
}

export default App;
