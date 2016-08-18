import React, {Component} from 'react';
import { reduxForm } from 'redux-form';

import style from '../styles2.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.props);
  }
  render() {
    const {fields: {firstName, lastName, email},resetForm, submitting} = this.props;
    return (
      <form onSubmit={::this.handleSubmit}>
        {this.props.fields.firstName.value}
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" {...firstName}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" {...lastName}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" {...email}/>
        </div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={submitting} onClick={resetForm}>
          Clear Values
        </button>
      </form>
    );
  }
}

SignUp.propTypes = {
  fields: React.PropTypes.object.isRequired,
  submitting: React.PropTypes.bool.isRequired
};
SignUp.defaultProps ={
  submitting:false
};
export default reduxForm({
  form: 'contact',
  fields: ['firstName', 'lastName', 'email'],
  getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS()
})(SignUp);
