import {getCustomers} from '../api/customerApi';
export const REQUEST_CUSTOMERS = 'REQUEST_CUSTOMERS';
export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';


function requestCustomers() {
    return {
        type: REQUEST_CUSTOMERS
    }
}

function receiveCustomers(customerList) {
    return {
        type: RECEIVE_CUSTOMERS,
        customerList
    }
}

export function fetchCustomers() {
    return dispatch => {
        dispatch(requestCustomers());
        return getCustomers().then(function(response) {
            dispatch(receiveCustomers(response.data));
        });
    }
}