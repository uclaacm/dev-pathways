import React, { useState } from "react";
import DropDownButton from "../DropDownButton/DropDownButton";

const ArchiveTopicList = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);
    let {topicName, resourceList} = props;

    return (
        <div>
            <DropDownButton 
                onClick={()=>{setIsExpanded(!isExpanded)}} 
                isExpanded={isExpanded}
                text={topicName} />
            {isExpanded ? 
                resourceList.map((link) => {
                    return <p>{link.name}</p>
                })
                : null}
        </div>
        );
}

export default ArchiveTopicList;