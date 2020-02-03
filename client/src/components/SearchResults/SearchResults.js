import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Input,
  Button,
  Form
} from "reactstrap";
import "./style.css";
import { Link } from "react-router-dom";

function SearchResults(props) {
  return (
    <Container>
      {props.editData.length ? (
        <ListGroup>
          {props.editData.map(info => (
            <ListGroupItem>
              <Link to={"/update/" + info.id}>
                Click here to update your value.
              </Link>
                {" "}<strong>Date:</strong> {info.calender[0]},{" "}
                <strong>Time:</strong> {info.date}, <strong>Value:</strong>{" "}
                {info.value}
              <Button onClick={() => props.delete(info.id)}>Delete</Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <h3>There is no saved data for this date.</h3>
      )}
    </Container>
  );
}

export default SearchResults;
