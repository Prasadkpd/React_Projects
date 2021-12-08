import React, {useState} from 'react';
import PointApp from "./component/PointApp";
import {ITeam} from "./types/Types";

const TeamApp: React.FC = () => {

    const [teams, setTeams] = useState<ITeam[] | null> (null);
    const handleOnTeamChange = (teams: ITeam[]) => {
      setTeams(teams);
    }

    return (
        <PointApp onTeamChange={handleOnTeamChange} teams={teams}/>
    );
};

export default TeamApp;
