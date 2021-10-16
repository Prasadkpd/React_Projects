import React from 'react';
import './assets/scss/main.scss'
import {Container} from "react-bootstrap";
import BirthdayApp from "./components/BirthdayApp";

function App() {
  return <Container fluid={true} className="app d-flex align-items-center justify-content-center">
        <BirthdayApp/>
        </Container>
}

export default App;
