import React from 'react';
import {ITeam} from "../types/Types";
import {Col, ListGroup, Row} from "react-bootstrap";
import Team from "./Team";

type TeamListProps = {
    teams: ITeam[] | null,
    onAddClicked: (bool: boolean, index: number) => void,
    onReduceClicked: (bool: boolean, index: number) => void
}

const TeamList: React.FC<TeamListProps> = (props) => {

    const {teams, onAddClicked, onReduceClicked} = props

    return (
        <Row xs={12} className='pe-0 me-0 my-0 mb-1' >
            <Col xs={12} className='px-2'>
                {teams && <ListGroup className='m-0'>
                    {teams.sort((a,b)=> a.points > b.points ? -1 : 1)
                        .map((team:ITeam, index:number) =>{
                        return (
                            <ListGroup.Item key={index} className='border-0 px-4 me-0 py-0 list-group' >
                                <Team team={team} index={index} onAddClicked={onAddClicked}
                                      onReduceClicked={onReduceClicked}/>
                            </ListGroup.Item>
                        )
                    })
                    }
                </ListGroup>}
            </Col>
        </Row>
    );
};

export default TeamList;
