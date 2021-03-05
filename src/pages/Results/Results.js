import React from 'react'
import './Results.css'
import NavBar from '../../components/NavBar/NavBar'
import ResultsBody from '../../components/ResultsBody/ResultsBody'
import FiltersBody from '../../components/FiltersBody/FiltersBody'
import SearchandSuggested from '../../components/SearchandSuggested/SearchandSuggested';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import checkboxes from '../../data/checkboxes'
import Checkbox from '../../components/Checkbox/Checkbox'

const Results = () => {
    const param = useParams();
    const [text, setText] = useState(decodeURIComponent(param.userText));
    const [checkedItems, setCheckedItems] = useState({}); //plain object as state

    const search = input => {
        console.log(`searched for ${input}`)
        setText(input);
    }

    const handleChange = (event) => {
        // updating an object instead of a Map
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    }

    return (
        <div>
            <NavBar />
            <div className="results-search-container">
                <h1>Search Results</h1>
                <SearchandSuggested
                    searchFunction={search}
                    text={text}
                />
            </div>
            <div className="results-page-section">
                <ResultsBody
                    text={text} 
                    checkedItems={checkedItems}
                />
                    
                <div className="filters-container">
                    {Object.keys(checkboxes).map(key => (
                        <div className="filter-category">
                            <h3>{key} </h3>
                            {
                                checkboxes[key].map(item => (
                                    <div>
                                        <Checkbox name={item.name} checked={checkedItems[item.name]} onChange={handleChange} />
                                        <label key={item.name}>
                                            {item.name}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Results