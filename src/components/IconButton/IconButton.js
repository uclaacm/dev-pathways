import React from 'react';
import './IconButton.css';
import Clickable from '../Clickable/Clickable';

const IconButton = props => {
    return (
        <Clickable onClick={props.onClick}>
            <img className="logo" src={props.icon} alt={props.alt}/>
            <span className="logotype">{props.text}</span>
        </Clickable>
    );
}

export default IconButton;