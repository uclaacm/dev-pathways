import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PathwayHeader from '../../img/pathway-header.svg';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import SolidButton from '../../components/SolidButton/SolidButton';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

const Quiz = () => {
    const navigate = useNavigate();

    const onChoiceSelection = event => {
        console.log(event.target.value);
    }

    return (
        <div>
            <PageHeader
                header="Your Pathway"
                subheader="Answer the following questions to get started!"
                img={PathwayHeader}
                imgStyle={{
                    backgroundSize: "423px 297px",
                    backgroundPosition: "100%",
                }}
            />
            <QuizQuestion
                question="Which technology do you want to learn?"
                choices={["HTML/CSS", "Javascript", "React", "Git"]}
                onChange={onChoiceSelection}
            />
            <QuizQuestion
                question="How experienced are you?"
                choices={["Beginner", "Intermediate", "Advanced"]}
                onChange={onChoiceSelection}
            />
            <QuizQuestion
                question="What kind of resources do you prefer?"
                choices={["Video", "Article", "Game", "Documentation"]}
                onChange={onChoiceSelection}
            />
            <QuizQuestion
                question="What's your ideal timeline?"
                choices={["3 days", "1 week", "2 weeks", "1 month"]}
                onChange={onChoiceSelection}
            />
            <QuizQuestion
                question="How long do you want to spend learning each week?"
                choices={["2 hours", "5 hours", "10 hours", "20 hours"]}
                onChange={onChoiceSelection}
            />
            <SolidButton
                className="goto-pathway-button"
                text="Generate"
                onClick={() => navigate("/pathway")}
            />
        </div>

    );
};

export default Quiz;