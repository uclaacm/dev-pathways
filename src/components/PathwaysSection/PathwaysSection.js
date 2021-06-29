import React from 'react';
import './PathwaysSection.css';
import SolidButton from '../SolidButton/SolidButton';
import pathway1 from './pathway1.svg';

const PathwaysSection = () => {
    return (
        <div className="pathway-section">
            <h2>Your Pathway</h2>
            <div className="pathway-container">
                <img src={pathway1} alt=""/>
                <div className="pathway-info">
                    Want to learn a technology but never know where to start? Dev Pathways will guide you through it! Simply answer a few questions and we'll take care of the rest. 

                    <br/><br/>
                    
                    Based on your answers, a unique learning pathway will be generated for you, full of resources created by ACM members as well as externally created resources! If you're a new developer at ACM, welcome to the team.
                    <SolidButton className="gen-pathway-button" text="Generate"/>
                </div>
            </div>
        </div>
    );
}

export default PathwaysSection;