import React from 'react'
import './Results.css'
import NavBar from '../../components/NavBar/NavBar'
import ResultsSearchSection from '../../components/ResultsSearchSection/ResultsSearchSection'
import ResultsBody from '../../components/ResultsBody/ResultsBody'
import FiltersBody from '../../components/FiltersBody/FiltersBody'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const Results = () => {
    //TODO: When the search functionality is properly in place, 
    //use a ternary to display a specific message if no search
    //results were found
    const param = useParams();
    const [text, setText] = useState(decodeURIComponent(param.userText));

    const search = input => {
        setText(input);
    }

    return (
        <div>
            <NavBar />
            <ResultsSearchSection 
            text={text}
            searchFunction={search}
            />
            <div className="results-page-section">
                <ResultsBody 
                text={text}/>
                <FiltersBody />
            </div>
        </div>
    )
}

export default Results