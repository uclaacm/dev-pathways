import React from 'react'
import './ResultsBody.css'
import resources from '../../../src/data/resources.js';

const ResultsBody = props => {
    //TODO: show results from search query
    //I'm not really sure how this will be implemented
    let results = [];
    let resultsDiv = [];
    let value = props.text.toLowerCase();
    let foundResults = "We found some results!";
    
    //Find applicable resources
    if (value.trim() !== "") {
        for(let i=0; i < resources.length; i++) {
            if (resources[i].category.toLowerCase() === value) {
                for (let j=0; j< resources[i].links.length; j++) {
                   results.push({id:[i,j],resource:resources[i].links[j]});
                }
                break;
            }
            for (let j=0; j< resources[i].links.length; j++) {
                const indexJ = resources[i].links[j].name.toLowerCase().indexOf(value);
                if (indexJ !== -1) {
                    results.push({id:[i,j],resource:resources[i].links[j]});
                }
            }
        }
     }
     if (results.length === 0) {
         foundResults = "No results found...";
     }

     //Create resource items and store in resultsDiv
    for (let i=0;i<results.length;i++) {
        let keys = Object.keys(results[i].resource);
        let vals = Object.values(results[i].resource);
        let otherSources = [];
        for (let j=keys.length-1;j>=0;j--){
            if (keys[j] === "description" || keys[j] ==="name" || keys[j] === "source") {
                keys.splice(j,1);
                vals.splice(j,1);
            }
        }
        for (let j=1;j<keys.length;j++) {
            const item = <a className="otherSource" key={[i,j,-1]} href={vals[j]}>{keys[j]}</a>
            otherSources.push(item);
        }
        const item = (
        <div className="result" key={results[i].id}>
            <a href={vals[0]} className="titleLink">{results[i].resource.name}</a>
            <p>{results[i].resource.description ?? "No description available."}{otherSources}</p>
            <footer>{results[i].resource.source}</footer>
        </div> );
        resultsDiv.push(item);
    }

    return (
        <div className="results-container">
            <h2>{foundResults}</h2>
            {resultsDiv}
        </div>
    )
}

export default ResultsBody