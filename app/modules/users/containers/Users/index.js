import React from 'react';
import { connect } from 'react-redux'
import UserList from '../../components/UserList';
import {fetchUsers} from './actions';
import {fetchUsersMenu} from './actions';
import Spinner from '../../../shared/components/Spinner';
import SideNav from '../../../shared/components/SideNav'
import {Col,Row} from 'react-materialize';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchUsersMenu();
  }
  render() {
    const {usersMenu,userList,usersIsLoading,usersMenuIsLoading} = this.props;
    return (
      <div className="users clearfix">
        <Row>
          <Col className="hide-on-small-only" m={3} l={2} > {usersMenuIsLoading ? <Spinner /> : <SideNav data={usersMenu} />}</Col>
          <Col s={12} m={9} l={10} >{usersIsLoading ? <Spinner /> : <UserList data={userList} />}</Col>
        </Row>
      </div>
    )
  }
}
const mapDispatchToProps =  (dispatch) => {
  return {
    fetchUsers: function () {
      dispatch(fetchUsers());
    },
    fetchUsersMenu: function () {
      dispatch(fetchUsersMenu());
    }
  }
}
const mapStateToProps = (state) => {
  const {Users} =  state.toJS();
  return Users;
}
export default connect(mapStateToProps,mapDispatchToProps)(Users);
export { Users as plainComponent};
