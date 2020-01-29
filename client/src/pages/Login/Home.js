import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Table from "../../components/Table/Table";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Footer from "../../components/Footer/Footer";
import { Container } from "reactstrap";

class Home extends Component {
    State = {
        glucose: []
    };

    componentDidMount() {
        this.loadGlucose();
    }

    loadGlucose = () => {
        API.getGlucose()
            .then(res => this.setState({ Glucose: res.data }))
            .catch(err => console.log(err));
    };


}


const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron />
                    
                </Col>
            </Row>
            <Row>
                <Col size="md-3">
                    <ProfileCard />
                </Col>
                <Col size="md-6">
                    <form>
                        <Input name="mmol/L" placeholder="Mmol/L (required)" />
                        <Input name="mg/DL" placeholder="Mg/DL (required)" />
                        <FromBtn>Submit</FromBtn>
                    </form>
                </Col>
            </Row>
            
            
        </Container>
         
        <Table /> ,
        <ArticleCard /> ,
        <Footer />
   )

};

 

export default Home;

