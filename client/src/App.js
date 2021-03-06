import React from "react";
import "./mainStyle.css";
import history from "./utils/history";
import NavBar from "./components/NavBar/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Search from "./pages/Search/Search";

import Update from "./pages/Update/Update";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/Login/Login";


const App = () => (
  <div className="App">
    <Router history={history}>
      <header>
        <NavBar />
      </header>
      <Switch>
        
        <Route path="/" exact component={Login} />
        <PrivateRoute exact path="/Main" component={Main} />
        <PrivateRoute exact path="/Search" component={Search} />
        <PrivateRoute exact path="/update/:id" component={Update} />
      </Switch>

    </Router>
  </div>
)

export default App;




