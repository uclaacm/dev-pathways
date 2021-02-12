import React from 'react';
import './CategoryList.css';

//passing index as key is okay since list is static, would need to use a unique id if list is not static
const CategoryList = props => {
    return (
        <div className="category-list">
            <span className="list-head">{props.category}</span>
            {props.resources.map((resource, index) => {
                return <a href={resource.url} target="_blank" rel="noopener noreferrer" key={index}> 
                    {resource.name}
                </a>
            })}
        </div>  
    );
}

export default CategoryList;