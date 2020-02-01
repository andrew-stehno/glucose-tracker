import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";

function SearchResults(props) {
  return (
      <Container>
      {props.editData.length ? (
        <ListGroup>
          {props.editData.map(info => (
            <ListGroupItem>
                <strong>Date:</strong> {info.calender[0]}, <strong>Time:</strong> {info.date}, <strong>Value:</strong> {info.value}
                <Button onClick={() => props.delete(info.id)}>Delete</Button>
                <Button>Edit</Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <h3>Empty Yo!</h3>
      )}
    </Container>
  );
}

export default SearchResults;
