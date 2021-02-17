import React, {useState} from 'react'
import './ResultsSearchSection.css'
import SearchBar from '../SearchBar/SearchBar'
import resources from '../../../src/data/resources.js';
import SearchResults from '../SearchResults/SearchResults';

const ResultsSearchSection = props => {
    //NOTE: Copy-pasted from SearchSection
    //Similar functionality, different styling
    const [searchBarText, setSearchBarText] = useState(props.text);
    const [suggestedItem, setSuggestedItem] = useState([]);
    const [showResults, setShowResults] = useState(false);
    
    const handleSearchInput = onChange => {
        let tempSuggest = [];
        let value = onChange.target.value;
        setSearchBarText(value);
        value = value.toLowerCase();
        if (value.trim() !== "") {
            for(let i=0; i < resources.length; i++) {
                const indexI = resources[i].category.toLowerCase().indexOf(value);
                if (tempSuggest.length === 10) {break;}
                if (indexI !== -1) {
                    tempSuggest.push({ 
                        name:resources[i].category.toLowerCase(),
                        index:  indexI,
                        id:[i,-1]});
                }
                for (let j=0; j< resources[i].links.length; j++) {
                    if (tempSuggest.length === 10) {break;}
                    const indexJ = resources[i].links[j].name.toLowerCase().indexOf(value);
                    if (indexJ !== -1) {
                        tempSuggest.push({ 
                            name:resources[i].links[j].name.toLowerCase(),
                            index: indexJ,
                            id:[i,j]});
                    }
                }
            }
            setShowResults(true);
         } else {
             setShowResults(false);
         }
         setSuggestedItem(tempSuggest);
    }

    const handleSuggestionSelect = id => {
        let val = "";
        if (id[1] === -1) {
            val = resources[id[0]].category.toLowerCase();
        } else {
            val = resources[id[0]].links[id[1]].name.toLowerCase();  
        }
        setShowResults(false);
        setSearchBarText(val);
        props.searchFunction(val);
    }

    const handleKeyInput = key => {
        if (key.key === 'Enter') {
            props.searchFunction(searchBarText);
            setShowResults(false);
        }
    }

    const search = () => {
        console.log(`searched for ${searchBarText}`); //TODO: implement actual funtionality
        props.searchFunction(searchBarText);
        setShowResults(false);
    }

    return (
        <div className="results-search-container">
            <h1>Search Results</h1>
            <div className="searchandresults">
                <SearchBar
                    value={searchBarText}
                    onChange={(event) => handleSearchInput(event)}
                    onSubmit={search}
                    onKeyDown={(event) => handleKeyInput(event)}
                />
                {showResults ? <SearchResults 
                        data={suggestedItem} 
                        text={searchBarText}
                        suggestionSelect={handleSuggestionSelect}/>
                : null}
            </div>
        </div>
    )
}

export default ResultsSearchSection