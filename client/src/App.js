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
import NavBar from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import DiabetesChart from "./components/DiabetesChart";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={DiabetesChart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;