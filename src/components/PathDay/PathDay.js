import React from 'react';
import './PathDay.css';

const PathDay = ({ index, resource }) => {
    const splitIndex = resource.name.indexOf("|");
    const source = resource.name.slice(0, splitIndex);
    const title = resource.name.slice(splitIndex + 1);

    return (
        <div className="pathway-day">
            <div className="pathway-resource-card">
                <img alt="Resource icon" src={resource.icon} />
                <h3>{title}</h3>
                {source}
            </div>
            <div className="pathway-info">
                <h2>Day {index}</h2>
                {resource.description}
                <div className="pathway-difficulty">
                    {resource.difficulty}
                    {resource.video != null && <span> • <a href={resource.video}>video</a></span>}
                    {resource.article != null && <span> • <a href={resource.article}>article</a></span>}
                    {resource.game != null && <span> • <a href={resource.game}>game</a></span>}
                    {resource.documentation != null && <span> • <a href={resource.documentation}>documentation</a></span>}
                </div>
            </div>
        </div>
    );
};

export default PathDay;