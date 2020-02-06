import ProfileCard from "../../components/ProfileCard/ProfileCard";
import DiabetesChart from "../../components/DiabetesChart/DiabetesChart";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../utils/API";
import { Row, Container, Col, Button, Form, FormGroup } from "reactstrap";
import SearchResults from "../../components/SearchResults/SearchResults";

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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.update);
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
          let date = item.date.split("T", 1);
          let time = item.date.split(".", 1);
          let newTime = time[0].split("T");
          let setTime = newTime[1].split(":", 2);
          let realTime = setTime.join(":");
          let newObj = {
            id: item._id,
            value: item.glucose,
            high: 160,
            low: 100,
            date: realTime,
            calender: date
          };
          newArray.unshift(newObj);
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

  delete = id => {
    API.deleteRecord(id)
      .then(res => this.getFromDatabase())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="3" sm="6">
              <ProfileCard />
              <Form>
                <h4>Date</h4>
                <FormGroup className="fuckery">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    // withPortal
                  />
                </FormGroup>
                <Button onClick={() => this.getFromDatabase()}>Search</Button>
                </Form>
            </Col>
            <Col md="9" sm="12">
            
                <DiabetesChart
                  className="duhbetis"
                  results={this.state.results}
                  generateData={this.generateData}
                />
              
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <SearchResults
                editData={this.state.chartData}
                delete={this.delete}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
