import React from 'react';
import './TeamButton.css';
import Clickable from '../Clickable/Clickable';

const TeamButton = props => {
    return (
        <Clickable onClick={props.onClick}>
            <img className="team-button" src={props.icon} alt={props.alt}/>
        </Clickable>
    );
}

export default TeamButton