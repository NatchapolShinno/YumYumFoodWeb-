import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

import Headline from './Headline'
import Divider from './Divider'
import Welcome from './welcome-message'

import Jumbotron from 'react-bootstrap/Jumbotron'
{/*import PromoCarousel from './PromoCarousel'*/}

const containerMargin = {
    padding: '20px 0 0 0',margin: '0 0 0 70px',
}

var paddingtop = {
    paddingTop: "5%"
}
class Dashboard extends Component {
  render() {
      //console.log(this.props);
    return (
      <div>

        <div>
          <Jumbotron>
            <div style={paddingtop}>
                <Welcome />
                <Headline />
                <Divider />
            </div>
          </Jumbotron>
        </div>


        <Container style={containerMargin}>
          <Row>
            <Col sm={10}>
            </Col>
            <Col sm={2} style={{padding: "0 0 10px 0"}}>
              <Notifications />
            </Col>
          </Row>
          <Row>
            <Col sm={1}></Col>
            <Col sm={11}>
              <ProjectList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return{
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)
