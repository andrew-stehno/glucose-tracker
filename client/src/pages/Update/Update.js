import ProfileCard from "../../components/ProfileCard/ProfileCard";
import React, { Component } from "react";
import API from "../../utils/API";
import {
  Row,
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { Link, Redirect, BrowserRouter } from "react-router-dom";
import "moment-timezone";
import moment from "moment-timezone";
import "./update.css";

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
  };


  getRecord() {
    API.getOneRecord(this.props.match.params.id)
      .then(res => {
        this.setState({
          records: res.data
        });
        const timeStamp = moment
          .utc(this.state.records.date)
          .tz("America/Denver")
          .format();
        let date = timeStamp.split("T", 1);
        let dateX = date[0].split("-");
        let dateY = dateX.reverse();
        let newDate = dateY.join("-");
        let time = timeStamp.split(".", 1);
        let timeX = time[0].split("T");
        let timeY = timeX[1].split(":", 2);
        let newTime = timeY.join(":");
        this.setState({ date: newDate, time: newTime });
      })
      .catch(err => console.log(err));
  }

  editRecord = id => {
    const newData = {
      date: this.state.records.date,
      glucose: this.state.updatedGlucose
    };
    API.updateRecord(id, newData)
      .then(res => {
        this.setState({ updatedGlucose: "" });
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
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <ProfileCard/>
          </Col>
          <Col md="8">
            <strong>Date:</strong> {this.state.date}, <strong>Time:</strong>{" "}
            {this.state.time}, <strong>Value:</strong>{" "}
            {this.state.records.glucose}
            <p><strong>Enter an updated value below:</strong></p>

            <Form>
              <FormGroup>
                <Input id="updateGlucose"
                  name="updatedGlucose"
                  value={this.state.updatedGlucose}
                  onChange={this.handleInputChange}
                  placeholder={"Updated glucose value"}

                />

                <Button id="button" onClick={() => this.editRecord(this.state.records._id)}>
                  Update
                </Button>
                <Link id="link" to={"/Search"}>Back to Search Page.</Link>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Update;








