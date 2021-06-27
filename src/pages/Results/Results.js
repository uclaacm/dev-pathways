import React from 'react'
import './Results.css'
import NavBar from '../../components/NavBar/NavBar'
import ResultsBody from '../../components/ResultsBody/ResultsBody'
import SearchandSuggested from '../../components/SearchandSuggested/SearchandSuggested';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import checkboxes from '../../data/checkboxes'
import Checkbox from '../../components/Checkbox/Checkbox'
import SolidButton from '../../components/SolidButton/SolidButton'

const Results = () => {
    const param = useParams();
    const [text, setText] = useState(decodeURIComponent(param.userText));
    const [checkedItems, setCheckedItems] = useState({});

    const search = input => {
        console.log(`searched for ${input}`)
        setText(input);
    }

    const handleChange = (event, category, predicate) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: {
            checked: event.target.checked,
            category: category,
            predicate: predicate,
        }});
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
                    <SolidButton text="Generate Pathway"/>
                    {Object.keys(checkboxes).map(key => (
                        <div className="filter-category">
                            <h3> {key} </h3>
                            { checkboxes[key].names.map(item => (
                                <div>
                                    <Checkbox name={item.name} checked={checkedItems[item.name]?.checked} onChange={event => handleChange(event, key, checkboxes[key].predicate)} />
                                    <label key={item.name}>
                                        {item.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Results