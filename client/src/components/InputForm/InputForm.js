import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

class FormPage extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
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
              name="glucose levels"
              id="glucoseLevels"
              placeholder="Enter data"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form><br />
        <Form>
          <h4>Search by Date</h4>
          <FormGroup>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Search</Button>
        </Form>
      </div>
    );
  }
}

export default FormPage;
