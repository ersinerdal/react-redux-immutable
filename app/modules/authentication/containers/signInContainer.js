import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';

import SignIn from '../components/signIn';

import {Row, Col} from 'react-materialize';
import css from '../styles.css';

class signInContainer extends Component {
  render() {
    return (
      <Row className="container m2">
        <Row className="login-window hoverable z-depth-3">
          <Row className="login-header">
            <hgroup>
              <h2 className="center-align amber-text">Company</h2>
              <p className="center-align amber-text">please login</p>
            </hgroup>
          </Row>
          <Row className="row login-container">
            <Col s={3}>&nbsp;</Col>
            <Col s={6}>
              <SignIn />
            </Col>
            <Col s={3}>&nbsp;</Col>
          </Row>
          <Row className="login-footer">
            <p className="center-align">React Boilerplate <sup>&copy;</sup></p>
          </Row>
        </Row>
      </Row>
    );
  }
}

export default signInContainer;
