import React from 'react'
import './ResultsItem.css'

const Home = props => {
    

    return (
        <div className="result" key={props.item.id}>
            {props.item.resource.icon ?
            <img className="result-icon" src={props.item.resource.icon}></img> : ""}
            
            <div className="result-body">
            <a href={props.link} className="titleLink">{props.item.resource.name}</a>
            
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