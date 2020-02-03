import ProfileCard from "../components/ProfileCard/ProfileCard";
import React, { Component } from "react";
import API from "../utils/API";
import { Row, Container, Col, Button, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

class Update extends Component {
  state = {
    records: {}
  };

  componentDidMount() {
    this.getRecord()
  };

  getRecord() {
    API.getOneRecord(this.props.match.params.id)
      .then(res => {
        this.setState({
          records: res.data
        });
        console.log(this.state.records);
      })
      .catch(err => console.log(err));
  }

  editRecord = id => {
    API.updateRecord({
      id,
      glucose: this.state.update
    })
      .then(res => {
        this.getFromDatabase();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="3">
            <ProfileCard />
          </Col>
          <Col md="9">
            {/* <Form>
              <Input
                id="update"
                type="text"
                name="update"
                placeholder="Enter updated glucose value here."
                {...props}
              />
              <Button onClick={() => props.editRecord(info.id)}>Update</Button>
            </Form> */}
          </Col>
        </Row>
        <Row>
          <Link to={"/Search"}>Back to Search Page.</Link>
        </Row>
      </Container>
    );
  }
}

export default Update;
