import React from 'react';
import './NavBar.css';
import LogoButton from '../LogoButton/LogoButton';
import DropDownButton from '../DropDownButton/DropDownButton';

const NavBar = () => {
    return (
        <div className="container">
            <div className="element-container">
                <LogoButton/>
            </div>
            <div className="element-container">
                <DropDownButton/>
            </div>
            
        </div>
    );
}

export default NavBar;