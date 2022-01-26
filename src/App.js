import React, {useState} from 'react';
import Page from './pages/Page';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Quiz from './pages/Quiz/Quiz';
import Pathway from './pages/Pathway/Pathway';
import defaultQuizContext from './pages/Quiz/default-quiz-context';
import QuizContext from './pages/Quiz/quiz-context';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  const [quizResults, setQuizResults] = useState(defaultQuizContext.data);

  return (
    <QuizContext.Provider value={{quizResults}}>
      <Router>
        <Routes>
          <Route path="/" element={
            <Page content={<Home />} />
          } />
          <Route path="/results/:userText" element={
            <Page content={<Results />} />
          } />
          <Route path="/quiz" element={
            <Page content={<Quiz setQuizResults={setQuizResults}/>} />
          } />
          <Route path="/pathway" element={
            <Page content={<Pathway />} />
          } />
        </Routes>
      </Router>
    </QuizContext.Provider>
  );
}

export default App;
