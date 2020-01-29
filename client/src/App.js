import React from "react";
import history from "./utils/history";
import NavBar from "./components/NavBar/NavBar";
import { Router, Route } from "react-router-dom";
import Profile from "./components/ProfileCard/ProfileCard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Login/Home";

const App = () => (
  <div className="App">
    <Router history={history}>
      <header>
        <NavBar />
      </header>
      <body>
        <Route path="/" exact />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/home" component={Home} />
      </body>
    </Router>
  </div>
)

export default App;




