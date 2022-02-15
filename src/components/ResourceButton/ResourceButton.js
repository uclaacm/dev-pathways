import React from 'react';
import './ResourceButton.css';
import Clickable from '../Clickable/Clickable';

const ResourceButton = props => {
    return (
        <Clickable onClick={props.onClick}>
            <div className="button-container">
                <span>{props.text}</span>
            </div>
        </Clickable>
    );
}

export default ResourceButton;