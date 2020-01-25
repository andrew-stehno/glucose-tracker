import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const jumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to SUGAR PIN</h1>
          <p className="lead">Your one stop for Diabetes help.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default jumbotron;

  
