import React from 'react'
import './ResultsPage.css'
import NavBar from '../NavBar/NavBar'
import ResultsSearchSection from './ResultsSearchSection/ResultsSearchSection'
import ResultsBody from './ResultsBody/ResultsBody'
import FiltersBody from './FiltersBody/FiltersBody'

function ResultsPage() {
    
    
    //TODO: When the search functionality is properly in place, 
    //use a ternary to display a specific message if no search
    //results were found
    return (
        <div>
            <NavBar />
            <ResultsSearchSection />
            <div className="results-page-section">
                <div className="results-body-section"><ResultsBody /></div>
                <div className="filters-body-section"><FiltersBody /></div>
            </div>
        </div>
    )
}

export default ResultsPage