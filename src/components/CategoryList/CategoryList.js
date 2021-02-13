import React from 'react';
import './CategoryList.css';

//passing index as key is okay since list is static, would need to use a unique id if list is not static
const CategoryList = props => {
    return (
        <div className="category-list">
            <span className="list-head">{props.category}</span>
            {props.resources.map((resource, index) => {
                if (index < 5) {
                    let url;
                    if (resource.video) url = resource.video;
                    else if (resource.article) url = resource.article;
                    else if (resource.doc) url = resource.doc;
                    else if (resource.interactive) url = resource.interactive;
    
                    return (
                        <a href={url} target="_blank" rel="noopener noreferrer" key={index}> 
                            {resource.name}
                        </a>
                    );
                }
            })}
        </div>  
    );
}

export default CategoryList;