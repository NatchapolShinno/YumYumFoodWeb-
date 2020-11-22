import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

const containerMargin = {
    padding: '20px 0 0 0',margin: '0 0 0 70px',
}
class Dashboard extends Component {
  render() {
      //console.log(this.props);
    return (
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
    );
  }
}
const mapStateToProps = (state) => {
    return{
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)

