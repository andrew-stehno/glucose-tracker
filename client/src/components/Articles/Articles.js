import React from "react";
import {
  Card,
  CardImg,
  CardText,
  Container,
  Col,
  Row,
  CardImgOverlay
} from "reactstrap";
import "./article.css";

const Article = props => {
  return (
    <div>
      <Container>
        <Row>
          <Col md="8">
            <Card inverse className="mt-5">
              <CardImg
                width="100%"
                src="https://www.niddk.nih.gov/-/media/Images/Health-Information/Diabetes/diabetes-monitor-fruits-vegetables-small.png?la=en&hash=49F9B6874C5B57A4F87DCF5973301470"
                alt="Card image cap"
                className="cardImg mx-auto"
              />
              <CardImgOverlay>
                <Row>
                  <Col sm="4" lg="4" md="12">
                    <CardText className="cardTextMain">
                      <p className="titleText"> Welcome To Sugar Pin!</p>
                      <p className="titleBody">
                        Please sign in to track your blood sugar levels!
                      </p>
                    </CardText>
                  </Col>
                </Row>
                {/* <CardTitle>Example</CardTitle> */}
              </CardImgOverlay>
            </Card>
          </Col>
          <Col md="2">
            <h5 className="title mt-5">Resources</h5>
            <ul>
              <li className="list-unstyled">
                <a
                  href="https://www.diabetesselfmanagement.com/education/diabetes-101/"
                  target="_blank" rel="noopener noreferrer"
                >
                  Diabetes 101
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.diabetesdaily.com/blog/diabetes-eye-screenings-why-they-are-important-and-challenging-639862/"
                  target="_blank" rel="noopener noreferrer"
                >
                  Diabetes and your eyes
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://diatribe.org/diabetes-blogs-and-forums"
                  target="_blank" rel="noopener noreferrer"
                >
                  diaTribe Learn
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.cdc.gov/diabetes/basics/diabetes.html"
                  target="_blank" rel="noopener noreferrer"
                >
                  The Basics
                </a>
              </li>
            </ul>

            <h5 className="title mt-5">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.diabetes.org/">
                  American Diabetes Association
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.cdc.gov/diabetes/index.html">
                  Center for Disease Control
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.diabetesselfmanagement.com/">
                  Diabetes Self Management
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.diabetesdaily.com/">Diabetes Daily</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Article;
