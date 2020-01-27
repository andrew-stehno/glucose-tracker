import ProfileCard from "../components/ProfileCard/ProfileCard";
import FormPage from "../components/InputForm/InputForm";
import React from "react";
import { Row, Container, Col } from "reactstrap";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md="2">
          <ProfileCard />
        </Col>
        <Col md="10">
          <FormPage />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
