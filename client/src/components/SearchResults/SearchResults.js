import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardHeader
} from "reactstrap";
import "./style.css";
import { Link } from "react-router-dom";

function SearchResults(props) {
  return (
    <Container>
      {props.editData.length ? (
        <ListGroup>
          {props.editData.map(info => (
            <ListGroupItem className="p-0 mb-5">
              <Card className="mb-3">
                <CardHeader>
                  {" "}
                  <strong>Date:</strong> {info.calender[0]},{" "}
                  <strong>Time:</strong> {info.date}, <strong>Value:</strong>{" "}
                  {info.value}
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    <strong>Manage Item:</strong>
                    <Button color="danger" onClick={() => props.delete(info.id)}>
                      X
                    </Button>
                    <Link
                      className="btn-primary btn mr-2"
                      to={"/update/" + info.id}
                    >
                      Edit
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <h3 className="noData">There is no saved data for this date.</h3>
      )}
    </Container>
  );
}

export default SearchResults;
