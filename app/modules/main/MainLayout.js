import React from 'react';
import Header from 'modules/main/components/Header';
import Footer from 'modules/main/components/Footer';
import axios from 'axios';
import { browserHistory } from 'react-router'
import {connect } from 'react-redux'


class MainLayout extends React.Component {
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
      browserHistory.push('/sign_in');
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
        browserHistory.push('/sign_in');
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

MainLayout.propTypes = {
    children:React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const {SingIn} =  state.toJS();
  return state.toJS();
}

export default connect(mapStateToProps)(MainLayout);
