import React from 'react';
import './Results.css';
import ResultsBody from '../../components/ResultsBody/ResultsBody';
import SearchandSuggested from '../../components/SearchandSuggested/SearchandSuggested';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import checkboxes from '../../data/checkboxes';
import Checkbox from '../../components/Checkbox/Checkbox';
import SolidButton from '../../components/SolidButton/SolidButton';
import PageHeader from '../../components/PageHeader/PageHeader';
import SearchingArt from '../../img/searching_art.svg';
import DifficultyExplanation from '../../components/DifficultyExplanation/DifficultyExplanation';

const Results = () => {
    const navigate = useNavigate();
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
            <PageHeader 
                header="Search Results" 
                subheader={<SearchandSuggested searchFunction={search} text={text}/>}
                img={SearchingArt}
            />
            <div className="results-page-section">
                <ResultsBody
                    text={text}
                    checkedItems={checkedItems}
                />
                
                <div className="filters-container">
                    <SolidButton text="Generate Pathway" onClick={() => navigate("/quiz")}/>
                    {Object.keys(checkboxes).map(key => (
                        <div className="filter-category">
                            <h3> {key} </h3>
                            { checkboxes[key].names.map(item => ( key !== "Experience Level" ? 
                                <div>
                                    <Checkbox name={item.name} checked={checkedItems[item.name]?.checked} onChange={event => handleChange(event, key, checkboxes[key].predicate)} />
                                    <label key={item.name}>
                                        {item.name}
                                    </label>
                                </div>
                                :
                                <div className='Experience-Level'>
                                    <Checkbox name={item.name} checked={checkedItems[item.name]?.checked} onChange={event => handleChange(event, key, checkboxes[key].predicate)} />
                                    <DifficultyExplanation difficulty={item.name} />
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