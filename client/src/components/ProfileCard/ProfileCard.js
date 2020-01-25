import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Row
} from 'reactstrap';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
      <Col md="4">
        <Card>
          <CardImg top width="100%" src={user.picture} alt="User google image" />
          <CardBody>
            <CardTitle>{user.name}</CardTitle>
            <CardSubtitle>{user.email}</CardSubtitle>
            <CardText>HEY FUCKER</CardText>
            <CardText><code>{JSON.stringify(user, null, 2)}</code></CardText>
          </CardBody>
        </Card>
      </Col>
  );
};

export default Profile;