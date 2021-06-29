import React from 'react';
import SearchSection from '../../components/SearchSection/SearchSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import PathwaysSection from '../../components/PathwaysSection/PathwaysSection';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <SearchSection/>
            <TeamSection />
            <PathwaysSection/>
        </div>
    );
}

export default Home;