import React from 'react';
import './IconButton.css';
import Pressable from '../Clickable/Clickable';

const IconButton = props => {
    return (
        <Pressable onClick={props.onClick}>
            <img className="logo" src={props.icon} alt={props.alt}/>
            <span className="logotype">{props.text}</span>
        </Pressable>
    );
}

export default IconButton;