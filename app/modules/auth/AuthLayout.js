import React from 'react';
import {Navbar, NavItem, Row} from 'react-materialize';

class AuthLayout extends React.Component {
  render() {
        return (
            <Row>
              <Navbar brand='logo' right className='grey darken-4'>
                <NavItem href='/get-started'>Getting started</NavItem>
              </Navbar>
                <main>
                    {this.props.children}
                </main>
            </Row>
        )
    }
}

AuthLayout.propTypes = {
    children:React.PropTypes.object.isRequired
};

export default AuthLayout;
