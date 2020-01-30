import ProfileCard from "../components/ProfileCard/ProfileCard";
import DiabetesChart from "../components/DiabetesChart/DiabetesChart";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../utils/API";
import {
  Row,
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import AlertHelper from "../components/AlertHelper/AlertHelper";

class Main extends React.Component {
  state = {
    startDate: new Date(),
    glucoseLevel: "",
    results: {}
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
    // console.log("Date: " + this.state.startDate);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log("level: " + this.state.glucoseLevel);
  };

  saveToDatabase = () => {
    // console.log(this.state.startDate, this.state.glucoseLevel);
    API.saveData({
      date: this.state.startDate,
      glucose: this.state.glucoseLevel
    })
      .then(res => {
        let date = this.state.startDate;
        console.log("Date: " + date);
        API.getByDay({date})
        .then(res => {
          this.setState({results: res.data, glucose: "", startDate: new Date()})
        })
      })
      .catch(err => console.log(err));
      
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="3">
              <ProfileCard />
            </Col>
            <Col md="9">
              <Form>
                <h4>Date</h4>
                <FormGroup>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="glucose reading">
                    <h4>Glucose Levels</h4>
                  </Label>
                  <Input
                    type="text"
                    name="glucoseLevel"
                    value={this.state.glucoseLevel}
                    onChange={this.handleInputChange}
                    placeholder="mg/dl"
                  />
                </FormGroup>
                <Button onClick={() => this.saveToDatabase()}>Submit</Button>
              </Form>
              <br />
              <DiabetesChart />
              <AlertHelper />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
