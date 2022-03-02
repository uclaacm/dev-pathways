import React from 'react';
import './Results.css';
import SearchandSuggested from '../../components/SearchandSuggested/SearchandSuggested';
import {useParams } from 'react-router-dom';
import { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import SearchOptions from '../../components/SearchOptions/SearchOptions';
import SearchingArt from '../../img/searching_art.svg';
import ResultSection from '../../components/ResultSection/ResultSection';

const Results = () => {
    const param = useParams();
    const [text, setText] = useState(decodeURIComponent(param.userText));
    const [SearchSelected, setSearchSelected] = useState(true);

    const search = input => {
        console.log(`searched for ${input}`)
        setText(input);
    }

    return (
        <div>

            <PageHeader
                header="Search Results"
                subheader={<SearchandSuggested searchFunction={search} text={text} />}
                img={SearchingArt}
            />

            <SearchOptions
                SearchState={SearchSelected}
                onClick={() => setSearchSelected(!SearchSelected)}
            />

           <ResultSection SearchSelected={SearchSelected} text={text}/>
        </div>
    )
}

export default Results