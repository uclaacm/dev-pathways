import React from 'react';
import './TeamCard.css';

const TeamCard = props => {
    return (
        <div className="card">
            <img src={props.team.logotype} alt="team logotype" />
            <h3>Technologies</h3>
            <ul>
                {props.team.technologies.map(tech =>
                    <li key={tech}>{tech}</li>
                )}
            </ul>
            <h3>Projects</h3>
            <ul>
                {props.team.projects.map(project =>
                    <li key={project}>{project}</li>
                )}
            </ul>
        </div>
    );
}

export default TeamCard;