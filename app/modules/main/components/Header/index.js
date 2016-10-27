import React from 'react';
import { Link } from 'react-router';
import {Navbar, NavItem, Row, Icon} from 'react-materialize';

class PageHeader extends React.Component {
  render() {
    return (
      <header>
        <Row>
        <Navbar brand='logo' right className='grey darken-4'>
          <NavItem href='/'>Dashboard</NavItem>
          <NavItem href='/card'>Card</NavItem>
          <NavItem href='#'><Icon>power_settings_new</Icon></NavItem>
        </Navbar>
        </Row>
      </header>
    )
  }
}
export default PageHeader;