import React from 'react';
import './SearchSection.css';
import SearchBar from '../SearchBar/SearchBar';

const SearchSection = () => {
    return (
        <div className="search-container">
            <h1>Dev Pathways</h1>
            <SearchBar/>
        </div>
    );
}

export default SearchSection;