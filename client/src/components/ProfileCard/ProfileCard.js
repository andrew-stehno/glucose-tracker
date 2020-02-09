import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
// import "./ProfileCard.css";

const ProfileCard = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (

        <Card className="profileCard">
          <CardImg top width="30%" src={user.picture} alt="User google image" />
          <CardBody id="body">
            <CardTitle className="profileTitle">{user.name}</CardTitle>
            <CardSubtitle className="profileEmail">{user.email}</CardSubtitle>
            {/* <CardText><code>{JSON.stringify(user, null, 2)}</code></CardText> */}
          </CardBody>
        </Card>
  );
};

export default ProfileCard;