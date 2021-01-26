import React from 'react';
import './Pressable.css';

//an unstyled button useful as a base for custom buttons

const Pressable = props => {
    return (
        <button className="pressable" onClick={props.onClick}>
            { props.children }
        </button>
    );
}

export default Pressable;