import {plainComponent as Users} from '../index'

describe ("Users Component", function () {

  it("should fetch users and usersMenu", function () {

    const usersMenu = [];
    const userList = [];
    const fetchUsers = sinon.spy();
    const fetchUsersMenu = sinon.spy();

    const wrapper = mount(<Users
      fetchUsers={fetchUsers}
      fetchUsersMenu={fetchUsersMenu}
      usersMenu={usersMenu}
      userList={userList}
    />)

    expect(fetchUsers.calledOnce).to.be.true;
    expect(fetchUsersMenu.calledOnce).to.be.true;

  });

  it("should render users and usersMenu", function () {

    const usersMenu = [{"url":"/users/url1", "text":"user link 1"}];

    const userList = [{
      "_id": "58178c125cbf0f8ac7163555",
      "guid": "77b0efeb-3201-47aa-9f57-b623c5c92e48",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "brown",
      "name": "Terry Mcleod",
      "gender": "female",
      "email": "terrymcleod@musix.com",
      "phone": "+1 (897) 502-3760",
      "address": "855 Imlay Street, Layhill, Alaska, 488",
      "registered": "2016-09-30T07:00:08 -03:00"
    }];

    const usersIsLoading = false;
    const usersMenuIsLoading = false;
    const fetchUsers = sinon.spy();
    const fetchUsersMenu = sinon.spy();

    const wrapper = mount(<Users
      fetchUsers={fetchUsers}
      fetchUsersMenu={fetchUsersMenu}
      usersMenu={usersMenu}
      userList={userList}
      usersIsLoading={usersIsLoading}
      usersMenuIsLoading={usersMenuIsLoading}
    />)

    const actualUserList = wrapper.find(".user-list tbody tr").length
    const expectedUserList = userList.length

    expect(actualUserList).to.be.equal(expectedUserList)

    const actualUsersMenuList = wrapper.find(".left-nav .collection a").length
    const expectedUsersMenuList = usersMenu.length

    expect(actualUsersMenuList).to.be.equal(expectedUsersMenuList)

  });

  it("should display spinners while fetching", function () {

    const usersIsLoading = true;
    const usersMenuIsLoading = true;
    const fetchUsers = sinon.spy();
    const fetchUsersMenu = sinon.spy();

    const wrapper = mount(<Users
      fetchUsers={fetchUsers}
      fetchUsersMenu={fetchUsersMenu}
      usersIsLoading={usersIsLoading}
      usersMenuIsLoading={usersMenuIsLoading}
    />)

   const spinners = wrapper.find(".loading").length

   expect(spinners).to.be.equal(2)


  });


});
