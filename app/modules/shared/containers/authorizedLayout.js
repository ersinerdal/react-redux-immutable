import React from 'react';
import Header from 'modules/shared/components/header';
import Footer from 'modules/shared/components/footer';
import axios from 'axios';
import { push } from 'react-router-redux'
import {connect} from 'react-redux'

class authorizedLayout extends React.Component {
  constructor(props) {
    super(props);
    this.isSignedIn = false;
  }
  componentWillMount() {
    this.checkAuth();
  }
  componentWillReceiveProps(nextProps) {
    this.checkAuth();
  }
  checkAuth() {
    const { dispatch } = this.props;
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(user === null || user === undefined || user === ''){
      this.isSignedIn = false;
      dispatch(push('/sign_in'));
    }else{
      this.setAuth(user);
    }
  }
  setAuth(user){
    const {token} = user;
    const { dispatch } = this.props;
    this.isSignedIn = true;
    axios.defaults.headers.common['Authorization'] = token;
    axios.interceptors.response.use(function (response) {
      if (response.status == 401) {
        sessionStorage.clear();
        dispatch(push('/sign_in'));
      }
      return response;
    }, function (error) {
      return Promise.reject(error);
    });
  }
  render() {
    let component = !this.isSignedIn ? false : (
          <div className="app">
              <Header />
              <main>
                  {this.props.children}
              </main>
              <Footer />
          </div>
      );
    return component;
  }
}

authorizedLayout.propTypes = {
    children:React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const {auth} =  state.toJS();
  return auth;
}

export default connect(mapStateToProps)(authorizedLayout);
