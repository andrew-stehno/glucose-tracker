import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
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

const withMainHOC = Component => {
  return function(props) {
    const { user } = useAuth0();
    return <Component {...props} user={user} />;
  }
};

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      today: moment().format(),
      glucoseLevel: "",
      results: [],
      chartData: [],
      isModalOpen: false
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user) {
      this.getFromDatabase()
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  saveToDatabase = (props) => {
    API.saveData({
      date: this.state.today,
      glucose: this.state.glucoseLevel,
      userId: this.props.user.sub
    })
      .then(res => {
        this.getFromDatabase();
      })
      .then(() => {
        this.toggleModal();
      })
      .catch(err => console.log(err));
  };

  getFromDatabase = (props) => {
    let data = {
      date: this.state.today,
      userId: this.props.user.sub
    }
    API.getByDay(data)
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
            high: 180,
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

  email = () => {};

  render() {
    return (
      <Container>
        <Row><h2><Moment local>{this.state.today}</Moment></h2></Row>
        <Row>
          <Col md="3">
            <ProfileCard />
            <InputForm
              className="formBar"
              saveToDatabase={this.saveToDatabase}
              value={this.state.glucoseLevel}
              onChange={this.handleInputChange}
            />
          </Col>
          <Col md="9">
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
      // </div>
      // </div>

    );
  }
}

export default withMainHOC(Main);
