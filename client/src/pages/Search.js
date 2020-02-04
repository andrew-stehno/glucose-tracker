import ProfileCard from "../components/ProfileCard/ProfileCard";
import DiabetesChart from "../components/DiabetesChart/DiabetesChart";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../utils/API";
import { Row, Container, Col, Button, Form, FormGroup } from "reactstrap";

class Search extends Component {
  state = {
    startDate: new Date(),
    results: [],
    chartData: []
  };

  componentDidMount() {
    this.getFromDatabase();
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  getFromDatabase = () => {
    let date = this.state.startDate;
    API.getByDay(date)
      .then(res => {
        this.setState({
          results: res.data
        });
        // Massage raw data into useable data:
        const resData = this.state.results;
        const newArray = [];
        for (let i = 0; i < resData.length; i++) {
          const item = resData[i];
          let time = item.date.split(".", 1);
          let newTime = time[0].split("T");
          let setTime = newTime[1].split(":", 2);
          let realTime = setTime.join(":");
          let newObj = {
            "value": item.glucose,
            "high": 130,
            "low": 80,
            "date": realTime
          };
          newArray.push(newObj);
        }
        this.setState({ chartData: newArray });
      })
      .catch(err => console.log(err));
  };

  generateData = (start, end, step) => {
    const data = this.state.chartData;
    // console.log("data", data);

    return data;
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
                <Button onClick={() => this.getFromDatabase()}>Search</Button>
                <DiabetesChart
                  results={this.state.results}
                  generateData={this.generateData}
                />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
