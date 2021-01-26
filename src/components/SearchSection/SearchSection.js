import React, { useState } from 'react';
import './SearchSection.css';
import SearchBar from '../SearchBar/SearchBar';

const SearchSection = () => {
    const [searchBarText, setSearchBarText] = useState("");

    const handleSearchInput = onChange => {
        setSearchBarText(onChange.target.value);
    }

    const search = () => {
        console.log(`searched for ${searchBarText}`); //TODO: implement actual funtionality
    }

    return (
        <div className="search-container">
            <h1>Dev Pathways</h1>
            <SearchBar
                value={searchBarText}
                onChange={(event) => handleSearchInput(event)}
                onSubmit={search}
            />
        </div>
    );
}

export default SearchSection;
