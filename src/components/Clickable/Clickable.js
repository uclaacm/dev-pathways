import React from 'react';
import './Clickable.css';

//an unstyled button useful as a base for custom buttons

const Clickable = props => {
    return (
        <button className="clickable" onClick={props.onClick}>
            { props.children }
        </button>
    );
}

export default Clickable;