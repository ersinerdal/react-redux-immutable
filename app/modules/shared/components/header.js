import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Dashboard</Link>
                    |
                    <Link to="/card">Card</Link>
                    |
                    <Link to="/credit">Credit</Link>
                    |
                    <Link to="/account">Account</Link>
                    ----
                    <Link to="/sign_out">Sign Out</Link>
                </nav>
            </header>
        )
    }
}
export default Header;