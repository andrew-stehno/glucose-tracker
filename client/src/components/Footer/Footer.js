import React from "react";
import { Container } from "reactstrap";
import "./Footer.css";

const footer = () => {
  return (
    <div color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          <p>
            Copyright Andrew Stehno, Matt Wigdahl, Luke Pettit, Tyler Stewart
            &copy;
          </p>
          <p className="disclaimer">
            WARNING!!! The Content is not intended to be a substitute for
            professional medical advice, diagnosis, or treatment. Always seek
            the advice of your physician or other qualified health provider with
            any questions you may have regarding a medical condition.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default footer;
