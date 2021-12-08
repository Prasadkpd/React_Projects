import React from 'react';
import {Row} from "react-bootstrap";

const Header: React.FC = () => {
    return (
       <Row xs={12} className='border-1 border-dark mb-2'>
           <h2 className='fw-bold'>Team Point App</h2>
       </Row>
    );
};

export default Header;
