import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {FaPlus} from "react-icons/fa";

type AddTeamProps = {
    onAddClick : (clicked: boolean) => void
}

const AddTeam: React.FC<AddTeamProps> = (props) => {

    const {onAddClick} = props;

    return (
        <Row xs={12} className='me-2 mt-2'>
            <Col xs={12} lg={{span: 6, offset: 8}} >
                <Button className='d-flex align-items-center btn-dark' onClick={() =>onAddClick(true)}>
                    <FaPlus className='me-1'/><span>Add Team</span></Button>
            </Col>
        </Row>
    );
};

export default AddTeam;
