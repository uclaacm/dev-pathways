import React from 'react'
import './ResultsItem.css'
import video from '../../img/video_icon.svg'
import article from '../../img/article_icon.svg'
import game from '../../img/game_icon.svg'
import doc from '../../img/doc_icon.svg'
import none from '../../img/none_icon.svg'
import HoverableDiv from '../HoverableDiv/HoverableDiv'
import { useState } from 'react'

const ResultsItem = props => {

    const [isHovering, setIsHovering] = useState(false);

    let resourceTypeIcon = "";
    switch(props.link) {
        case props.item.resource.video:
            resourceTypeIcon = video; 
            break;
        case props.item.resource.article:
            resourceTypeIcon = article;
            break;
        case props.item.resource.game:
            resourceTypeIcon = game;
            break;
        case props.item.resource.documentation:
            resourceTypeIcon = doc;
            break;
        default:
            resourceTypeIcon = none;
            break;
    }

    return (
        <div className="result" key={props.item.id}>
            {props.item.resource.icon ?
            <img className="result-icon" alt="source icon for spice" src={props.item.resource.icon}></img> : ""}
            
            <div className="result-body">
            <HoverableDiv isVideo={props.item.resource.video} link={props.link} linkName={props.item.resource.name} isHovering={isHovering} setIsHovering={setIsHovering} />
            <img className="resource-type-icon" src={resourceTypeIcon} alt="resource type icon"></img>
            {props.otherSources.length !== 0 && resourceTypeIcon !== article ? <img className="resource-type-icon" src={article} alt="resource type icon"></img> : ""}

            <div className="description">{props.item.resource.description ?? "No description available."}</div>
            
            <div className="results-item-footer">
                {props.item.resource.source}
                {props.otherSources}
            </div>
            </div>
        </div> 
    )
}

export default ResultsItem;