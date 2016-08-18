import React from 'react';
import {connect} from 'react-redux'
import Customer from 'modules/customer/components/customer';
import {fetchCustomers} from 'modules/customer/actions/actions';
import Spinner from 'modules/shared/components/spinner';

class Customers extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchCustomers())
    }

    render() {
        const {customerList,isLoading} = this.props;
        return (
            <div>
                {isLoading ? <Spinner /> : <Customer data={customerList}/>}
            </div>
        )
    }
}
Customers.propTypes = {
    customerList:React.PropTypes.array.isRequired,
    isLoading:React.PropTypes.bool.isRequired
};
Customers.defaultProps ={
    customerList:[],
    isLoading:false
};
function mapStateToProps(state) {
    const {customers} =  state.toJS();
    return customers;
}
export default connect(mapStateToProps)(Customers);
