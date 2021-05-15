import React, { useState } from 'react';
import './SearchBar.css';
import Clickable from '../Clickable/Clickable';
import line from './line.svg';
import search from './search.svg';
import TypingAnimation from '../shared/TypingAnimation';

//TODO: implement search bar query cycling animation

const SearchBar = props => {
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const { value, onSubmit, onChange, onKeyDown } = props;

    return (
        <div className="searchbar">
            <div className="search-icon">
                <Clickable onClick={onSubmit}>
                    <img src={search} alt="search icon" />
                </Clickable>
            </div>
            <img src={line} alt="line" />
            <div>
                {showPlaceholder && !value && <label for="search">
                    <TypingAnimation words={["What do you want to learn?", "html/css", "javascript", "react"]} />
                </label>}
                <input
                    id="search"
                    value={[value]}
                    type="text"
                    onChange={onChange}
                    onFocus={() => setShowPlaceholder(false)}
                    onBlur={() => setShowPlaceholder(true)}
                    onKeyDown={onKeyDown}
                    autoComplete="off"
                />
            </div>
        </div>
    );
}

export default SearchBar;