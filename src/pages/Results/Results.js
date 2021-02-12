import React from 'react'
import './Results.css'
import NavBar from '../../components/NavBar/NavBar'
import ResultsSearchSection from '../../components/ResultsSearchSection/ResultsSearchSection'
import ResultsBody from '../../components/ResultsBody/ResultsBody'
import FiltersBody from '../../components/FiltersBody/FiltersBody'

const Results = () => {
    //TODO: When the search functionality is properly in place, 
    //use a ternary to display a specific message if no search
    //results were found
    return (
        <div>
            <NavBar />
            <ResultsSearchSection />
            <div className="results-page-section">
                <ResultsBody />
                <FiltersBody />
            </div>
        </div>
    )
}

export default Results