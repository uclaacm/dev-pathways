import React, { useState } from 'react';
import './NavBar.css';
import logo from './acm_logo.svg';
import resources from '../../data/resources';
import IconButton from '../IconButton/IconButton';
import DropDownButton from '../DropDownButton/DropDownButton';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [isMenuExpanded, setMenuExpanded] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className="nav-container">
                <div className="element-container">
                    <IconButton
                        text="Dev Pathways"
                        icon={logo}
                        alt="acm logo"
                        onClick={() => navigate("/")} />
                </div>
                
                <div className="element-container resouce-btn">
                    <DropDownButton
                        text="Resources"
                        isExpanded={isMenuExpanded}
                        onClick={() => setMenuExpanded(prev => !prev)}
                    />
                </div>
                
                <button className={isMenuExpanded ? 'active' : ''} id="hamburger" type="button" onClick={() => setMenuExpanded(prev => !prev)} aria-label="navigation menu" aria-expanded={isMenuExpanded} tabIndex="0">
                    <span className="bar" id="bar-one"></span>
                    <span className="bar" id="bar-two"></span>
                    <span className="bar" id="bar-three"></span>
                </button>
            </div>
            {isMenuExpanded ? <DropDownMenu resources={resources} /> : null}


        </div>
    );
}

export default NavBar;
