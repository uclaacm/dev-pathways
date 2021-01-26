import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchSection from './components/SearchSection/SearchSection';
import TeamSection from './components/TeamSection/TeamSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <SearchSection/>
      <TeamSection/>
    </div>
  );
}

export default App;
