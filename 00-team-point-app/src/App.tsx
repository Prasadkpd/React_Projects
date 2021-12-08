import React from 'react';
import {Container} from "react-bootstrap";
import TeamApp from "./TeamApp";

function App() {


  return (
      <Container fluid={true} className="app d-flex align-items-center justify-content-center">
        <TeamApp/>
      </Container>
  );
}

export default App;
