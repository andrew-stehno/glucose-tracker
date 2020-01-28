import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../utils/API";

class FormPage extends React.Component {
  state = {
    startDate: new Date(),
    glucoseLevel: ""
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
        this.setState({glucoseLevel: ""});
        this.setState({startDate: new Date()});
      })
      .catch(err => console.log(err));
    };

  render() {
    return (
      <div>
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
        </Form><br />
        {/* <Form>
          <h4>Search by Date</h4>
          <FormGroup>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Search</Button>
        </Form> */}
      </div>
    );
  }
}

export default FormPage;
