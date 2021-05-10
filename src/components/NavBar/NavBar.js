import React, { useState } from 'react';
import './NavBar.css';
import logo from './acm_logo.svg';
import { resources, resourceRequestLink } from '../../data/resources';
import IconButton from '../IconButton/IconButton';
import DropDownButton from '../DropDownButton/DropDownButton';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import LinkButton from '../LinkButton/LinkButton';
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
                <div className="element-container">
                    <DropDownButton
                        text="Resources"
                        isExpanded={isMenuExpanded}
                        onClick={() => setMenuExpanded(prev => !prev)}
                    />
                    <LinkButton
                        text="Request New Resources"
                        url={resourceRequestLink}
                    />
                </div>
            </div>
            {isMenuExpanded ? <DropDownMenu resources={resources}/> : null}
        </div>
    );
}

export default NavBar;