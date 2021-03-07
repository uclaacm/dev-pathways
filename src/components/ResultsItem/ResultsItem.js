import React from 'react'
import './ResultsItem.css'

import video from './video_icon.svg'
import article from './article_icon.svg'
import game from './game_icon.svg'
import doc from './doc_icon.svg'
import none from './none_icon.svg'

const Home = props => {
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
            <a href={props.link} className="titleLink">{props.item.resource.name}</a>
            <img className="resource-type-icon" src={resourceTypeIcon} alt="resource type icon"></img>
            {props.otherSources.length !== 0 && resourceTypeIcon !== article ? <img className="resource-type-icon" src={article} alt="resource type icon"></img> : ""}

            <div className="description">{props.item.resource.description ?? "No description available."}</div>
            
            <footer>
                {props.item.resource.source}
                {props.otherSources}
            </footer>
            </div>
        </div> 
    )
}

export default Home;