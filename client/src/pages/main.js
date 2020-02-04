import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import DiabetesChart from "../components/DiabetesChart/DiabetesChart";
import InputForm from "../components/InputForm/InputForm";
import API from "../utils/API";
import { format } from "date-fns";
import { Row, Container, Col } from "reactstrap";
import AlertHelper from "../components/AlertHelper/AlertHelper.js";


class Main extends React.Component {
  state = {
    today: new Date(),
    glucoseLevel: "",
    results: [],
    chartData: [],
    isModalOpen: false
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

  toggleModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen}) 
    
  }

  saveToDatabase = () => {
    API.saveData({
      date: this.state.today,
      glucose: this.state.glucoseLevel
    })
      .then(res => {
        this.getFromDatabase();
      })
        .then(() => {
          this.toggleModal()
        }) 
      .catch(err => console.log(err));
  };

  updateChart = () => {
    
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
          let time = item.date.split(".", 1);
          let newTime = time[0].split("T");
          let setTime = newTime[1].split(":", 2);
          let realTime = setTime.join(":");
          let newObj = {
            "value": item.glucose,
            "high": 160,
            "low": 100,
            "date": realTime
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

  render() {
    return (
      
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
              
            </Col>
          </Row>
          <AlertHelper
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal} />
        </Container>
      
    );
  }
}

export default Main;
