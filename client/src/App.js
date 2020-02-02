import React from "react";
import history from "./utils/history";
import NavBar from "./components/NavBar/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Update from "./pages/Update";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import Home from "./pages/Login/Login";


const App = () => (
  <div className="App">
    <Router history={history}>
      <header>
        <NavBar />
      </header>
      {/* <DiabetesChart/> */}
      <Switch>
        {/* <Route exact path="/home" component={Home} /> */}
        <Route path="/" exact />
        <PrivateRoute exact path="/Main" component={Main} />
        <PrivateRoute exact path="/Search" component={Search} />
        <PrivateRoute exact path="/update/:id" component={Update} />
      </Switch>

    </Router>
  </div>
)

export default App;




