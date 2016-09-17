import {createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {combineReducers} from 'redux-immutablejs';
import Immutable from 'immutable';

// Reducers
import * as allReducers from 'modules/shared/reducers';

const reducers =  combineReducers({
  ...allReducers
  });
//or in es5
// const reducers =  combineReducers(Object.assign({routing:routerReducer,form:form},allReducers));

//Store
const configureStore = (initialState = Immutable.fromJS({})) => {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
export const store = configureStore();