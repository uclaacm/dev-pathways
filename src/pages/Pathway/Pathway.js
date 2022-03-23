import React, {useContext} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PathwayHeader from '../../img/pathway-header.svg';
import PathDay from '../../components/PathDay/PathDay';
import QuizContext from '../Quiz/QuizContext';
import resources from '../../data/resources';
import './Pathway.css';

const Pathway = () => {
    const {quizResults} = useContext(QuizContext);
    console.log(quizResults);

    // Get resources matching desired category
    let resourcesByCategory = resources[0].links;   // Default to HTML/CSS track
    if (quizResults.category === "HTML/CSS") {
        resourcesByCategory = resources[0].links;
    }
    else if (quizResults.category === "Javascript") {
        resourcesByCategory = [...resources[1].links, ...resources[2].links];
    }
    else if (quizResults.category === "React") {
        resourcesByCategory = resources[3].links;
    }
    else if (quizResults.category === "Git") {
        resourcesByCategory = resources[4].links;
    }
    else if (quizResults.category === "Graphic Design") {
        resourcesByCategory = resources[5].links;
    }
    else if (quizResults.category === "Accessibility") {
        resourcesByCategory = resources[6].links;
    }
    else if (quizResults.category === "Product Management") {
        resourcesByCategory = resources[7].links;
    }

    // Put resources of desired type closer to top
    let resourcesByType = [...resourcesByCategory.filter((resource) => resource.video != null),
                           ...resourcesByCategory.filter((resource) => resource.video == null)];   // Default to Video
    if (quizResults.type === "Article") {
        resourcesByType = [...resourcesByCategory.filter((resource) => resource.article != null),
                           ...resourcesByCategory.filter((resource) => resource.article == null)];  
    }
    else if (quizResults.type === "Game") {
        resourcesByType = [...resourcesByCategory.filter((resource) => resource.game != null),
                           ...resourcesByCategory.filter((resource) => resource.game == null)];  
    }
    else if (quizResults.type === "Documentation") {
        resourcesByType = [...resourcesByCategory.filter((resource) => resource.documentation != null),
                           ...resourcesByCategory.filter((resource) => resource.documentation == null)];  
    }

    // Use line below if no need for progression (i.e., only display lessons that match user's current difficulty level)
    // let generatedResources = resourcesByCategory.filter((resource) => resource.difficulty === quizResults.difficulty);

    // Get resources from current difficulty level first, then more difficult resources as user progresses
    let generatedResources = [...resourcesByType.filter((resource) => resource.difficulty === "Beginner"), 
                              ...resourcesByType.filter((resource) => resource.difficulty === "Intermediate"),
                              ...resourcesByType.filter((resource) => resource.difficulty === "Advanced")];   // Default to Beginner
    if (quizResults.difficulty === "Intermediate") {
        generatedResources = [...resourcesByType.filter((resource) => resource.difficulty === "Intermediate"),
                              ...resourcesByType.filter((resource) => resource.difficulty === "Advanced")];
    }
    else if (quizResults.difficulty === "Advanced") {
        generatedResources = resourcesByType.filter((resource) => resource.difficulty === "Advanced");
    }

    // Determine how many lessons to display based on timeline
    let days = 30;   // Default to 1 month
    if (quizResults.time === "3 days") {
        days = 3;
    }
    else if (quizResults.time === "1 week") {
        days = 7;
    }
    else if (quizResults.time === "2 weeks") {
        days = 14;
    }

    return (
        <div className="pathway-page">
            <PageHeader
                header="Your Pathway"
                subheader={[quizResults.category, " • ", quizResults.difficulty, " • ", quizResults.type, " • ", quizResults.time]}
                img={PathwayHeader}
                imgStyle={{
                    backgroundSize: "423px 297px",
                    backgroundPosition: "100%",
                }}
            />
            {generatedResources.map((resource, index) => 
                index < days && <PathDay index={index + 1} resource={resource} />
            )}
            <h2>Come back later?</h2>
            <p3>You can come back later and your pathway will be saved! Alternatively,
                 you can <a href="/quiz" rel="noreferrer noopener">start over</a>.</p3>

        </div>
    );
};

export default Pathway;
