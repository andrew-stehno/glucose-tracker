import React, { Component } from "react";
import PrivateRoute from "../../components/PrivateRoute";

import Jumbotron from "../../components/Jumbotron";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import Footer from "../../components/Footer";


class Home extends Component {
    render() {
        return (
            <PrivateRoute/>,
            
            <Jumbotron/>,
            <Carousel/>,
            <Card/>,
            <Footer/>
           
        )
    }
};

export default Home;