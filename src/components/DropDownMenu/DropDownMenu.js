import React from 'react';
import "./DropDownMenu.css"
import "../CategoryList/CategoryList";
import CategoryList from '../CategoryList/CategoryList';

//passing index as key is okay since list is static, would need to use a unique id if list is not static
const DropDownMenu = props => {
    return (
        <div className="menu categories-grid">
            {props.resources.map((resource, index) => {
                return <CategoryList 
                    category={resource.category}
                    resources={resource.links}
                    key={index} 
                />
            })}
        </div>
    );
}

export default DropDownMenu;