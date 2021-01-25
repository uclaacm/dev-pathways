import React from 'react';
import './LogoButton.css';
import logo from './acm_logo.svg';
import Pressable from '../Pressable/Pressable';

const LogoButton = props => {
    return (
        <Pressable onClick={props.onClick}>
            <img className="logo" src={logo} alt="ACM logo" />
            <span className="logotype">Dev Pathways</span>
        </Pressable>
    );
}

export default LogoButton;