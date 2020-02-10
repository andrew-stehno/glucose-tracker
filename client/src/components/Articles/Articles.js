import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
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
                {/* <Row>
                  <Col  sm="4" lg="4" md="12">
                    <CardText className="cardTextMain">
                      {" "}
                      No matter where you are in your fight, here is where you
                      need to be. Whether you’ve been newly diagnosed, have been
                      fighting against type 1 or type 2 diabetes or
                      are helping a loved one, you’ve come to the right place.
                      This is the start of gaining a deeper understanding of how
                      you can live a healthier life—with all the tools, health
                      tips, and food ideas you need. Wherever you’re at with
                      this disease, know that you have options and that you
                      don’t have to be held back. You can still live your best
                      life, all you have to do is take action and stick with it.
                    </CardText>
                  </Col>
                </Row> */}
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
