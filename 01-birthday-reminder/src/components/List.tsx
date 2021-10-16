import React from 'react';
import { Col, Image, Row} from "react-bootstrap";

type  ListProps = {
    items: {
        id: number
        name: string
        age: number
        image: string
    }[]
}

const List: React.FC<ListProps> = (props) => {
    return (
        <Row xs={12} className='d-flex flex-column align-items-center m-0'>
            {props.items.map(item => {
                return (
                    <Row lg={12} key={item.id} className='d-flex align-items-center justify-content-evenly mb-2 '>
                      <Col xs={12} lg={6} className='image'>
                          <Image src={item.image} alt={item.name} roundedCircle className='image'/>
                      </Col>
                      <Col xs={12} lg={6}>
                          <h4>{item.name}</h4>
                          <p>{item.age}</p>
                      </Col>
                    </Row>
                );
            })}
        </Row>
    );
};

export default List;
