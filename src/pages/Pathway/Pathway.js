import React, {useContext} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PathwayHeader from '../../img/pathway-header.svg';
import PathDay from '../../components/PathDay/PathDay';
import ComeBackFeedback from '../../components/ComeBackFeedback/ComeBackFeedback';
import QuizContext from '../Quiz/QuizContext';
import resources from '../../data/resources';
import './Pathway.css';

const Pathway = () => {
    // inside create pathway function have something like :
    // setPathway(example_resources ? example_resources : pathway); // if a new one is generated, take it; otherwise take the last one generated
    const {quizResults} = useContext(QuizContext);
    // start from here...
    console.log(quizResults);

    let pathway = localStorage.getItem('pathwayData') ? JSON.parse(localStorage.getItem('pathwayData')) : resources[2].links; 

    const finalPathway = resources[4].links; // remove this line once the function is created to take care of it
    localStorage.setItem('pathwayData', JSON.stringify(finalPathway)); // this sets the initial one to be displayed
    return (
        <div className="pathway-page">
            <PageHeader
                header="Your Pathway"
                subheader="react  •  beginner  •  videos  •  1 week"
                img={PathwayHeader}
                imgStyle={{
                    backgroundSize: "423px 297px",
                    backgroundPosition: "100%",
                }}
            />
            {pathway.map((resource, index) => 
                <PathDay index={index + 1} resource={resource} />
            )}

            <ComeBackFeedback/>

        </div>
    );
};

export default Pathway;
