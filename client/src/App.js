// import React, { Component } from "react";
// // import { Button } from 'reactstrap';
// // see npm reactstrap!!!

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         Get pricked!
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
// import NavBar from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Home from "../src/pages/Login/Home"

const App = () => (
  <Router>
    <div>
      <switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/history" component={history} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/privateRoute" component={PrivateRoute} />
      </switch>
    </div>
  </Router>
)



export default App;