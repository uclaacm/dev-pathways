import React, { useState } from "react";
import DropDownButton from "../DropDownButton/DropDownButton";
import ResourceItem from "../ResourceItem/ResourceItem";

const ArchiveTopicList = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);
    let {topicName, resourceList} = props;

    return (
        <div>
            <DropDownButton 
                onClick={()=>{setIsExpanded(!isExpanded)}} 
                isExpanded={isExpanded}
                text={topicName} />
            {isExpanded && 
                resourceList.map((link) => {
                    return <ResourceItem link={link} />
                })}
        </div>
        );
}

export default ArchiveTopicList;