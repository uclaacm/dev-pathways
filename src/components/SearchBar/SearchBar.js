import React from 'react';
import './SearchBar.css';
import Clickable from '../Clickable/Clickable';
import line from './line.svg';
import search from './search.svg';

//TODO: implement search bar query cycling animation

const SearchBar = props => {
    return (
        <div className="searchbar">
            <div className="search-icon">
                <Clickable onClick={props.onSubmit}>
                    <img src={search} alt="search icon"/>
                </Clickable>
            </div>
            <img src={line} alt="line"/>
            <input 
                value={props.value}
                type="text" 
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                autoComplete="off"
                placeholder="What do you want to learn?"
            />
        </div>
    );
}

export default SearchBar;