import React from 'react';

class authContainer extends React.Component {
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

authContainer.propTypes = {
    children:React.PropTypes.object.isRequired
};

export default authContainer;
