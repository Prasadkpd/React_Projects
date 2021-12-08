import React from 'react';
import {Col, Row} from "react-bootstrap";
import {ITeam} from "../types/Types";
import { FaPlusCircle, FaMinusCircle} from "react-icons/fa";

type TeamProps = {
    team : ITeam,
    index: number,
    onAddClicked: (bool: boolean, index: number) => void,
    onReduceClicked: (bool: boolean, index: number) => void
}

const Team: React.FC<TeamProps> = (props) => {

    const {team, index, onAddClicked, onReduceClicked} = props

    return (
        <React.Fragment>
        <Row xs={12} className="ps-0 p-1 d-flex align-items-baseline team">
            <Col xs="10" className="ps-0 text-start">
                <h5 className="p-0">{index + 1}. {team.name}</h5>
            </Col>
            <Col xs="1" lg="1" className="text-end  p-1">
                <FaPlusCircle size={22} className='icon' onClick={() => onAddClicked(true,index)}/>
            </Col>
            <Col xs="1" lg="1" className="text-end  p-1">
                <FaMinusCircle size={22} className='icon' onClick={() => onReduceClicked(true,index)}/>
            </Col>
        </Row>
        <Row>
            <Col  lg={{span: 5, offset: 7}} className='text-end'>
                <h5>{team.points}</h5>
            </Col>
        </Row>
        </React.Fragment>
    );
};

export default Team;
