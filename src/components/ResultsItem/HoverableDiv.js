import React from 'react'
import HoverVideo from './HoverVideo'

const HoverableDiv = ({isVideo, isHovering, link,linkName,setIsHovering}) => {


    return (
        <div id="parent">
            <div className="hover-div" onMouseOver={() => setIsHovering(true)} onMouseOut={() => {console.log(isHovering); setIsHovering(false)}} >
                <a href={link} className="titleLink">{linkName}</a>
            </div>
            <div className="hover-video">
                {isHovering && isVideo && <HoverVideo isVideo={isVideo} link={link} />}
            </div>
        </div>
    )
}

export default HoverableDiv ;