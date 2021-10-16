import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import Header from "./Header";
import Team from "./Team";
import {ITeam} from "../types/Types";
import AddTeam from "./AddTeam";
import TeamList from "./TeamList";
import CreateTeamForm from "./CreateTeamForm";
import PointAddForm from "./PointAddForm";
import PointReduceForm from "./PointReduceForm";

type PointAppProps = {
    onTeamChange: (teams : ITeam[]) => void,
    teams: ITeam[] | null
}

const PointApp: React.FC<PointAppProps> = (props) => {

    const {onTeamChange, teams} = props;
    const [isShowTeamCreateForm, setIsShowTeamCreateForm] = useState<boolean>(false);
    const [isShowPointAddForm, setIsShowPointAddForm] = useState<boolean>(false);
    const [isShowPointReduceForm, setIsShowPointReduceForm] = useState<boolean>(false);
    const [addClicked, setAddClicked] = useState<boolean>(false);
    const [reduceClicked, setReduceClicked] = useState<boolean>(false);
    const [teamToAddPoint, setTeamToAddPoint] = useState<number | null>(null);
    const [team, setTeam] = useState<string>('');


    const handleShowCreateTeamForm = () => {
        setIsShowTeamCreateForm(true);
    }

    const handleCloseCreateTeamForm = () => {
      setIsShowTeamCreateForm(false)
    }

    const handleShowAddPointForm = (bool: boolean, index: number) => {
      setIsShowPointAddForm(true);
      setAddClicked(true);
      setTeamToAddPoint(index);
    }

    const handleCloseAddPointForm = () => {
        setIsShowPointAddForm(false);
    }

    const handleShowReducePointForm = (bool: boolean, index: number) => {
        setIsShowPointReduceForm(true);
        setReduceClicked(true);
        setTeamToAddPoint(index);
    }

    const handleCloseReducePointForm = () => {
        setIsShowPointReduceForm(false);
    }
    
    const handleCreateTeamSubmit = (newTeam: ITeam) => {
      const newTeamList:ITeam[] = teams ? teams.slice() : [];
      newTeamList.push(newTeam);
      onTeamChange(newTeamList);
      setIsShowTeamCreateForm(false);
    }

    const handleOnIncreasePoint = (newTeam: ITeam) => {
      const newTeamList: ITeam[] = teams ? teams.slice() : [];
      if (teamToAddPoint === null){
          return;
      }
        if (teams) {
            let point = teams[teamToAddPoint].points + newTeam.points;
            newTeamList[teamToAddPoint].points = point;
            onTeamChange(newTeamList);
        }
    }

    const handleOnReducePoint = (newTeam: ITeam) => {
        const newTeamList: ITeam[] = teams ? teams.slice() : [];
        if (teamToAddPoint === null){
            return;
        }
        if (teams) {
            let point = teams[teamToAddPoint].points - newTeam.points;
            newTeamList[teamToAddPoint].points = point;
            onTeamChange(newTeamList);
        }
    }

    useEffect(() => {
        if(teamToAddPoint === null || !teams){
            return;
        }
        setTeam(teams[teamToAddPoint].name);
    },[teams,teamToAddPoint]);

    return (
        <Row xs={12} md={8} lg={12} className='app-container d-flex flex-column align-items-center text-center'>
            <Header/>
            <TeamList teams={teams} onAddClicked={handleShowAddPointForm} onReduceClicked={handleShowReducePointForm}/>
            <AddTeam onAddClick={handleShowCreateTeamForm}/>
            {
                isShowTeamCreateForm && <CreateTeamForm onFormClose={handleCloseCreateTeamForm}
                                                        showFormPopup={isShowTeamCreateForm} 
                                                        onCreateTeamSubmit={handleCreateTeamSubmit}/>
            }
            {
                isShowPointAddForm && <PointAddForm onFormClose={handleCloseAddPointForm}
                                                    showFormPopup={isShowPointAddForm}
                                                    onAddPointSubmit={handleOnIncreasePoint}
                                                    teamNameForPoint={team}/>
            }
            {
                isShowPointReduceForm && <PointReduceForm onFormClose={handleCloseReducePointForm}
                                                          showFormPopup={isShowPointReduceForm}
                                                          onReducePointSubmit={handleOnReducePoint}
                                                          teamNameForPoint={team}/>
            }
        </Row>
    );
};

export default PointApp;
