import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {signIn} from '../actions';

import {Input, Button, Col, Icon} from 'react-materialize';
import css from '../styles.css';

const validate = values => {
  const errors = {}
  var hasError = false
  if(!values.email) {
    errors.email = 'Required'
    hasError = true
  }
  if(!values.password){
    errors.password = 'Required'
    hasError = true
  }
  return hasError && errors
}

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
    const {fields: {email, password}, submitting} = this.props;
    return (
      <form id="signInForm" name="signInForm" onSubmit={::this.handleSubmit}>
        <Input ref="email" s={12} type="email" id="email" label="Email" {...email} validate> <Icon>account_circle</Icon> </Input>
        {email.touched && email.error && <label for="email" data-error="wrong" data-success="right">{email.error}</label>}
        <Input ref="password" s={12} type="password" id="password" label="Password" {...password}> <Icon>vpn_key</Icon> </Input>
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
  fields: React.PropTypes.object.isRequired,
  submitting: React.PropTypes.bool.isRequired
};
SignIn.defaultProps ={
  submitting:false
};

export default reduxForm({
  form: 'SignInForm',
  fields: ['email', 'password'],
  null,
  null,
  validate,
  getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS()
})(SignIn);
