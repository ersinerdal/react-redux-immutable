import React from 'react';
import { connect } from 'react-redux'
import UserList from '../../components/UserList';
import {fetchUsers} from './actions';
import {fetchUsersMenu} from './actions';
import Spinner from 'modules/shared/components/Spinner';
import SideNav from 'modules/shared/components/SideNav'
import style from './styles.css';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
    dispatch(fetchUsersMenu());
  }
  render() {
    const {usersMenu,userList,usersIsLoading,usersMenuIsLoading} = this.props;
    return (
      <div className="users clearfix">
        {usersMenuIsLoading ? <Spinner /> : <SideNav data={usersMenu} />}
        {usersIsLoading ? <Spinner /> : <UserList data={userList} />}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state.toJS().Users;
}
export default connect(mapStateToProps)(Users);