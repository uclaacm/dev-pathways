import React from 'react';
import Pressable from '../Clickable/Clickable';

const LinkButton = props => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Pressable
            onClick={() => setTimeout(() => openInNewTab(props.url), 400)}
        >
            <div className="button-container">
                <span>{props.text}</span>
            </div>
        </Pressable>
    );
}

export default LinkButton;