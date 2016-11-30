import React from 'react';
import { connect } from 'react-redux'
import UserList from '../../components/UserList';
import {fetchUsers} from './actions';
import {fetchUsersMenu} from './actions';
import Spinner from 'modules/shared/components/Spinner';
import SideNav from 'modules/shared/components/SideNav'
import {Col,Row} from 'react-materialize';

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
        <Row>
          <Col  className="hide-on-small-only" m={3} l={2} > {usersMenuIsLoading ? <Spinner /> : <SideNav data={usersMenu} />}</Col>
          <Col s={12} m={9} l={10} >{usersIsLoading ? <Spinner /> : <UserList data={userList} />}</Col>
        </Row>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state.toJS().Users;
}
export default connect(mapStateToProps)(Users);