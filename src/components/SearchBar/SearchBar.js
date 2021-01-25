import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <form>
            <input 
                type="text" 
                onChange={props.inputHandler}
                placeholder="What do you want to learn?"
            />
        </form>
    );
}

export default SearchBar;