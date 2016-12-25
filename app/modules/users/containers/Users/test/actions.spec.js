import * as actions from '../actions';

describe('Users actions', () => {

  afterEach(() => {
    mock.reset();
  });



  it('should fetch users', () => {

    const store = mockStore();
    const expectedUsers = [{
      "_id": "58178c123cde35a680265fdd",
      "name": "Spence Hansen",
      "gender": "male",
      "email": "spencehansen@musix.com"
    }];

    const expectedActions = [
      {type: 'REQUEST_USERS'},
      {
        type: 'RECEIVE_USERS',
        userList: expectedUsers
      }];

    mock.onGet(config.api + config.users.userList).reply(200, expectedUsers);

    return store.dispatch(actions.fetchUsers())
      .then(() => {
        let actualActions = store.getActions();
        expect(actualActions).to.eql(expectedActions);
      });
  });

  it('should fetch usersMenu', () => {

    const store = mockStore();
    const expectedUserMenu = [
      {"url":"/users/url1", "text":"user link 1"}
    ];

    const expectedActions = [
      {type: 'REQUEST_USERS_MENU'},
      {
        type: 'RECEIVE_USERS_MENU',
        usersMenu: expectedUserMenu
      }];

    mock.onGet(config.api + config.users.usersMenu).reply(200, expectedUserMenu);

    return store.dispatch(actions.fetchUsersMenu())
      .then(() => {
        let actualActions = store.getActions();
        expect(actualActions).to.eql(expectedActions);
      });
  });

});