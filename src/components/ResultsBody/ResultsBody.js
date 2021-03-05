import React from 'react'
import './ResultsBody.css'
import resources from '../../../src/data/resources.js';
import ResultsItem from '../ResultsItem/ResultsItem.js';

const ResultsBody = props => {
    let results = [];
    let resultsDiv = [];
    let value = props.text.toLowerCase();
    let foundResults = "We found some results!";

    //Find applicable resources
    if (value.trim() !== "") {
        for (let i = 0; i < resources.length; i++) {
            if (resources[i].category.toLowerCase() === value) {
                for (let j = 0; j < resources[i].links.length; j++) {
                    results.push({ id: [i, j], resource: resources[i].links[j] });
                }
                break;
            }
            for (let j = 0; j < resources[i].links.length; j++) {
                const indexJ = resources[i].links[j].name.toLowerCase().indexOf(value);
                if (indexJ !== -1) {
                    results.push({ id: [i, j], resource: resources[i].links[j] });
                }
            }
        }
    }

    //checkbox options filtering for each category
    optionsFilter(props, results, "Source");
    optionsFilter(props, results, "Preferred Format");
    optionsFilter(props, results, "Experience Level");

    if (results.length === 0) {
        foundResults = "No results found...";
    }

    //Create resource items and store in resultsDiv
    for (let i = 0; i < results.length; i++) {
        let keys = Object.keys(results[i].resource);
        let vals = Object.values(results[i].resource);
        let otherSources = [];
        for (let j = keys.length - 1; j >= 0; j--) {
            if (keys[j] === "description" || keys[j] === "name" || keys[j] === "source") {
                keys.splice(j, 1);
                vals.splice(j, 1);
            }
        }
        for (let j = 1; j < keys.length; j++) {
            const item = <a className="otherSource" key={[i, j, -1]} href={vals[j]}>{keys[j]}</a>
            otherSources.push(item);
        }
        const resourceItem = <ResultsItem
            item={results[i]}
            link={vals[0]}
            otherSources={otherSources}
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
