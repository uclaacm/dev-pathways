import React, {useState} from 'react';
import teams from '../../data/teams'
import TeamButton from '../TeamButton/TeamButton'
import ArchiveCommittee from '../CommitteeArchive/ArchiveCommittee'
import "./ArchiveBody.css";

function ArchiveBody() {

  const [committee, setCommittee] = useState("studio")

  const refArray = ["Studio", "ICPC", "Design", "Cyber", "Teach LA", "W", "AI", "Hack"]
  const sortedTeams = JSON.parse(JSON.stringify(teams))

  return (
    <div className='ArchiveBody'>
        <div className='button-col'>
            {sortedTeams.sort((a,b) => refArray.indexOf(a.name) - refArray.indexOf(b.name)).map((team) => (team.name !== "Board") && 
            <TeamButton
                className = 'team-button'
                icon = {team.logotype}
                alt = {team.name}
                onClick = {() => (setCommittee(team.name))}
            />)}
        </div>
        <div className='list-content'>
            <div className='static-bar'></div>
        </div>
        <ArchiveCommittee committeeName={committee}/>
    </div>
  );
}

export default ArchiveBody;
