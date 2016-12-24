import * as actions from '../actions';

describe('SignUp actions', () => {

  afterEach(() => {
    mock.reset();
  });

  it('should Sign the user up and get token', () => {

    const store = mockStore();
    const expectedUser = {
      "id": 1,
      "name": "username",
      "surname": "testsurname",
      "token": "testtokentokentokentokentokentokentoken"
    };
    const expectedActions = [
      {type: 'REQUEST_SIGN_UP'},
      {
        type: 'RECEIVE_SIGN_UP',
        user: {
          id: 1,
          name: 'username',
          surname: 'testsurname',
          token: 'testtokentokentokentokentokentokentoken'
        }
      }];

    mock.onGet(config.api + config.auth.signUp).reply(200, expectedUser);

    return store.dispatch(actions.signUp('try', 'try','try', 'try'))
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