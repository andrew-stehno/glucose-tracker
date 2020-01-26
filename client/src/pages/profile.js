import ProfileCard from "../components/ProfileCard/ProfileCard";
import Form from "../components/Form/Form";
import React from "react";
import { Row, Container, Col } from "reactstrap";

const Profile = () => {
  return (
    <Container>
      <h1>hello</h1>
      <Row>
        <Col md="2">
          <ProfileCard />
        </Col>
        <Col md="10">
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
