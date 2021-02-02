import React, { useState } from 'react';
import './NavBar.css';
import logo from './acm_logo.svg';
import resources from '../../data/resources';
import IconButton from '../IconButton/IconButton';
import DropDownButton from '../DropDownButton/DropDownButton';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const NavBar = () => {
    const [isMenuExpanded, setMenuExpanded] = useState(false);

    return (
        <div>
            <div className="nav-container">
                <div className="element-container">
                    <IconButton
                        text="Dev Pathways"
                        icon={logo}
                        alt="acm logo"
                        onClick={() => console.log("click logo!")} />
                </div>
                <div className="element-container">
                    <DropDownButton
                        text="Resources"
                        isExpanded={isMenuExpanded}
                        onClick={() => setMenuExpanded(prev => !prev)}
                    />
                </div>
            </div>
            {isMenuExpanded ? <DropDownMenu resources={resources}/> : null}
        </div>
    );
}

export default NavBar;