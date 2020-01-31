import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import DiabetesChart from "../components/DiabetesChart/DiabetesChart";
import InputForm from "../components/InputForm/InputForm";
import API from "../utils/API";
import { format, compareAsc } from "date-fns";
import { Row, Container, Col } from "reactstrap";
// import AlertHelper from "../components/AlertHelper/AlertHelper";

class Main extends React.Component {
  state = {
    today: new Date(),
    glucoseLevel: "",
    results: [],
    chartData: []
  };

  componentDidMount() {
    this.setDate();
    this.getFromDatabase();
  }

  setDate = () => {
    const todaysDate = format(new Date(), "MM/dd/yyyy");
    document.getElementById("dateStamp").innerHTML = todaysDate;
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveToDatabase = () => {
    API.saveData({
      date: this.state.today,
      glucose: this.state.glucoseLevel
    })
      .then(res => {
        this.getFromDatabase();
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
        for (let i = 0; i < resData.length; i++) {
          const item = resData[i];
          let newObj = {
            "value": item.glucose,
            "high": 130,
            "low": 80,
            "date": [i],
            "realDate": item.date
          };
          newArray.push(newObj);
        }
        this.setState({ chartData: newArray });
      })
      .catch(err => console.log(err));
  };

  generateData = (start, end, step) => {
    const data = this.state.chartData;
    // const data = [{
    //   "value": 85.12312,
    //   "high" : 130,
    //   "low" : 80,
    //   "date": 10
    // },
    // {
    //   "value": 100.43,
    //   "high" : 130,
    //   "low" : 80,
    //   "date": 25
    // },
    // {
    //   "value": 150.45433,
    //   "high" : 130,
    //   "low" : 80,
    //   "date": 30
    // },{
    //   "value": 40.12312,
    //   "high" : 130,
    //   "low" : 80,
    //   "date": 45
    // },
    // {
    //   "value": 110.432232,
    //   "date": 50.1
    // },
    // {
    //   "value": 100.45433,
    //   "high" : 130,
    //   "low" : 80,
    //   "date": 60
    // },
    // {
    //   "value": 80.45433,
    //   "high" : 130,
    //   "low" : 80,
    //   "date": 70
    // }];
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
              <h4 id="dateStamp"></h4>
              <InputForm
                saveToDatabase={this.saveToDatabase}
                value={this.state.glucoseLevel}
                onChange={this.handleInputChange}
              />
              <DiabetesChart
                results={this.state.results}
                generateData={this.generateData}
              />
              {/* <AlertHelper /> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
