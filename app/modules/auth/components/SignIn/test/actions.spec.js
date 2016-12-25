import * as actions from '../actions';

describe('SignIn actions', () => {

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
        user: expectedUser
      }];


    mock.onGet(config.api + config.auth.signIn).reply(200, expectedUser);

    return store.dispatch(actions.signIn('try', 'try'))
      .then(() => {
        let actualActions = store.getActions();
        let actualUser = JSON.parse(sessionStorage.getItem("user"));
        expect(actualActions).to.eql(expectedActions);
        expect(browserHistoryPushStub).to.have.been.calledOnce;
        expect(browserHistoryPushStub).to.have.been.calledWith('/');
        expect(actualUser).to.eql(expectedUser);
        browserHistoryPushStub.restore();
      });
  });

});