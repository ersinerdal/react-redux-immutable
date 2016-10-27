import * as actions from '../actions';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Config from '../../../../../config'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import sinon from 'sinon';
import * as router from 'react-router';


const mockStore = configureMockStore([thunk]);
const config = new Config();
const mock = new MockAdapter(axios);


describe('auth actions', () => {

  afterEach(() => {
    mock.reset();
  });

  it('should log the user in and get token', () => {

    const store = mockStore();
    const expectedUser = {
      "id": 1,
      "name": "username",
      "surname": "testsurname",
      "token": "testtokentokentokentokentokentokentoken"
    };
    const expectedActions = [
      {type: 'REQUEST_SIGN_IN'},
      {
        type: 'RECEIVE_SIGN_IN',
        user: {
          id: 1,
          name: 'username',
          surname: 'testsurname',
          token: 'testtokentokentokentokentokentokentoken'
        }
      }];

    router.browserHistory = { push: ()=>{} };
    let browserHistoryPushStub = sinon.stub(router.browserHistory, 'push', () => { });

    mock.onGet(config.api + config.signIn).reply(200, expectedUser);

    return store.dispatch(actions.signIn('try', 'try'))
      .then(() => {
        let actualActions = store.getActions();
        let actualUser = JSON.parse(sessionStorage.getItem("user"));
        expect(actualActions).to.eql(expectedActions);
        expect(browserHistoryPushStub).to.have.been.calledOnce;
        expect(browserHistoryPushStub).to.have.been.calledWith('/');
        expect(actualUser).to.eql(expectedUser);
        //browserHistoryPushStub.restore();
      });
  });

});