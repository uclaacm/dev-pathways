import React from 'react';
import './SearchResults.css';

const SearchResults = props => {

    const suggested = props.data.map((item) =>
         <li key={item.id} onClick={() => props.suggestionSelect(item.id)}>
             <b>{item.name.substring(0,item.index)}</b>
             {props.text.toLowerCase()}
             <b>{item.name.substring(item.index+props.text.length)}</b>
        </li>
    );

    return (
        <div className="searchresults">
            <ul>
            {suggested}
            </ul>
        </div>
    );
}

export default SearchResults;