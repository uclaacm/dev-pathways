import React, { useState } from 'react';
import './SearchSection.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import resources from '../../../src/data/resources.js';

const SearchSection = () => {
    const [searchBarText, setSearchBarText] = useState("");
    const [suggestedItem, setSuggestedItem] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearchInput = onChange => {
        let tempSuggest = [];
        var value = onChange.target.value;
        setSearchBarText(value);
        value = value.toLowerCase();
        if (value.trim() !== "") {
            for (var i=0; i < resources.length; i++) {
                const indexI = resources[i].category.toLowerCase().indexOf(value);
                if (tempSuggest.length === 10) {break;}
                if (indexI !== -1) {
                    tempSuggest.push({ 
                        name:resources[i].category.toLowerCase(),
                        index:  indexI,
                        id:[i,-1]});
                }
                for (var j=0; j< resources[i].links.length; j++) {
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
        var val = "";
        if (id[1] === -1) {
            val = resources[id[0]].category.toLowerCase();
        } else {
            val = resources[id[0]].links[id[1]].name.toLowerCase();  
        }
        setShowResults(false);
        search(val);
    }

    const handleKeyInput = key => {
        if (key.key === 'Enter') {
            search(searchBarText);
        }
    }

    const search = text => {
        console.log(`searched for ${text}`); //TODO: implement actual funtionality
    }

    return (
        <div className="search-container">
            <h1>Dev Pathways</h1>
            <div className="searchandresults">
                <SearchBar
                    value={searchBarText}
                    onChange={(event) => handleSearchInput(event)}
                    onKeyDown={(event) => handleKeyInput(event)}
                    onSubmit={() => search(searchBarText)}
                />
                {showResults ? <hr/> : null}
                {showResults ? <SearchResults 
                data={suggestedItem}
                text = {searchBarText}
                suggestionSelect = {handleSuggestionSelect}
                /> : null}
            </div>
        </div>
    );
}

export default SearchSection;
