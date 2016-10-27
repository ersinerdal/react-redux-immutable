import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Input, Button, Col,Row, Icon, Card} from 'react-materialize';

import style from './styles.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.props);
  }
  render() {
    const {resetForm, submitting} = this.props;
    return (
    <Row>
      <Col s={10} m={6} l={4} offset='l4 m3 s1'>
        <Card className='lighten-4 black-text' title='Sign Up'>
          <form id="signInForm" name="signInForm" onSubmit={::this.handleSubmit}>
            <Row>
              <Input ref="first_name" s={12} type="text" id="first_name" label="First Name" validate></Input>
              <Input ref="last_name" s={12} type="text" id="last_name" label="Last Name" validate></Input>
              <Input ref="email" s={12} type="email" id="email" label="Email" validate></Input>
              <Input ref="password" s={12} type="password" id="password" label="Password" validate></Input>
              <Input ref="repassword" s={12} type="password" id="repassword" label="Re-enter Password" validate></Input>
            </Row>
            <Row>
              <Col s={6}>
                <Button className="waves-effect waves-light btn  deep-orange darken-4" type="submit" disabled={submitting}> Send <Icon right>send</Icon></Button>
              </Col>
              <Col s={6} className="right-align">
                <a href='/sign_in'>Sign In</a>
              </Col>
            </Row>
          </form>
        </Card>
      </Col>
    </Row>
    );
  }
}

SignUp.propTypes = {
  submitting: React.PropTypes.bool.isRequired
};
SignUp.defaultProps ={
  submitting:false
};

function mapStateToProps(state) {
  const {SignUp} =  state.toJS();
  return SignUp;
}
export default connect(mapStateToProps)(SignUp);
