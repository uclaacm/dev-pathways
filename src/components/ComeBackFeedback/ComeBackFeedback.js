import React from 'react';
import SolidButton from '../SolidButton/SolidButton';
import feedback from '../../img/feedback.svg';
import comeBackLater from '../../img/comeBackLater.svg';
import './ComeBackFeedback.css';

const ComeBackFeedback = () => {
    return (
        <div className="comeback-feedback">

            <h2>Come back later?</h2>
            <p>
                You can come back later and your pathway will be saved! 
                <br/> 
                Alternatively, you can start over or export it.
            </p>

            <img src={comeBackLater} alt="come back later image"/>

            <img src={feedback} alt="feedback image"/>

            
            

            <h2>Have any feedback?</h2>
            <p>We want to hear from you!</p>

            <SolidButton
                className="contact-us-button"
                text="Contact Us"
                onClick={() => {}}
            />

            
            
        </div>
    );
};

export default ComeBackFeedback;