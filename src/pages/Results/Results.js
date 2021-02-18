import React from 'react'
import './Results.css'
import NavBar from '../../components/NavBar/NavBar'
import ResultsBody from '../../components/ResultsBody/ResultsBody'
import FiltersBody from '../../components/FiltersBody/FiltersBody'
import SearchandSuggested from '../../components/SearchandSuggested/SearchandSuggested';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const Results = () => {
    const param = useParams();
    const [text, setText] = useState(decodeURIComponent(param.userText));

    const search = input => {
        console.log(`searched for ${input}`)
        setText(input);
    }

    return (
        <div>
            <NavBar />
            <div className="results-search-container">
                <h1>Search Results</h1>
                <SearchandSuggested 
                   searchFunction ={search}
                    text = {text}
                />
            </div>
            <div className="results-page-section">
                <ResultsBody 
                text={text}/>
                <FiltersBody />
            </div>
        </div>
    )
}

export default Results