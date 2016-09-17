import React from 'react';

class AuthLayout extends React.Component {
  render() {
        return (
            <div className="app">
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

AuthLayout.propTypes = {
    children:React.PropTypes.object.isRequired
};

export default AuthLayout;
