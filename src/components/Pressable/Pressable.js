import React from 'react';
import './Pressable.css';

//an unstyled button useful as a base for custom buttons

const Pressable = (props, onClick) => {
    return (
        <button className="pressable" onClick={onClick}>
            { props.children }
        </button>
    );
}

export default Pressable;