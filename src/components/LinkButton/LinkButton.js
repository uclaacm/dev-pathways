import React from 'react';
import Clickable from '../Clickable/Clickable';
import './LinkButton.css';

const LinkButton = props => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Clickable
            onClick={() => setTimeout(() => openInNewTab(props.url), 400)}
        >
            <div className="button-container button-blue">
                <span>{props.text}</span>
            </div>
        </Clickable>
    );
}

export default LinkButton;