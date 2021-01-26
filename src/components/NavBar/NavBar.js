import React from 'react';
import './NavBar.css';
import logo from './acm_logo.svg';
import IconButton from '../IconButton/IconButton';
import DropDownButton from '../DropDownButton/DropDownButton';

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="element-container">
                <IconButton 
                    text="Dev Pathways" 
                    icon={logo}
                    alt="acm logo"
                    onClick={() => console.log("click logo!")}/>
            </div>
            <div className="element-container">
                <DropDownButton
                    text="Resources"
                    onClick={() => console.log("click resources!")}
                />
            </div>
            
        </div>
    );
}

export default NavBar;