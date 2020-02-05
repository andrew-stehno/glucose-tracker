import React from "react";
<<<<<<< HEAD:client/src/pages/main.js
import ProfileCard from "../components/ProfileCard/ProfileCard";
import DiabetesChart from "../components/DiabetesChart/DiabetesChart";
import InputForm from "../components/InputForm/InputForm";
import API from "../utils/API";
// import { format } from "date-fns";
import { Row, Container, Col } from "reactstrap";
import AlertHelper from "../components/AlertHelper/AlertHelper";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment-timezone";
=======
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import DiabetesChart from "../../components/DiabetesChart/DiabetesChart";
import InputForm from "../../components/InputForm/InputForm";
import API from "../../utils/API";
import { format } from "date-fns";
import { Row, Container, Col } from "reactstrap";
import AlertHelper from "../../components/AlertHelper/AlertHelper";
//import { create, all } from "mathjs";

>>>>>>> development:client/src/pages/Main/Main.js

class Main extends React.Component {
  state = {
    // today: new Date(),
    today: moment().format(),
    // today: moment.utc().tz('America/Denver').format(),
    // displayDate: "",
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
   
    console.log(this.state.today)
    // const todaysDate = format(new Date(), "MM/dd/yyyy");
    // document.getElementById("dateStamp").innerHTML = todaysDate;
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  toggleModal = () => {
<<<<<<< HEAD:client/src/pages/main.js
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
=======
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }
>>>>>>> development:client/src/pages/Main/Main.js



  saveToDatabase = () => {
    API.saveData({
      date: this.state.today,
      glucose: this.state.glucoseLevel
    })
      .then(res => {
        this.getFromDatabase();
      })
      .then(() => {
<<<<<<< HEAD:client/src/pages/main.js
        this.toggleModal();
=======
        this.toggleModal()
>>>>>>> development:client/src/pages/Main/Main.js
      })
      .catch(err => console.log(err));
  };

  updateChart = () => {};

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
          const testTime = moment.utc(item.date).tz('America/Denver').format();
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
<<<<<<< HEAD:client/src/pages/main.js
=======

>>>>>>> development:client/src/pages/Main/Main.js
      <Container>
        <Row>
          <Col md="3">
            <ProfileCard />
          </Col>
          <Col md="9">
<<<<<<< HEAD:client/src/pages/main.js
            {/* <h4 id="dateStamp"></h4> */}
            <Moment local>{this.state.today}</Moment>
=======
            <h4 id="dateStamp"></h4>
>>>>>>> development:client/src/pages/Main/Main.js
            <InputForm
              saveToDatabase={this.saveToDatabase}
              value={this.state.glucoseLevel}
              onChange={this.handleInputChange}
            />

            <DiabetesChart
              results={this.state.results}
              generateData={this.generateData}
            />
<<<<<<< HEAD:client/src/pages/main.js
          </Col>
        </Row>
        <AlertHelper
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
        />
      </Container>
    );
=======

          </Col>
        </Row>

        <AlertHelper
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          bsLevel={this.state.glucoseLevel}
        />
      </Container>

    )

>>>>>>> development:client/src/pages/Main/Main.js
  }
};

export default Main;
