import React, { useState, useEffect, useRef } from 'react';
import './SearchandSuggested.css';
import SearchBar from '../SearchBar/SearchBar';
import resources from '../../data/resources.js';

const SearchandSuggested = props => {
    //props it can take: searchFunction and text
    let suggested;
    const [searchBarText, setSearchBarText] = useState(props.text ?? "");
    const [suggestedItem, setSuggestedItem] = useState([]); //holds all suggested items
    const [showSuggested, setShowSuggested] = useState(false);
    const [textSelected, setTextSelected] = useState(true);
    const debouncedText = useDebounce(searchBarText, 150);

    // create a reference to dropdown search box
    const dropdownBox = useRef();

    useEffect(() => {
        // closes the dropdown search box if user clicks anywhere on the page outside the box
        const handleOutsideClick = e => {
            if (showSuggested && dropdownBox.current && !dropdownBox.current.contains(e.target)) {
                // if the user clicks outside the dropdown box, close the dropdown
                setShowSuggested(false);
            }
        }

        document.addEventListener("click", handleOutsideClick);

        // clean up
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [showSuggested])

    const handleSearchInput = onChange => {
        setSearchBarText(onChange.target.value);
        if (!onChange.target.value) setShowSuggested(false);
    }

    useEffect(() => {
        const generateSuggestions = (debouncedText) => {
            let tempSuggest = [];
            let value = debouncedText.toLowerCase();

            //Parse for suggestions
            if (value.trim() !== "" && textSelected === false) {
                for (let i = 0; i < resources.length; i++) {
                    const indexI = resources[i].category.toLowerCase().indexOf(value);
                    if (tempSuggest.length === 10) { break; }
                    if (indexI !== -1) {
                        tempSuggest.push({
                            name: resources[i].category.toLowerCase(),
                            index: indexI,
                            id: [i, -1]
                        });
                    }
                    for (let j = 0; j < resources[i].links.length; j++) {
                        if (tempSuggest.length === 10) { break; }
                        const indexJ = resources[i].links[j].name.toLowerCase().indexOf(value);
                        if (indexJ !== -1) {
                            tempSuggest.push({
                                name: resources[i].links[j].name.toLowerCase(),
                                index: indexJ,
                                id: [i, j]
                            });
                        }
                    }
                }
                setShowSuggested(true);
            } else {
                setTextSelected(false)
                setShowSuggested(false);
            }
            setSuggestedItem(tempSuggest);
        }
        generateSuggestions(debouncedText);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedText]);


    //Handle different ways of submitting search
    const handleSuggestionSelect = id => {
        let val = "";
        if (id[1] === -1) {
            val = resources[id[0]].category.toLowerCase();
        } else {
            val = resources[id[0]].links[id[1]].name.toLowerCase();
        }
        setTextSelected(true)
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

    // debounce custom hook
    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(
            () => {
                const handler = setTimeout(() => {
                    setDebouncedValue(value);
                }, delay);
                return () => {
                    clearTimeout(handler);
                };
            },
            [value, delay]
        );

        return debouncedValue;
    }

    //Turn suggested items into list
    if (suggestedItem.length === 0) {
        suggested = <li id="no-results">No results found...</li>
    }
    else {
        suggested = suggestedItem.map((item) =>
            <li className="searchitem" key={item.id} onClick={() => handleSuggestionSelect(item.id)}>
                <b>{item.name.substring(0, item.index)}</b>
                {debouncedText.toLowerCase()}
                <b>{item.name.substring(item.index + debouncedText.length)}</b>
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
        <div className="searchandsuggested" ref={dropdownBox}>
            <SearchBar
                value={searchBarText}
                onChange={(event) => handleSearchInput(event)}
                onKeyDown={(event) => handleKeyInput(event)}
                onSubmit={() => {
                    props.searchFunction(searchBarText);
                    setShowSuggested(false);
                }}
            />
            {showSuggested ? searchSuggested : null}
        </div>
    );
}

export default SearchandSuggested;
