import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./hero.css"


const Hero = (props) => {
  return (
    <div>
      <Jumbotron className="heroImg" fluid>
        <Container fluid>
          <h1 className="display-4 text">Welcome to SUGAR PIN</h1>
          <p className="lead">Your one stop for Diabetes help.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Hero;