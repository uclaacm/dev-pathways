import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PathwayHeader from '../../img/pathway-header.svg';
import PathDay from '../../components/PathDay/PathDay';
import './Pathway.css';

import resources from '../../data/resources';

const Pathway = () => {
    // will probably need props to know when to use the function to create a new pathway, not positive though
    const [pathway, setPathway] = useState(
        JSON.parse(localStorage.getItem('pathwayData')) ? JSON.parse(localStorage.getItem('pathwayData')) : resources[2].links
    ); 
    // here there will be a function that creates a list of resource objects, called upon hitting the
    // generate a pathway button
    // inside function have something like :
    // setPathway(example_resources ? example_resources : pathway); // if a new one is generated, take it; otherwise take the last one generated
    const finalPathway = resources[4].links; // remove this line once the function is created to take care of it
    localStorage.setItem('pathwayData', JSON.stringify(finalPathway)); // this sets the initial one to show
    
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
            <h2>Come back later?</h2>
            <p3>You can come back later and your pathway will be saved! Alternatively,
                 you can <a href="/quiz" rel="noreferrer noopener">start over</a>.</p3>

        </div>
    );
};

export default Pathway;
