import ProfileCard from "../components/ProfileCard/ProfileCard";
import React, { Component } from "react";
import API from "../utils/API";
import {
  Row,
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";

class Update extends Component {
  state = {
    updatedGlucose: "",
    records: {},
    date: "",
    time: ""
  };

  componentDidMount() {
    this.getRecord();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.updatedGlucose);
  };

  getRecord() {
    API.getOneRecord(this.props.match.params.id)
      .then(res => {
        this.setState({
          records: res.data
        });
        let date = this.state.records.date.split("T", 1);
        let time = this.state.records.date.split(".", 1);
        let newTime = time[0].split("T");
        this.setState({ date: date, time: newTime[1] });
      })
      .catch(err => console.log(err));
  }

  editRecord = id => {
    const newData = {
      date: this.state.records.date,
      glucose: this.state.updatedGlucose
    };
    console.log(id)
    console.log(newData);
    API.updateRecord(
      id,
      newData
    )
      .then(res => {
        this.setState({updatedGlucose: ""})
        this.getFromDatabase(id);
      })
      .catch(err => console.log(err));
  };

  getFromDatabase = id => {
    API.getOneRecord(id)
      .then(res => {
        this.setState({
          records: res.data
        });
        console.log(this.state.records)
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
            <strong>Date:</strong> {this.state.date}, <strong>Time:</strong>{" "}
            {this.state.time}, <strong>Value:</strong>{" "}
            {this.state.records.glucose}
            <p>Enter an updated value below:</p>
            <Form>
              <FormGroup>
                <Input
                  name="updatedGlucose"
                  value={this.state.updatedGlucose}
                  onChange={this.handleInputChange}
                  placeholder={"Updated glucose value"}
                />
                <Button onClick={() => this.editRecord(this.state.records._id)}>
                  Update
                </Button>
              </FormGroup>
            </Form>
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
