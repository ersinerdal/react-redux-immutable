import React from 'react';
import {Table} from 'react-materialize';


class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="user-list">
      <Table hoverable={true} stripped bordered={true} responsive={true}>
        <thead>
          <tr>
            <th data-field="id">ID</th>
            <th data-field="name">Name</th>
            <th data-field="age">Age</th>
            <th data-field="gender">Gender</th>
            <th data-field="email">Email</th>
            <th data-field="phone">Phone</th>
            <th data-field="address">Address</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(function (value) {
            return (
            <tr>
              <td>{value._id}</td>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.gender}</td>
              <td>{value.email}</td>
              <td>{value.phone}</td>
              <td>{value.address}</td>
            </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
    )
  }
}

UserList.propTypes = {
  data: React.PropTypes.array.isRequired
};

UserList.defaultProps = {
  data: []
};

export default UserList;