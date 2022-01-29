import React from 'react';
import "./DifficultyExplanation.css";
import { difficultyTextMap } from "../../data/resources.js";
import { useState } from 'react';

const DifficultyExplanation = ({difficulty}) => {
    const [showText, setShowText] = useState(false)
    const handleMouseEnter = e => {
        setShowText(true)
    }
    const handleMouseLeave = e => {
        setShowText(false)
    }
    return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showText && 
        <div className = "information">
            <div className='displayInfo'>
                {difficultyTextMap[difficulty].map((val) => (<p>{val}</p>))}
            </div>
        </div>}
        <label>{difficulty}</label>
    </div>;
}

export default DifficultyExplanation;
