import React from 'react';
import './DropDownButton.css';
import arrow from './arrow.svg';
import Pressable from '../Clickable/Clickable';

const DropDownButton = props => {
    return (
        <Pressable onClick={props.onClick}>
            <span>{props.text}</span>
            <img className="arrow" src={arrow} alt="arrow" />
        </Pressable>
    );
}

export default DropDownButton;