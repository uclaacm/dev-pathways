import React from 'react'
import './ResultsItem.css'

const Home = props => {
    return (
        <div className="result" key={props.item.id}>
        <a href={props.link} className="titleLink">{props.item.resource.name}</a>
        <p>{props.item.resource.description ?? "No description available."}{props.otherSources}</p>
        <footer>{props.item.resource.source}</footer>
        </div> 
    )
}

export default Home;