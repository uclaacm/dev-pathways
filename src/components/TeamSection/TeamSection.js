import React from 'react';
import './TeamSection.css';
import '../TeamCard/TeamCard';
import teams from "../../data/teams";
import TeamCard from '../TeamCard/TeamCard';

//passing index as key is okay since list is static, would need to use a unique id if list is not static
const TeamSection = () => {
    return (
        <div className="team-container">
            <h2>Team Overviews</h2>
            <div className="cards-grid">
                {teams.map((team, index) =>
                    <TeamCard 
                        team={team} 
                        key={index}
                    />
                )}
            </div>
        </div>
    );
}

export default TeamSection;