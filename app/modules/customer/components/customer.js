import React from 'react';

class Customer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {this.props.data.map(function(value, i) {
                    return (
                        <li key={i}>{value.name} {value.surname}</li>
                    );
                })}
            </ul>
        )
    }
}

Customer.propTypes = {
    data:React.PropTypes.array.isRequired
};

Customer.defaultProps ={
    data:[]
};

export default Customer;