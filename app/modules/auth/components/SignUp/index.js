import React, {Component} from 'react';
import {connect} from 'react-redux'

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
      <form onSubmit={::this.handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name"/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email"/>
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
