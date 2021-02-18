import React, { useState } from 'react';
import './SearchandSuggested.css';
import SearchBar from '../SearchBar/SearchBar';
import resources from '../../data/resources.js';

const SearchandSuggested = props => {
    //props it can take: searchFunction and text
    let suggested;
    const [searchBarText, setSearchBarText] = useState(props.text ?? "");
    const [suggestedItem, setSuggestedItem] = useState([]); //holds all suggested items
    const [showSuggested, setShowSuggested] = useState(false);

    //TODO: implement debouncing
    const handleSearchInput = onChange => {
        let tempSuggest = [];
        let value = onChange.target.value;
        setSearchBarText(value);
        value = value.toLowerCase();

        //Parse for suggestions
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
            setShowSuggested(true);
         } else {
             setShowSuggested(false);
         }
         setSuggestedItem(tempSuggest);
    }

    //Handle different ways of submitting search
    const handleSuggestionSelect = id => {
        let val = "";
        if (id[1] === -1) {
            val = resources[id[0]].category.toLowerCase();
        } else {
            val = resources[id[0]].links[id[1]].name.toLowerCase();  
        }
        setShowSuggested(false);
        setSearchBarText(val);
        props.searchFunction(val);
    }

    const handleKeyInput = key => {
        if (key.key === 'Enter') {
            props.searchFunction(searchBarText);
            setShowSuggested(false);
        }
    }

    //Turn suggested items into list
    if (suggestedItem.length === 0) {
        suggested = <li id="no-results">No results found...</li>
    } 
    else {
         suggested = suggestedItem.map((item) =>
            <li className="searchitem" key={item.id} onClick={() => handleSuggestionSelect(item.id)}>
                <b>{item.name.substring(0,item.index)}</b>
                {searchBarText.toLowerCase()}
                <b>{item.name.substring(item.index+searchBarText.length)}</b>
            </li>
         );
    }
    const searchSuggested = (
        <div className="suggestions">
            <ul>
            {suggested}
            </ul>
        </div>
    )

    return (
        <div className="searchandsuggested">
        <SearchBar
            value={searchBarText}
            onChange={(event) => handleSearchInput(event)}
            onKeyDown={(event) => handleKeyInput(event)}
            onSubmit={() => {props.searchFunction(searchBarText);
            setShowSuggested(false);}}
        />
        {showSuggested ? searchSuggested : null}
        </div>
    );
}

export default SearchandSuggested;
