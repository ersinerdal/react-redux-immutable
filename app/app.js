import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {store} from './configureStore'

// Modules
import MainLayout from 'modules/main/MainLayout';
import AuthLayout from 'modules/auth/AuthLayout';
import DashboardLayout from 'modules/dashboard/DashboardLayout';
import UserLayout from 'modules/users/UserLayout';

// Components
import SingIn from 'modules/auth/components/SignIn';
import SingUp from 'modules/auth/components/SignUp';


ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={AuthLayout}>
        <Route path="/sign_in" component={SingIn}/>
        <Route path="/sign_up" component={SingUp}/>
      </Route>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={DashboardLayout}/>
        <Route path="/users" component={UserLayout}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
