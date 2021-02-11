import React from 'react'
import './ResultsBody.css'

function ResultsBody() {
    //TODO: show results from search query
    //I'm not really sure how this will be implemented


    //The temp result is there purely for visualization,
    //resources should be their own component and actually
    //be returned after a search
    return (
        <div className="results-container">
            <h2>We found some results!</h2>

            <div className="temp-result">
                <h3>Name of Resource</h3>
                <p>Description of resource would go here</p>
            </div>

            <div className="temp-result">
                <h3>Name of Resource 2</h3>
                <p>Description of resource would go here</p>
            </div>
        </div>
    )
}

export default ResultsBody