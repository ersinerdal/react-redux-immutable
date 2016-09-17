import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {signIn} from './actions';

import {Input, Button, Col, Icon} from 'react-materialize';

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
      <form id="signInForm" name="signInForm" onSubmit={::this.handleSubmit}>
        <Input ref="email" s={12} type="email" id="email" label="Email"> <Icon>account_circle</Icon> </Input>
        <Input ref="password" s={12} type="password" id="password" label="Password"> <Icon>vpn_key</Icon> </Input>
        <Col s={6}>
          <Button className="waves-effect waves-light btn" type="submit" disabled={submitting}>Sign In <Icon right>send</Icon></Button>
        </Col>
        <Col s={6} className="right-align">
          <Link className="waves-effect waves-light btn amber" to="/sign_up"><Icon left>add</Icon> Create </Link>
        </Col>
      </form>
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
