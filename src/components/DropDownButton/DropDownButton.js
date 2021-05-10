import React from 'react';
import './DropDownButton.css';
import arrow from './arrow.svg';
import Clickable from '../Clickable/Clickable';

const DropDownButton = props => {
    return (
        <Clickable onClick={props.onClick}>
            <div className="button-container">
                <span>{props.text}</span>
                <img 
                    className={props.isExpanded ? "arrow flip" : "arrow"} 
                    src={arrow} alt="arrow" 
                />
            </div>
        </Clickable>
    );
}

export default DropDownButton;