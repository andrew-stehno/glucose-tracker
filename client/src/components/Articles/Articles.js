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
          <Col md="12">
            <Card inverse className="mt-5">
              <CardImg
                width="100%"
                src="https://www.niddk.nih.gov/-/media/Images/Health-Information/Diabetes/diabetes-monitor-fruits-vegetables-small.png?la=en&hash=49F9B6874C5B57A4F87DCF5973301470"
                alt="Card image cap"
                className="cardImg"
              />
              <CardImgOverlay>
                <Row>
                  <Col sm="4" lg="4" md="12">
                    <CardText className="cardTextMain">
                      <h1 className="titleText">
                        {" "}
                        Welcome To Sugar Pin! &reg;
                        <br />
                        Please sign in to track your blood sugar levels!
                      </h1>
                    </CardText>
                  </Col>
                </Row>
                {/* <CardTitle>Example</CardTitle> */}
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Article;
