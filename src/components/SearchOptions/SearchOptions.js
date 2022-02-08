import React from 'react';
import './SearchOptions.css'
import SolidButton from '../../components/SolidButton/SolidButton';
import { useState } from 'react';
const SearchOptions = (props) => {
    if (props.SearchState === true) {
        return (

            <div className="result-selection" >
                <SolidButton
                    className="result-nobackground-button"
                    text="Results"
                    onClick={props.onClick}
                />
                <SolidButton
                    className="results-button filters"
                    text="Filters"
                    onClick={props.onClick}
                />

            </div>
        );
    }
    else {
        return (
            <div className="result-selection" >
                <SolidButton
                    className="results-button"
                    text="Results"
                    onClick={props.onClick}
                />
                <SolidButton
                    className="result-nobackground-button filters"
                    text="Filters"
                    onClick={props.onClick}
                />
            </div>

        )
    }
}

export default SearchOptions;
