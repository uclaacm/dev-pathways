import React from 'react';
import './SearchBar.css';
import Clickable from '../Clickable/Clickable';
import line from './line.svg';
import search from './search.svg';
import Typed from 'typed.js';

//TODO: implement search bar query cycling animation

const typed4 = () => {
    return (
        new Typed('#typed4', {
            strings: ['Some strings without', 'Some HTML', 'Chars'],
            typeSpeed: 0,
            backSpeed: 0,
            attr: 'placeholder',
            bindInputFocusEvents: true,
            loop: true
          })
    );
}


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
                placeholder= {<typed4/>}
            />
        </div>
    );
}

export default SearchBar;