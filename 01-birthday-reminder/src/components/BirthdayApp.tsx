import React, {useState} from 'react';
import Datalist from "./Datalist";
import {Button, Row} from "react-bootstrap";
import List from "./List";

const BirthdayApp: React.FC = () => {
    const [people,setPeople] = useState(Datalist)
    return (
        <Row xs={12} lg={8} className='d-flex flex-column justify-content-center app-container text-center'>
            <Row lg={12} className='my-1'>
                <h3>{people.length} birthdays today</h3>
            </Row>
            <List items={people}/>
            <Row xs={3} className='d-flex flex-column align-items-center'>
                <Button className='btn-dark p-1 my-2' onClick={() => setPeople([])}>Clear All</Button>
            </Row>
        </Row>
    );
};

export default BirthdayApp;
