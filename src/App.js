import React from 'react';
import Page from './pages/Page';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Quiz from './pages/Quiz/Quiz';
import Pathway from './pages/Pathway/Pathway';
import { QuizProvider } from './pages/Quiz/QuizContext';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Archive from './pages/Archive/Archive';


const App = () => {
  return (
    <QuizProvider>
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
          <Route path="/archive" element={
            <Page content={<Archive />} />
          } />
        </Routes>
      </Router>
    </QuizProvider>
  );
}

export default App;
