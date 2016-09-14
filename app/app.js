import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import {store, history} from './configureStore'

// Layouts
import authorizedLayout from 'modules/shared/containers/authorizedLayout';

// Components
import DashboardContainer from 'modules/dashboard/dashboardContainer';
import CardContainer from 'modules/card/cardContainer';
import CustomerContainer from 'modules/customer/customerContainer';
import authContainer from 'modules/authentication/authContainer';
import SingIn from 'modules/authentication/containers/signInContainer';
import SingUp from 'modules/authentication/components/signUp';


ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route component={authContainer}>
        <Route path="/sign_in" component={SingIn}/>
        <Route path="/sign_up" component={SingUp}/>
      </Route>
      <Route path="/" component={authorizedLayout}>
        <IndexRoute component={DashboardContainer}/>
        <Route path="/card" component={CardContainer}/>
        <Route path="/customer" component={CustomerContainer}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
