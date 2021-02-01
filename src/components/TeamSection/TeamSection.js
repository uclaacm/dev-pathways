import React from 'react';
import './TeamSection.css';
import '../TeamCard/TeamCard';
import teams from "../../data/teams";
import TeamCard from '../TeamCard/TeamCard';

const TeamSection = () => {
    return (
        <div className="team-container">
            <h2>Team Overviews</h2>
            <div className="cards-grid">
                {teams.map(team =>
                    <TeamCard 
                        team={team} 
                        key={team.name}
                    />
                )}
            </div>
        </div>
    );
}

export default TeamSection;