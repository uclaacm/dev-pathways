import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SearchSection from '../../components/SearchSection/SearchSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const search = text => {
        console.log(`searched for ${text}`);
        navigate(`/results/${encodeURIComponent(text)}`); 
    }
    return (
        <div className="Home">
            <NavBar />
            <SearchSection 
            searchFunction={search}/>
            <TeamSection />
        </div>
    );
}

export default Home;