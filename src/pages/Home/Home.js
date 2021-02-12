import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SearchSection from '../../components/SearchSection/SearchSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <NavBar />
            <SearchSection />
            <TeamSection />
        </div>
    );
}

export default Home;