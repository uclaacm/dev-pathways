import React from 'react'
import HoverVideo from './HoverVideo';
import './HoverableDiv.css'

const HoverableDiv = ({isVideo, isHovering, link,linkName,setIsHovering}) => {


    return (
        <div className="hover-parent">
            <div className="hover-div" onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} >
                <a href={link} className="titleLink">{linkName}</a>
            </div>
            <div className="hover-video">
                {isHovering && isVideo && <HoverVideo link={link} />}
            </div>
        </div>
    )
}

export default HoverableDiv ;

