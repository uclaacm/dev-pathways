import React from 'react';
import './TeamCard.css';

//passing index as key is okay since list is static, would need to use a unique id if list is not static
const TeamCard = props => {
    return (
        <div className="card">
            <img src={props.team.logotype} alt="team logotype" />
            <h3>Technologies</h3>
            <ul>
                {props.team.technologies.map((tech, index) =>
                    <li key={index}>{tech}</li>
                )}
            </ul>
            <h3>Projects</h3>
            <ul>
                {props.team.projects.map((project, index) =>
                    <li key={index}>{project}</li>
                )}
            </ul>
        </div>
    );
}

export default TeamCard;