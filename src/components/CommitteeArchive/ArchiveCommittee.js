import React from "react";
import ArchiveTopicList from "./ArchiveTopicList";
import resources from '../../data/resources';

const ArchiveCommittee = (props) => {
    let {committeeName} = props;
    let filteredList = resources.map((item) => {
        return {
            category: item.category,
            links: item.links.filter((link) => link.source === committeeName), 
        };
    });

    return (
        <div>
            <h2>{committeeName}</h2>
            {filteredList.map((item) => {
                return(item.links[0] &&
                    <ArchiveTopicList topicName={item.category} resourceList={item.links} />
                );
            })}
        </div>
    );
}

export default ArchiveCommittee;