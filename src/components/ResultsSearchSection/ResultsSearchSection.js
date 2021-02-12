import React, {useState} from 'react'
import './ResultsSearchSection.css'
import SearchBar from '../SearchBar/SearchBar'

const ResultsSearchSection = () => {
    //NOTE: Copy-pasted from SearchSection
    //Similar functionality, different styling

    const [searchBarText, setSearchBarText] = useState("");

    const handleSearchInput = onChange => {
        setSearchBarText(onChange.target.value);
    }

    const search = () => {
        console.log(`searched for ${searchBarText}`); //TODO: implement actual funtionality
    }

    return (
        <div className="results-search-container">
            <h1>Search Results</h1>
            <SearchBar
                value={searchBarText}
                onChange={(event) => handleSearchInput(event)}
                onSubmit={search}
            />
        </div>
    )
}

export default ResultsSearchSection