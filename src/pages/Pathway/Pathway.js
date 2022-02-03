import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PathwayHeader from '../../img/pathway-header.svg';
import PathDay from '../../components/PathDay/PathDay';
import ComeBackFeedback from '../../components/ComeBackFeedback/ComeBackFeedback';
import './Pathway.css';

import resources from '../../data/resources';

const Pathway = () => {
    const example_resources = resources[3].links;

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
            {example_resources.map((resource, index) => 
                <PathDay index={index + 1} resource={resource} />
            )}

            <ComeBackFeedback/>

        </div>
    );
};

export default Pathway;
