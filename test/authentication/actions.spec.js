import * as actions from '../../app/modules/auth/components/SignIn/actions';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Config from '../../app/config'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockStore = configureMockStore([thunk]);
const config = new Config();
const mock = new MockAdapter(axios);


describe('auth actions', () => {

  afterEach(() => {
    mock.reset();
  });

  it('should log the user in and get token', () => {

    const store = mockStore();
    const user = {
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
      },
      {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {method: 'push', args: ['/']}
      }];


    mock.onGet(config.api + config.signIn).reply(200, user);

    return store.dispatch(actions.signIn('try', 'try'))
      .then(() => {
        let actions = store.getActions();
        expect(actions[1].user).to.eql(user);
        expect(actions).to.eql(expectedActions);
      });


  });

});