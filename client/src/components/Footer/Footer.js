import React from "react";
import { Col, Container, Row } from "reactstrap";

const footer = (props) => {
  return (
    <div color="blue" className="font-small pt-4 mt-4">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">Resources</h5>
            <p>
            No matter where you are in your fight, here’s where you need to be. Whether you’ve 
            been newly diagnosed, have been fighting against type 1 or type 2 diabetes for a while, 
            or are helping a loved one, you’ve come to the right place. This is the start of gaining a 
            deeper understanding of how you can live a healthier life—with all the tools, 
            health tips, and food ideas you need. Wherever you’re at with this disease, know 
            that you have options and that you don’t have to be held back. You can still live your best life. 
            All you have to do is take action and stick with it.
            </p>
          </Col>
          <Col md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.diabetes.org/">https://www.diabetes.org/</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.cdc.gov/diabetes/index.html">https://www.cdc.gov/diabetes/index.html</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.diabetesselfmanagement.com/">https://www.diabetesselfmanagement.com/</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.diabetesdaily.com/">https://www.diabetesdaily.com/</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          <p>Copyright:Andrew Stehno, Matt Wigdahl, Luke Pettit, Tyler Stewart</p>
        </Container>
      </div>
    </div>
  );
}

export default footer;