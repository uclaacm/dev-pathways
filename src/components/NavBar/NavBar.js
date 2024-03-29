import React from 'react';
import './NavBar.css';
import logo from './acm_logo.svg';
import IconButton from '../IconButton/IconButton';
import ResourceButton from '../ResourceButton/ResourceButton';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
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
                <div className="element-container resource-btn">
                    <ResourceButton
                        text="Resources"
                        onClick={() => navigate("/archive")}
                    />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
