import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import DiabetesChart from "../../components/DiabetesChart/DiabetesChart";
import InputForm from "../../components/InputForm/InputForm";
import AlertHelper from "../../components/AlertHelper/AlertHelper";
import API from "../../utils/API";
import { Row, Container, Col } from "reactstrap";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment-timezone";
import "./main.css";

class Main extends React.Component {
  state = {
    today: moment().format(),
    glucoseLevel: "",
    results: [],
    chartData: [],
    isModalOpen: false
  };

  componentDidMount() {
    this.getFromDatabase();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  saveToDatabase = () => {
    API.saveData({
      date: this.state.today,
      glucose: this.state.glucoseLevel
    })
      .then(res => {
        this.getFromDatabase();
      })
      .then(() => {
        this.toggleModal();
      })
      .catch(err => console.log(err));
  };

  getFromDatabase = () => {
    let date = this.state.today;
    API.getByDay(date)
      .then(res => {
        this.setState({
          results: res.data,
          today: new Date(),
          glucoseLevel: ""
        });
        // Massage raw data into useable data:
        const resData = this.state.results;
        const newArray = [];

        resData.forEach(item => {
          const testTime = moment
            .utc(item.date)
            .tz("America/Denver")
            .format();
          let time = testTime.split(".", 1);
          let newTime = time[0].split("T");
          let setTime = newTime[1].split(":", 2);
          let realTime = setTime.join(":");
          let newObj = {
            value: item.glucose,
            high: 160,
            low: 100,
            date: realTime
          };
          newArray.unshift(newObj);
        });
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
      <Container>
        <Row>
          <Col md="3">
            <ProfileCard />
          </Col>
          <Col md="9">
            <Moment local>{this.state.today}</Moment>
            <InputForm
              className="formBar"
              saveToDatabase={this.saveToDatabase}
              value={this.state.glucoseLevel}
              onChange={this.handleInputChange}
            />

            <DiabetesChart
              results={this.state.results}
              generateData={this.generateData}
            />
          </Col>
        </Row>
        {this.state.isModalOpen && (
          <AlertHelper
            isOpen={this.state.isModalOpen}
            toggle={this.toggleModal}
            bsLevel={this.state.glucoseLevel}
          />
        )}
      </Container>
    );
  }
}

export default Main;
