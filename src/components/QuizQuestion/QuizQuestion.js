import React from 'react';
import './QuizQuestion.css';

const QuizQuestion = ({ question, choices, onChange }) => {
    return (
        <div className="quiz-question" onChange={onChange}>
            <h2>{question}</h2>
            {choices.map(choice => {
                return (
                    <span key={choice} className="quiz-choice">
                        <input type="radio" value={choice} name={question} key={choice}/> {choice}
                    </span>);
            })}
        </div>
    );
};

export default QuizQuestion;