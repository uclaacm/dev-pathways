import React from 'react';
import './SearchBar.css';
import Pressable from '../Pressable/Pressable';
import line from './line.svg';
import search from './search.svg';

//TODO: implement Google-esque drop down functionality
//TODO: implement search bar query cycling animation

const SearchBar = props => {
    return (
        <div className="searchbar">
            <Pressable onClick={props.onSubmit}>
                <img src={search} className="search-icon" alt="search icon"/>
            </Pressable>
            <img src={line} alt="line"/>
            <input 
                value={props.value}
                type="text" 
                onChange={props.onChange}
                autoComplete="off"
                placeholder="What do you want to learn?"
            />
        </div>
    );
}

export default SearchBar;