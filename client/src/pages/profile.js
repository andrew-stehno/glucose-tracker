import ProfileCard from "../components/ProfileCard/ProfileCard";
import FormPage from "../components/InputForm/InputForm";
import React from "react";
import { Row, Container, Col } from "reactstrap";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md="3">
          <ProfileCard />
        </Col>
        <Col md="8">
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
