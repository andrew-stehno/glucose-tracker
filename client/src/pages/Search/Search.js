import React, { Component } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import DiabetesChart from "../../components/DiabetesChart/DiabetesChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../utils/API";
import { Row, Container, Col, Button, Form, FormGroup } from "reactstrap";
import SearchResults from "../../components/SearchResults/SearchResults";
import "moment-timezone";
import moment from "moment-timezone";

const withMainHOC = Component => {
  return function(props) {
    const { user } = useAuth0();
    return <Component {...props} user={user} />;
  };
};

class Search extends Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      results: [],
      chartData: []
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user) {
      this.getFromDatabase()
    }
  };

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

  getFromDatabase = (props) => {
    let data = {
      date: this.state.startDate,
      userId: this.props.user.sub
    }
    API.getByDay(data)
      .then(res => {
        this.setState({
          results: res.data
        });
        // Massage raw data into useable data:
        const resData = this.state.results;
        const newArray = [];

        resData.forEach(item => {
          const testTime = moment
            .utc(item.date)
            .tz("America/Denver")
            .format();
          let date = testTime.split("-", 3);
          let time = date[2].split("T");
          let newTime = time[1].split(":", 2);
          let setTime = newTime.join(":");
          let newObj = {
            id: item._id,
            value: item.glucose,
            high: 160,
            low: 100,
            date: setTime,
            calender: date
          };
          newArray.unshift(newObj);
        });
        this.setState({ chartData: newArray });
      })
      .catch(err => console.log(err));
  };

  generateData = (start, end, step) => {
    const data = this.state.chartData;

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

export default withMainHOC(Search);
