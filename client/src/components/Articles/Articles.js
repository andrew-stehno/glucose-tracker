import React from "react";
import {
    Card, CardImg, CardText,
    CardTitle, Container, Col, Row, 
    CardImgOverlay 
  } from 'reactstrap';

const Article = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="12">
                    <Card inverse className="mt-5">
                        <CardImg width="100%" src="https://www.niddk.nih.gov/-/media/Images/Health-Information/Diabetes/diabetes-monitor-fruits-vegetables-small.png?la=en&hash=49F9B6874C5B57A4F87DCF5973301470" alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle>DuhBeatis</CardTitle>
                        <CardText>lorem
                            kdmnfgksjdnfksjdnfsdbhfnksjdnfbkjsbh
                        </CardText>
                        </CardImgOverlay>
                    </Card>
                    </Col>
                    </Row>
            </Container>
        </div>
      );
}

export default Article