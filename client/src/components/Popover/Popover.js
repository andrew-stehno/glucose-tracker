import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { useAuth0 } from "../../react-auth0-spa";

const ProfilePopover = (props) => {

const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;

}
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>{user.name}</PopoverHeader>
        <PopoverBody>{user.email}</PopoverBody>
      </Popover>
    </div>
  );
}

export default ProfilePopover;