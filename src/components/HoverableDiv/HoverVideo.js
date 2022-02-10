import React from "react"
import ReactPlayer from "react-player"

const HoverVideo = ({link}) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          loop: 1,
        }
    }
        return (
            <div>
                <ReactPlayer url={link} opts={opts} playing= {true} loop autoplay/>
            </div>
        )
}


export default HoverVideo;