import React from 'react';
import "./DifficultyExplanation.css";
import { useState } from 'react';

const DisplayInfo = ({difficulty}) => {
    return (
        <div className='displayInfo'>
            {difficulty === "Beginner" && 
                <div>
                    <p>- Know nothing about the topic</p>
                    <p>- Looking for a reintroduction from scratch</p>
                    <p>- Source can be understood without prior knowledge"</p>
                </div>
            }
            {difficulty === "Intermediate" && 
                <div>
                    <p>- Most developers know this stuff</p>
                    <p>- Stuff to look into after you understand how the basics of a technology work</p>
                    <p>- Helpful to better understand and work comfortably with a specific technology</p>
                </div>
            }
            {difficulty === "Advanced" && 
                <div>
                    <p>- Extra skills</p>
                    <p>- Things that are nice to know, but not needed, to be comfortable with or use the technology effectively</p>
                    <p>- Ideas that are complicated to understand them unless you've worked with the technology for a while</p>
                </div>
            }
        </div>    
    )
}

const DifficultyExplanation = ({difficulty}) => {
    const [showText, setShowText] = useState(false)
    const handleMouseEnter = e => {
        setShowText(true)
    }
    const handleMouseLeave = e => {
        setShowText(false)
    }

    return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {showText && <div className = "information"><DisplayInfo difficulty={difficulty} /></div>}
        <label>{difficulty}</label>
    </div>;

}
export default DifficultyExplanation;
