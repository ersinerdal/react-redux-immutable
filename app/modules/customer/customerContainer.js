import React from 'react';
import Customers from 'modules/customer/components/customers';

class CustomerContainer extends React.Component {
    render() {
        return (
            <div className="customers">
                <h1>• Customers</h1>
                <Customers />
            </div>
        )
    }
}
export default CustomerContainer;