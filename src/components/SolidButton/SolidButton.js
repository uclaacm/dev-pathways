import React from 'react';
import './SolidButton.css';
import Clickable from '../Clickable/Clickable';

const SolidButton = props => {
    return (
        <Clickable className={`solid-button ${props.className}`} onClick={props.onClick}>
            <span className="text">{props.text}</span>
        </Clickable>
    );
}

export default SolidButton;