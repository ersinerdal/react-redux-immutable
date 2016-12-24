import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiImmutable from 'chai-immutable';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Config from './config'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import sinon from 'sinon';
import * as router from 'react-router';


chai.use(chaiImmutable);
chai.use(sinonChai);

function storageMock() {
  var storage = {};

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return storage[key] || null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}
global.expect = chai.expect;
global.sessionStorage  = storageMock();
global.localStorage = storageMock();
global.mockStore = configureMockStore([thunk]);
global.config = new Config();
global.mock = new MockAdapter(axios);

router.browserHistory = { push: ()=>{} };
const browserHistoryPushStub = sinon.stub(router.browserHistory, 'push', () => { });

global.browserHistoryPushStub = browserHistoryPushStub;
