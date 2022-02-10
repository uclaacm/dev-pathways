import React from 'react';
import teams from '../../data/teams'
import ArchiveList from '../ArchiveList/ArchiveList';
import TeamButton from '../TeamButton/TeamButton'
import "./ArchiveBody.css";

function ArchiveBody() {
  return (
    <div className='ArchiveBody'>
        <div className='button-col'>
            {teams.map((team) => (team.name !== "board") && 
            <TeamButton
                className = 'team-button'
                icon = {team.logotype}
                alt = {team.name}
                onClick = {() => (console.log("click"))}
            />)}
        </div>
        <div className='list-content'>
            <div className='static-bar'></div>
            <h4 className='list-content-header'>Committee</h4>
            <ArchiveList />
        </div>
    </div>
  );
}

export default ArchiveBody;
