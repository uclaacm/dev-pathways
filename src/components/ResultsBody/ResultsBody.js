import React from 'react'
import './ResultsBody.css'
import resources from '../../../src/data/resources.js';
import ResultsItem from '../ResultsItem/ResultsItem.js';

const ResultsBody = props => {
    let results = [];
    let resultsDiv = [];
    let value = props.text.toLowerCase();
    let foundResults = "No results found...";
    
    //Find applicable resources
    if (value.trim() !== "") {
        //break value into array of words
        let vals = [];
        let temp = "";
        for (let r = 0; r< value.length; r++) {
            if (value[r].match(/[a-z]/i)) {
                temp += (value[r]);
            } else if (temp !== "") {
                vals.push(temp);
                temp = "";
            }
        }
        if (temp !== "") {
            vals.push(temp);
        }

        let catMatch = 0; // # of vals found in category
        let matches = 0; //# of vals found in resource
        let sourceMatches = [];
        for (let i = 0; i < resources.length; i++) { //parse through all categories
            if (resources[i].category.toLowerCase().indexOf(value) !== -1) { //check for category match
                catMatch++;
            }
            for (let j = 0; j < resources[i].links.length; j++) { //parse through all resources in category
                if (resources[i].links[j].source.toLowerCase() === value) { //check source, exact match
                    sourceMatches.push({ id: i.toString() + j.toString(), resource: resources[i].links[j]});
                }
                if (sourceMatches.length > 0) {
                    continue; //skip rest of loop since only searching for resources of certain source now
                }
                for (let p = 0; p < vals.length; p++) {
                    if (resources[i].links[j].name.toLowerCase().indexOf(vals[p]) !== -1) { //check name
                        matches++;
                    }
                    if (resources[i].links[j].description.toLowerCase().indexOf(vals[p]) !== -1) { //check description
                        matches++;
                    }
                }
                if (matches + catMatch > 0) { 
                    results.push({ id: i.toString() + j.toString(), resource: resources[i].links[j], match: matches + catMatch});
                    matches = 0;
                }
            }
            catMatch = 0;
        }
        if (sourceMatches.length > 0) {
            results = sourceMatches;
        } else {
            results.sort((a,b) => {return b.match - a.match}); //sort so resource with most matches goes on top
        }
    }

    //checkbox options filtering for each category
    optionsFilter(props, results, "Source");
    optionsFilter(props, results, "Preferred Format");
    optionsFilter(props, results, "Experience Level");

     
    if (results.length === 1) {
        foundResults = "We found 1 result!";
    }
     else if (results.length !== 0) {
         foundResults = "We found " + results.length + " results!";
     }

    //Create resource items and store in resultsDiv
    for (let i = 0; i < results.length; i++) {
        let keys = Object.keys(results[i].resource);
        let vals = Object.values(results[i].resource);
        //Add new source names here
        let validSources = ["video","article","game","documentation"]; //TODO: better solution
        let otherSources = [];
        for (let j=keys.length-1;j>=0;j--){
            if (!validSources.includes(keys[j])) {
                keys.splice(j,1);
                vals.splice(j,1);
            }
        }
        for (let j = 1; j < keys.length; j++) {
            const item = <a className="otherSource" key={[i, j, -1]} href={vals[j]}>{keys[j]}</a>
            otherSources.push(item);
        }
         const resourceItem = <ResultsItem 
            item = {results[i]}
            link = {vals[0]}
            otherSources = {otherSources}
            key = {i}
            />
        resultsDiv.push(resourceItem);
    }

    return (
        <div className="results-container">
            <h2>{foundResults}</h2>
            {resultsDiv}
        </div>
    )
}

export default ResultsBody;

const optionsFilter = (props, results, category) => {
    let isOneChecked = false;
    let filtered;
    for (let key in props.checkedItems) {
        if (props.checkedItems[key].checked && props.checkedItems[key].category === category) {
            isOneChecked = true;
            break;
        }
    }
    if (isOneChecked) { //only do filtering if there is at least one Source checkbox that is checked
        filtered = results.filter(obj => {
            let filters = [];
            let predicate;
            for (let key in props.checkedItems) {
                if (props.checkedItems[key].checked && props.checkedItems[key].category === category) {
                    filters.push(key);
                    predicate = props.checkedItems[key].predicate;
                }
            }
            for (let name of filters) {
                if (predicate(obj, name)) {
                    return true;
                }
            }
            return false;
        })

        results.length = 0;
        results.push.apply(results, filtered);
    }
}
