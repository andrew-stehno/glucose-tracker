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
import { Router, Route, } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
// import Home from "../src/pages/Login/Home";


const App = () => (
  <div className="App">
    <Router history={history}>
      <header>
        <NavBar/>
      </header>

      <switch>
        {/* <Route exact path="/home" component={Home} /> */}
        <Route path="/" exact />
        <PrivateRoute path="/profile" component={Profile} />
      </switch>

    </Router>
  </div>
)


// function App() {
//   return (
//     <div className="App">
//       <Router history={history}>
//         <header>
//           <NavBar />
//         </header>
//         <Switch>
//           <Route path="/" exact />
//           <PrivateRoute path="/profile" component={Profile} />
//         </Switch>
//       </Router>
//     </div>
//   );
// }


export default App;