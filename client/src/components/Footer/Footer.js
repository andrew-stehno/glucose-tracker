import React from "react";
import { Col, Container, Row } from "reactstrap";

const footer = () => {
  return (
    <div color="blue" className="font-small pt-4 mt-4">
      <Container className="text-center text-md-left">
        <Row>
          <Col md="4">
            <h5 className="title"></h5>
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
          <Col md="4">
          <h5 className="title">Resources</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.diabetesselfmanagement.com/education/diabetes-101/" target="_blank">Diabetes 101</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.diabetesdaily.com/blog/diabetes-eye-screenings-why-they-are-important-and-challenging-639862/" target="_blank">Diabetes and your eyes</a>
              </li>
              <li className="list-unstyled">
                <a href="https://diatribe.org/diabetes-blogs-and-forums" target="_blank">diaTribe Learn</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.cdc.gov/diabetes/basics/diabetes.html" target="_blank">The Basics</a>
              </li>
            </ul>
          </Col>
          <Col md="4">
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
          <p>Copyright Andrew Stehno, Matt Wigdahl, Luke Pettit, Tyler Stewart &copy;</p>
          <p className="disclaimer">WARNING!!! The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
        </Container>
      </div>
    </div>
  );
}

export default footer;