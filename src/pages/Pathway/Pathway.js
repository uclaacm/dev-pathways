import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import PathwayHeader from '../../img/pathway-header.svg';
import './Pathway.css';

const Pathway = () => {
    return (
        <PageHeader
            header="Your Pathway"
            subheader="react  •  beginner  •  videos  •  1 week"
            img={PathwayHeader}
            imgStyle={{
                backgroundSize: "423px 297px",
                backgroundPosition: "100%",
            }}
        />
    );
};

export default Pathway;