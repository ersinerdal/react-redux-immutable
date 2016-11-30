import React from 'react';
import Users from 'modules/users/containers/Users';

class UserLayout extends React.Component {
    render() {
        return (
            <div>
                <h1>Users</h1>
                <Users />
            </div>
        )
    }
}
export default UserLayout;
