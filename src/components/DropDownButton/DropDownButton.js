import React from 'react';
import './DropDownButton.css';
import arrow from './arrow.svg';
import Pressable from '../Pressable/Pressable';

const DropDownButton = onClick => {
    return (
        <Pressable onClick={onClick}>
            <span>Resources</span>
            <img className="arrow" src={arrow} alt="arrow" />
        </Pressable>
    );
}

export default DropDownButton;