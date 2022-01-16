import React from 'react';
import './PageHeader.css';


const PageHeader = ({header, subheader, img, imgStyle}) => {
    const backgroundStyle = {
        backgroundImage: `url(${img})`,
        ...imgStyle
    }

    return (
        <div className="page-header-container" style={backgroundStyle}>
            <h1>{header}</h1>
            {subheader}
        </div>
    );
}

export default PageHeader;
