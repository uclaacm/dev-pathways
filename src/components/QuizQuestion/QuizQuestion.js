import React from 'react';
import './QuizQuestion.css';

const QuizQuestion = ({ type, question, choices, onChange }) => {
    return (
        <div className="quiz-question" onChange={onChange}>
            <h2>{question}</h2>
            {type === "radio" ? 
                choices.map(choice => {
                    return (
                        <span key={choice} className="quiz-choice">
                            <input type="radio" value={choice} name={question} key={choice}/> {choice}
                        </span>);
                }) :
                <select name="quiz-question" className="quiz-dropdown">
                    {
                        choices.map(choice => {
                            return (
                                <option key={choice} className="quiz-option">{choice}</option>
                        )})            
                    }                
                </select>}            
        </div>
    );
};

export default QuizQuestion;