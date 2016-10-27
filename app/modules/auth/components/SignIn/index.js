import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {signIn} from './actions';

import {Input, Button, Col,Row, Icon, Card} from 'react-materialize';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e){
    e.preventDefault();
    const {email, password} = this.refs;
    const {dispatch} = this.props;
    dispatch(signIn(email.value, password.value));
  }

  render() {
    const {resetForm, submitting} = this.props;
    return (
    <Row>
      <Col s={10} m={6} l={4} offset='l4 m3 s1'>
        <Card className='lighten-4 black-text' title='Sign In'>
          <form id="signInForm" name="signInForm" onSubmit={::this.handleSubmit}>
            <Row>
              <Input ref="email" s={12} type="email" id="email" label="Email" validate></Input>
              <Input ref="password" s={12} type="password" id="password" label="Password" validate></Input>
            </Row>
            <Row>
              <Col s={6}>
                <Button className="waves-effect waves-light btn deep-orange darken-4" type="submit" disabled={submitting}> GO <Icon right>send</Icon></Button>
              </Col>
              <Col s={6} className="right-align">
                <a href='/sign_up'>Sign Up</a>
              </Col>
            </Row>
          </form>
        </Card>
      </Col>
    </Row>
    );
  }
}
SignIn.propTypes = {
  submitting: React.PropTypes.bool.isRequired
};
SignIn.defaultProps ={
  submitting:false
};


function mapStateToProps(state) {
  const {SignIn} =  state.toJS();
  return SignIn;
}
export default connect(mapStateToProps)(SignIn);
