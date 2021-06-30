import React from 'react';
import './PageHeader.css';


const PageHeader = ({header, subheader, img}) => {
    const backgroundStyle = {
        backgroundImage: `url(${img})`
    }

    return (
        <div className="page-header-container" style={backgroundStyle}>
            <h1>{header}</h1>
            {subheader}
        </div>
    );
}

export default PageHeader;
