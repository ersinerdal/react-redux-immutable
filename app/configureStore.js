import {createHistory} from 'history'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import {createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {useRouterHistory} from 'react-router';
import {combineReducers} from 'redux-immutablejs';
import Immutable from 'immutable';

// Reducers
import routerReducer from 'immutableRouter';
import * as allReducers from 'modules/shared/reducers';

const reducers =  combineReducers({
  ...allReducers,
  routing:routerReducer
  });
//or in es5
// const reducers =  combineReducers(Object.assign({routing:routerReducer,form:form},allReducers));
const browserHistory = useRouterHistory(createHistory)({basename: '/'});
const rMiddleware = routerMiddleware(browserHistory);


//Store
const configureStore = (initialState = Immutable.fromJS({})) => {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(thunkMiddleware,rMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
export const store = configureStore();
export const history = syncHistoryWithStore(browserHistory, store,{
  selectLocationState (state) {
    return state.get('routing').toJS();
  }
});
